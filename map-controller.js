// --- MAP CONTROLLER ---

// Global state for the new proximity-based hover system
let hoverState = {
    activeEventId: null,
    timeout: null,
    hoverableDots: [], // Cache for dot positions and data
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
    
    // Create and append hover containers to the main map container, not a Leaflet pane.
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
            initializeHoverSystem(); // Initialize the new hover logic
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
 * Sets up the proximity-based hover system.
 */
function initializeHoverSystem() {
    // Update the cache of dot positions when the map moves or zooms
    state.map.on('moveend zoomend', updateHoverableDotsCache);

    // Listen for mouse movement on the entire map container
    state.dom.mapEl.addEventListener('mousemove', (e) => {
        const mapBounds = state.dom.mapEl.getBoundingClientRect();
        const cursor = { x: e.clientX - mapBounds.left, y: e.clientY - mapBounds.top };
        let foundDot = null;

        // Check cursor proximity to each cached dot
        for (const dot of hoverState.hoverableDots) {
            const distance = Math.hypot(cursor.x - dot.x, cursor.y - dot.y);
            if (distance < 25) { // 25px activation radius
                foundDot = dot;
                break;
            }
        }

        if (foundDot) {
            // If near a dot, show its box (or keep it shown)
            if (hoverState.activeEventId !== foundDot.id) {
                showHoverBox(foundDot.event, foundDot);
            }
            clearTimeout(hoverState.timeout); // Cancel any pending hide actions
        } else {
            // If not near any dot, start the process to hide the box
            hideHoverBox();
        }
    });
}

/**
 * Updates the cache of screen positions for all interactive dots.
 */
function updateHoverableDotsCache() {
    hoverState.hoverableDots = [];
    const dots = document.querySelectorAll('.event-dot, .minor-event-dot, .atrocity-dot');
    dots.forEach(dot => {
        const eventId = dot.dataset.eventId;
        const event = findEventById(eventId);
        if (event && !dot.classList.contains('hiding')) { // Only cache visible dots
            const rect = dot.getBoundingClientRect();
            const mapRect = state.dom.mapEl.getBoundingClientRect();
            const x = rect.left - mapRect.left + (rect.width / 2);
            const y = rect.top - mapRect.top + (rect.height / 2);

            hoverState.hoverableDots.push({
                id: eventId,
                x: x,
                y: y,
                event: event
            });
        }
    });
}

/**
 * Helper to find an event object by its generated ID.
 */
function findEventById(id) {
    for (const period in allEventsData) {
        const event = allEventsData[period].find(e => getEventId(e) === id);
        if (event) return event;
    }
    return null;
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
 * Updates the colors of the countries on the map with a transition effect.
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
            if (oldAllegiance !== newAllegiance) {
                layer.setStyle(getStyleForAllegiance('neutral'));
                setTimeout(() => {
                    layer.setStyle(getStyleForAllegiance(newAllegiance));
                }, 450);
            } else {
                layer.setStyle(getStyleForAllegiance(oldAllegiance));
            }
        } else {
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
 * REWRITTEN: Renders events by animating only the affected dots.
 */
function renderMapEvents(period, forceClear = false) {
    const { dom } = state;
    
    // If forcing a clear (e.g., on resize or period change), wipe and redraw everything.
    if (forceClear) {
        dom.dotsContainer.innerHTML = '';
    }
    
    const events = allEventsData[period] || [];
    
    // Get the set of IDs that SHOULD be visible based on current filters
    const visibleEventIds = new Set(
        events
            .filter(e => e.onMap !== false && state.eventFilters[e.type])
            .map(getEventId)
    );

    // Get the set of IDs that ARE CURRENTLY rendered in the DOM
    const renderedElements = Array.from(dom.dotsContainer.children);
    const renderedEventIds = new Set(renderedElements.map(el => el.dataset.eventId));

    // --- HIDE elements that are rendered but shouldn't be ---
    renderedElements.forEach(el => {
        if (!visibleEventIds.has(el.dataset.eventId)) {
            el.classList.add('hiding');
            el.addEventListener('transitionend', () => el.remove(), { once: true });
        }
    });

    // --- SHOW elements that should be visible but aren't rendered ---
    const eventsToAdd = events.filter(event => {
        const id = getEventId(event);
        return visibleEventIds.has(id) && !renderedEventIds.has(id);
    });

    if (eventsToAdd.length > 0) {
        // Get positions of all dots that will be on screen (existing + new) for collision detection
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

        // Adjust for collisions
        dotPoints = adjustForCollisions(dotPoints);

        // Render only the NEW dots in their adjusted positions
        dotPoints.forEach(dotData => {
            if (!renderedEventIds.has(dotData.id)) { // Check if it's a new dot
                const dot = createEventDot(dotData.event, dotData.id);
                dot.style.left = `${dotData.x}px`;
                dot.style.top = `${dotData.y}px`;
                dom.dotsContainer.appendChild(dot);
                requestAnimationFrame(() => dot.classList.add('visible'));
            }
        });
    }

    // Update the hover cache after animations have had time to start
    setTimeout(updateHoverableDotsCache, 400);
}

/**
 * Adjusts dot positions to avoid overlap.
 */
function adjustForCollisions(points) {
    const adjustedPoints = [];
    const MIN_DISTANCE = 20; // Minimum distance between dot centers

    points.forEach(currentPoint => {
        let attempts = 0;
        let collision = true;

        while (collision && attempts < 100) {
            collision = false;
            for (const placedPoint of adjustedPoints) {
                const distance = Math.hypot(currentPoint.x - placedPoint.x, currentPoint.y - placedPoint.y);
                if (distance < MIN_DISTANCE) {
                    collision = true;
                    // Nudge the dot away from the one it's colliding with
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
 * Creates a dot element for an event.
 */
function createEventDot(event, id) {
    const dot = document.createElement('div');
    const className = event.type === 'major' ? 'event-dot' : (event.type === 'atrocity' ? 'atrocity-dot' : 'minor-event-dot');
    dot.className = `event-element ${className}`;
    dot.dataset.eventId = id;
    dot.title = event.title;
    dot.addEventListener('click', () => showModal(event));
    return dot;
}

/**
 * Creates and displays a hover box and its connecting line with a simple fade animation.
 */
function showHoverBox(event, dotData) {
    clearTimeout(hoverState.timeout);
    
    if (hoverState.activeEventId === dotData.id) return;

    hideHoverBox(true); 

    hoverState.activeEventId = dotData.id;

    const box = document.createElement('div');
    box.className = `event-hover-box ${event.type}`;
    box.innerHTML = `<img src="${event.imageUrl}" alt="${event.title}"><div class="title">${event.title}</div>`;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('class', 'hover-connector-line');

    // Store direct references to the active elements
    hoverState.activeElements = { box, line };

    box.addEventListener('mouseenter', () => clearTimeout(hoverState.timeout));
    box.addEventListener('mouseleave', hideHoverBox);

    state.dom.hoverBoxContainer.appendChild(box);
    state.dom.hoverLineCanvas.appendChild(line);

    const mapRect = state.dom.mapEl.getBoundingClientRect();
    const boxPosition = findHoverBoxPosition(dotData, mapRect);

    // Set line start and end points
    line.setAttribute('x1', dotData.x);
    line.setAttribute('y1', dotData.y);
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
 * Hides the current hover box and line with a delay.
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
        hoverState.activeEventId = null;
        hoverState.activeElements = { box: null, line: null };
    };

    clearTimeout(hoverState.timeout);
    if (immediate) {
        hideAction();
    } else {
        // Use a shorter timeout for a faster disappearance
        hoverState.timeout = setTimeout(hideAction, 75);
    }
}

/**
 * Finds an optimal position for the hover box to avoid screen edges.
 */
function findHoverBoxPosition(dotData, mapRect) {
    const BOX_WIDTH = 160;
    const BOX_HEIGHT = 58;
    const OFFSET = 100; // Increased distance
    const screenCenter = { x: mapRect.width / 2, y: mapRect.height / 2 };

    const angle = Math.atan2(dotData.y - screenCenter.y, dotData.x - screenCenter.x);
    
    let x = dotData.x + OFFSET * Math.cos(angle);
    let y = dotData.y + OFFSET * Math.sin(angle);

    // Clamp position to stay within viewport
    x = Math.max(x, BOX_WIDTH / 2 + 10);
    x = Math.min(x, mapRect.width - BOX_WIDTH / 2 - 10);
    y = Math.max(y, BOX_HEIGHT / 2 + 10);
    y = Math.min(y, mapRect.height - BOX_HEIGHT / 2 - 10);
    
    return { x, y };
}
