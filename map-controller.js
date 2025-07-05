// --- MAP CONTROLLER ---

// Global state for the hover system
let hoverState = {
    timeout: null, // To manage the hide delay
    activeElements: { // To hold direct references to the active elements
        box: null,
        line: null
    }
};

/**
 * Initializes the Leaflet map and the hover system.
 */
function initializeMap() {
    state.map = L.map('map', {
        zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false,
        touchZoom: false, dragging: false, attributionControl: false,
        worldCopyJump: true
    });
    state.map.setView(config.map.initialCenter, config.map.initialZoom);
    
    // Create and append hover containers to the main map container
    const mapContainer = document.getElementById('map-container');

    const hoverBoxContainer = document.createElement('div');
    hoverBoxContainer.id = 'hover-box-container';
    mapContainer.appendChild(hoverBoxContainer);
    state.dom.hoverBoxContainer = hoverBoxContainer;
    
    const hoverLineSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    hoverLineSvg.id = 'hover-line-canvas';
    mapContainer.appendChild(hoverLineSvg);
    state.dom.hoverLineCanvas = hoverLineSvg;


    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then(res => res.json())
        .then(geoJsonData => {
            state.geoJsonLayer = L.geoJSON(geoJsonData).addTo(state.map);
            initialLoad();
        });

    const debounce = (func, delay) => {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    };
    
    // Re-render on resize to ensure positions are correct
    window.addEventListener('resize', debounce(() => {
        if (state.currentPeriod) {
            renderMapEvents(state.currentPeriod, true); // Force a full re-render
        }
        positionSliderLabels();
    }, 100));
}

/**
 * Determines the allegiance of a country for a given period.
 */
function getAllegiance(countryName, controlData) {
    if (!controlData) return 'neutral';
    if (controlData.allied.includes(countryName)) return 'allied';
    if (controlData.co_belligerent.includes(countryName)) return 'co_belligerent';
    if (controlData.axis.includes(countryName)) return 'axis';
    if (controlData.co_aggressor.includes(countryName)) return 'co_aggressor';
    if (controlData.occupied_by_axis.includes(countryName)) return 'occupied_by_axis';
    return 'neutral';
}

/**
 * Returns the style object for a country based on its allegiance.
 */
function getStyleForAllegiance(allegiance) {
    const baseStyle = { weight: 1, color: '#3d3d3d', fillOpacity: 1 };
    switch (allegiance) {
        case 'allied': return { ...baseStyle, fillColor: '#4a6d8a' };
        case 'co_belligerent': return { ...baseStyle, fillColor: '#6c8aa6' };
        case 'axis': return { ...baseStyle, fillColor: '#a44a4a' };
        case 'co_aggressor': return { ...baseStyle, fillColor: '#b22222' };
        case 'occupied_by_axis': return { ...baseStyle, fillColor: '#d16d6d' };
        default: return { ...baseStyle, fillColor: '#5a5a5a' };
    }
}

/**
 * REVISED: Updates the colors of the countries on the map with a fade-through-neutral animation.
 */
function updateMapColors(newPeriod, oldPeriod) {
    const oldControl = territorialData[oldPeriod];
    const newControl = territorialData[newPeriod];
    if (!state.geoJsonLayer || !newControl) return;

    state.geoJsonLayer.eachLayer(layer => {
        const countryName = layer.feature.properties.name;
        const newAllegiance = getAllegiance(countryName, newControl);

        if (oldControl) {
            const oldAllegiance = getAllegiance(countryName, oldControl);
            // Only animate if the allegiance has actually changed
            if (oldAllegiance !== newAllegiance) {
                // Step 1: Fade to neutral color first
                layer.setStyle(getStyleForAllegiance('neutral'));
                // Step 2: After a delay, fade to the new, correct color
                setTimeout(() => {
                    layer.setStyle(getStyleForAllegiance(newAllegiance));
                }, 400); // This delay allows the first transition to be visible
            } else {
                // If allegiance is the same, just ensure the correct color is set instantly
                layer.setStyle(getStyleForAllegiance(newAllegiance));
            }
        } else {
            // For the initial load, set the color directly without animation
            layer.setStyle(getStyleForAllegiance(newAllegiance));
        }
    });
}

/**
 * Calculates the optimal map bounds to fit all visible events for a period.
 */
function getBounds(events) {
    const visibleEvents = events.filter(e => e.onMap !== false && state.eventFilters[e.type]);
    if (visibleEvents.length === 0) return L.latLngBounds([[60, -20], [20, 80]]);
    const points = visibleEvents.map(e => L.latLng(e.lat, e.lng));
    if (points.length === 1) {
        return L.latLngBounds([[points[0].lat - 5, points[0].lng - 5], [points[0].lat + 5, points[0].lng + 5]]);
    }
    return L.latLngBounds(points);
}

/**
 * Generates a unique ID for an event to track its DOM elements.
 */
function getEventId(event) {
    const sanitizedTitle = event.title.replace(/[^a-zA-Z0-9]/g, '-');
    return `${event.year}-${sanitizedTitle}`;
}

/**
 * Renders events by animating only the affected dots.
 */
function renderMapEvents(period, forceClear = false) {
    const { dom } = state;
    
    if (forceClear) {
        dom.dotsContainer.innerHTML = '';
    }
    
    const events = allEventsData[period] || [];
    
    const visibleEventIds = new Set(
        events
            .filter(e => e.onMap !== false && state.eventFilters[e.type])
            .map(getEventId)
    );

    const renderedElements = Array.from(dom.dotsContainer.children);
    const renderedEventIds = new Set(renderedElements.map(el => el.dataset.eventId));

    // Hide elements that are rendered but shouldn't be
    renderedElements.forEach(el => {
        if (!visibleEventIds.has(el.dataset.eventId)) {
            el.classList.add('hiding');
            el.addEventListener('transitionend', () => el.remove(), { once: true });
        }
    });

    // Show elements that should be visible but aren't rendered
    const eventsToAdd = events.filter(event => {
        const id = getEventId(event);
        return visibleEventIds.has(id) && !renderedEventIds.has(id);
    });

    if (eventsToAdd.length > 0) {
        const allVisibleEvents = events.filter(e => visibleEventIds.has(getEventId(e)));
        let dotPoints = allVisibleEvents.map(event => {
            const point = state.map.latLngToContainerPoint(L.latLng(event.lat, event.lng));
            return {
                id: getEventId(event),
                x: point.x,
                y: point.y,
                event: event
            };
        });

        dotPoints = adjustForCollisions(dotPoints);

        dotPoints.forEach(dotData => {
            if (!renderedEventIds.has(dotData.id)) {
                const dot = createEventDot(dotData.event, dotData.id);
                dot.style.left = `${dotData.x}px`;
                dot.style.top = `${dotData.y}px`;
                dom.dotsContainer.appendChild(dot);
                requestAnimationFrame(() => dot.classList.add('visible'));
            }
        });
    }
}

/**
 * Adjusts dot positions to avoid overlap.
 */
function adjustForCollisions(points) {
    const adjustedPoints = [];
    const MIN_DISTANCE = 20;

    points.forEach(currentPoint => {
        let attempts = 0;
        let collision = true;

        while (collision && attempts < 100) {
            collision = false;
            for (const placedPoint of adjustedPoints) {
                const distance = Math.hypot(currentPoint.x - placedPoint.x, currentPoint.y - placedPoint.y);
                if (distance < MIN_DISTANCE) {
                    collision = true;
                    const angle = Math.atan2(currentPoint.y - placedPoint.y, currentPoint.x - placedPoint.x);
                    currentPoint.x += Math.cos(angle) * (MIN_DISTANCE - distance);
                    currentPoint.y += Math.sin(angle) * (MIN_DISTANCE - distance);
                    break;
                }
            }
            attempts++;
        }
        adjustedPoints.push(currentPoint);
    });

    return adjustedPoints;
}


/**
 * Creates a dot element with direct hover listeners.
 */
function createEventDot(event, id) {
    const dot = document.createElement('div');
    const className = event.type === 'major' ? 'event-dot' : (event.type === 'atrocity' ? 'atrocity-dot' : 'minor-event-dot');
    dot.className = `event-element ${className}`;
    dot.dataset.eventId = id;
    dot.title = event.title;
    dot.addEventListener('click', () => showModal(event));

    dot.addEventListener('mouseenter', () => showHoverBox(event, dot));
    dot.addEventListener('mouseleave', hideHoverBox);
    
    return dot;
}

/**
 * Creates and displays a hover box and its connecting line.
 */
function showHoverBox(event, dotElement) {
    clearTimeout(hoverState.timeout);

    if (hoverState.activeElements.box) {
        hideHoverBox(true);
    }

    const box = document.createElement('div');
    box.className = `event-hover-box ${event.type}`;
    box.innerHTML = `<img src="${event.imageUrl}" alt="${event.title}"><div class="title">${event.title}</div>`;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', 'hover-connector-line');

    box.addEventListener('mouseenter', () => clearTimeout(hoverState.timeout));
    box.addEventListener('mouseleave', hideHoverBox);
    
    hoverState.activeElements = { box, line };

    state.dom.hoverBoxContainer.appendChild(box);
    state.dom.hoverLineCanvas.appendChild(line);

    const mapRect = state.dom.mapEl.getBoundingClientRect();
    const dotRect = dotElement.getBoundingClientRect();
    const dotCenter = {
        x: dotRect.left - mapRect.left + (dotRect.width / 2),
        y: dotRect.top - mapRect.top + (dotRect.height / 2)
    };

    const boxPosition = findHoverBoxPosition(dotCenter, mapRect);

    line.setAttribute('x1', dotCenter.x);
    line.setAttribute('y1', dotCenter.y);
    line.setAttribute('x2', boxPosition.x);
    line.setAttribute('y2', boxPosition.y);
    
    box.style.left = `${boxPosition.x}px`;
    box.style.top = `${boxPosition.y}px`;
    
    requestAnimationFrame(() => {
        box.classList.add('visible');
        line.classList.add('visible');
    });
}

/**
 * Hides the current hover box and line with a swift fade-out animation.
 */
function hideHoverBox(immediate = false) {
    const { box, line } = hoverState.activeElements;

    const hideAction = () => {
        if (box) {
            box.classList.remove('visible');
            box.addEventListener('transitionend', () => box.remove(), { once: true });
        }
        if (line) {
            line.classList.remove('visible');
            line.addEventListener('transitionend', () => line.remove(), { once: true });
        }
        hoverState.activeElements = { box: null, line: null };
    };

    clearTimeout(hoverState.timeout);
    if (immediate) {
        hideAction();
    } else {
        hoverState.timeout = setTimeout(hideAction, 75);
    }
}

/**
 * Finds an optimal position for the hover box to avoid screen edges.
 */
function findHoverBoxPosition(dotData, mapRect) {
    const BOX_WIDTH = 160;
    const BOX_HEIGHT = 58;
    const OFFSET = 100;
    const screenCenter = { x: mapRect.width / 2, y: mapRect.height / 2 };

    const angle = Math.atan2(dotData.y - screenCenter.y, dotData.x - screenCenter.x);
    
    let x = dotData.x + OFFSET * Math.cos(angle);
    let y = dotData.y + OFFSET * Math.sin(angle);

    x = Math.max(x, BOX_WIDTH / 2 + 10);
    x = Math.min(x, mapRect.width - BOX_WIDTH / 2 - 10);
    y = Math.max(y, BOX_HEIGHT / 2 + 10);
    y = Math.min(y, mapRect.height - BOX_HEIGHT / 2 - 10);
    
    return { x, y };
}
