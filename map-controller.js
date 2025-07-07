// --- MAP CONTROLLER ---

// Global state for the hover system
let hoverState = {
    timeout: null, // To manage the hide delay
    activeElements: { // To hold direct references to the active elements
        box: null,
        line: null
    },
    pinned: false
};

/**
 * Initializes the Leaflet map and the hover system.
 */
function initializeMap() {
    state.map = L.map('map', {
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        touchZoom: false,
        dragging: false,
        attributionControl: false,
        keyboard: false,
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
    

    
    // Update dot positions when map moves
    state.map.on('move', debounce(() => {
        if (state.currentPeriod) {
            renderMapEvents(state.currentPeriod, true); // Force a full re-render
        }
    }, 16)); // ~60fps
    
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
 * Updates the colors of the countries on the map with a fade-through-neutral animation.
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
                }, 400);
            } else {
                layer.setStyle(getStyleForAllegiance(newAllegiance));
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

// Create a custom pane for event dots (above tile layer, below popups/modals)
function ensureEventPane() {
    if (!state.map.getPane('eventDotsPane')) {
        state.map.createPane('eventDotsPane');
        state.map.getPane('eventDotsPane').style.zIndex = 650; // Above tile layer, below popups
    }
}

function clearEventMarkers() {
    if (state.eventMarkers) {
        state.eventMarkers.forEach(marker => marker.remove());
    }
    state.eventMarkers = [];
}

function renderMapEvents(period, forceClear = false) {
    const { dom } = state;
    if (forceClear) {
        dom.dotsContainer.innerHTML = '';
    }
    if (state.eventMarkers) {
        state.eventMarkers.forEach(marker => marker.remove && marker.remove());
        state.eventMarkers = [];
    }
    const events = allEventsData[period] || [];
    const visibleEventIds = new Set(
        events
            .filter(e => e.onMap !== false && state.eventFilters[e.type])
            .map(getEventId)
    );
    const renderedElements = Array.from(dom.dotsContainer.children);
    const renderedEventIds = new Set(renderedElements.map(el => el.dataset.eventId));
    renderedElements.forEach(el => {
        if (!visibleEventIds.has(el.dataset.eventId)) {
            el.classList.add('hiding');
            el.addEventListener('transitionend', () => el.remove(), { once: true });
        }
    });
    const eventsToAdd = events.filter(event => {
        const id = getEventId(event);
        return visibleEventIds.has(id) && !renderedEventIds.has(id);
    });
    if (eventsToAdd.length > 0) {
        const allVisibleEvents = events.filter(e =>
            visibleEventIds.has(getEventId(e)) &&
            isValidLatLng(e.lat, e.lng)
        );
        // 1. Map events to screen positions
        let dotPoints = allVisibleEvents.map(event => {
            const point = state.map.latLngToContainerPoint(L.latLng(event.lat, event.lng));
            return {
                id: getEventId(event),
                x: Math.round(point.x),
                y: Math.round(point.y),
                event: event
            };
        });
        // 2. Group by screen position (within a small pixel tolerance)
        const TOLERANCE = 8; // px
        const clusters = [];
        dotPoints.forEach(dot => {
            let found = false;
            for (const cluster of clusters) {
                const dx = dot.x - cluster.x;
                const dy = dot.y - cluster.y;
                if (Math.sqrt(dx*dx + dy*dy) <= TOLERANCE) {
                    cluster.events.push(dot.event);
                    found = true;
                    break;
                }
            }
            if (!found) {
                clusters.push({ x: dot.x, y: dot.y, events: [dot.event] });
            }
        });
        // 3. Render markers
        clusters.forEach(cluster => {
            let markerEl;
            if (cluster.events.length === 1) {
                // Single event: render as usual
                const event = cluster.events[0];
                markerEl = createEventDot(event, getEventId(event));
                markerEl.style.left = `${cluster.x}px`;
                markerEl.style.top = `${cluster.y}px`;
            } else {
                // Multiple events: render cluster marker (old behavior)
                markerEl = document.createElement('div');
                markerEl.className = 'event-element cluster-dot';
                markerEl.style.left = `${cluster.x}px`;
                markerEl.style.top = `${cluster.y}px`;
                markerEl.innerHTML = `<span class="cluster-badge">${cluster.events.length}</span>`;
                markerEl.title = `${cluster.events.length} evenimente aici`;
                let popupPinned = false;
                markerEl.addEventListener('mouseenter', (e) => {
                    e.stopPropagation();
                    if (!popupPinned) showClusterPopup(cluster.events, cluster.x, cluster.y);
                });
                markerEl.addEventListener('mouseleave', (e) => {
                    if (!popupPinned) {
                        const popup = document.getElementById('cluster-popup');
                        if (popup) popup.remove();
                    }
                    popupPinned = false;
                });
                markerEl.addEventListener('click', (e) => {
                    e.stopPropagation();
                    popupPinned = true;
                    showClusterPopup(cluster.events, cluster.x, cluster.y);
                    // Add a one-time document click handler to unpin and close
                    setTimeout(() => {
                        document.addEventListener('click', function handler(ev) {
                            const popup = document.getElementById('cluster-popup');
                            if (popup && !popup.contains(ev.target)) {
                                popupPinned = false;
                                popup.remove();
                                document.removeEventListener('click', handler);
                            }
                        });
                    }, 0);
                });
            }
            dom.dotsContainer.appendChild(markerEl);
            requestAnimationFrame(() => markerEl.classList.add('visible'));
        });
    }
}

/**
 * Updates the positions of all visible dots when the map moves.
 */
function updateDotPositions() {
    const { dom } = state;
    const events = allEventsData[state.currentPeriod] || [];
    const visibleEvents = events.filter(e => e.onMap !== false && state.eventFilters[e.type]);
    // 1. Map events to screen positions
    let dotPoints = visibleEvents.map(event => {
        const point = state.map.latLngToContainerPoint(L.latLng(event.lat, event.lng));
        return {
            id: getEventId(event),
            x: Math.round(point.x),
            y: Math.round(point.y),
            event: event
        };
    });
    // 2. Group by screen position (within a small pixel tolerance)
    const TOLERANCE = 8; // px
    const clusters = [];
    dotPoints.forEach(dot => {
        let found = false;
        for (const cluster of clusters) {
            const dx = dot.x - cluster.x;
            const dy = dot.y - cluster.y;
            if (Math.sqrt(dx*dx + dy*dy) <= TOLERANCE) {
                cluster.events.push(dot.event);
                found = true;
                break;
            }
        }
        if (!found) {
            clusters.push({ x: dot.x, y: dot.y, events: [dot.event] });
        }
    });
    // 3. Update positions of all visible dots and clusters
    const allMarkers = Array.from(dom.dotsContainer.children).filter(el => el.classList.contains('event-element'));
    allMarkers.forEach(marker => {
        // For single event dots
        const eventId = marker.dataset.eventId;
        if (eventId) {
            // Find the cluster this event belongs to
            const cluster = clusters.find(c => c.events.some(ev => getEventId(ev) === eventId));
            if (cluster && cluster.events.length === 1) {
                marker.style.left = `${cluster.x}px`;
                marker.style.top = `${cluster.y}px`;
            }
        } else if (marker.classList.contains('cluster-dot')) {
            // For cluster markers
            // Find the matching cluster by number of events and position
            const cluster = clusters.find(c => c.events.length > 1 &&
                Math.abs(parseInt(marker.style.left) - c.x) < TOLERANCE &&
                Math.abs(parseInt(marker.style.top) - c.y) < TOLERANCE &&
                parseInt(marker.querySelector('.cluster-badge')?.textContent) === c.events.length
            );
            if (cluster) {
                marker.style.left = `${cluster.x}px`;
                marker.style.top = `${cluster.y}px`;
            }
        }
    });
    // Also move the cluster popup if open
    const popup = document.getElementById('cluster-popup');
    if (popup && popup.dataset.clusterX && popup.dataset.clusterY) {
        popup.style.left = `${popup.dataset.clusterX}px`;
        popup.style.top = `${popup.dataset.clusterY}px`;
    }
}

/**
 * Creates a dot element with direct hover listeners.
 */
function createEventDot(event, id) {
    const dot = document.createElement('div');
    let svgHtml = '';
    let className = '';
    if (event.type === 'major') {
        className = 'event-dot';
        svgHtml = `
            <svg class="marker-svg major-svg" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10" fill="#4a6d8a" stroke="#000" stroke-width="2"/>
                <polygon points="11,5 12.9,9.1 17.4,9.3 13.8,12.2 15,16.5 11,13.9 7,16.5 8.2,12.2 4.6,9.3 9.1,9.1" fill="#fff"/>
            </svg>
        `;
    } else if (event.type === 'atrocity') {
        className = 'atrocity-dot';
        svgHtml = `
            <svg class="marker-svg atrocity-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="16" height="16" rx="3" fill="#e74c3c" stroke="#fff" stroke-width="2"/>
                <text x="10" y="15" text-anchor="middle" font-size="13" fill="#fff" font-family="Arial" font-weight="bold">!</text>
            </svg>
        `;
    } else {
        className = 'minor-event-dot';
        svgHtml = `
            <svg class="marker-svg minor-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="8" fill="#f1c40f" stroke="#333" stroke-width="2"/>
                <circle cx="9" cy="9" r="3" fill="#fff"/>
            </svg>
        `;
    }
    dot.className = `event-element ${className}`;
    dot.dataset.eventId = id;
    dot.title = event.title;
    dot.innerHTML = `<div class="marker-svg-wrapper">${svgHtml}</div>`;
    dot.addEventListener('click', () => showModal(event));
    dot.addEventListener('mouseenter', () => showHoverBox(event, dot));
    dot.addEventListener('mouseleave', hideHoverBox);
    return dot;
}

/**
 * Creates and displays a hover box and its connecting line.
 */
function showHoverBox(event, dotElement, options = {}) {
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
    if (hoverState.pinned) return;
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

/**
 * REVISED: Renders thematic overlays based on the current filter state and year.
 */
function renderThematicOverlays() {
    for (const key in thematicData) {
        // Check if the overlay is toggled ON AND is relevant for the current year
        const isRelevant = thematicData[key].relevantYears.includes(state.currentPeriod);
        const shouldBeVisible = state.overlayFilters[key] && isRelevant;
        const layerExists = state.thematicLayers[key];

        if (shouldBeVisible && !layerExists) {
            // Add the layer to the map
            const overlay = thematicData[key];
            if (overlay.type === 'polyline') {
                const polyline = L.polyline(overlay.coords, overlay.style);
                polyline.addTo(state.map);
                state.thematicLayers[key] = polyline;
            }
        } else if (!shouldBeVisible && layerExists) {
            // Remove the layer from the map
            state.thematicLayers[key].remove();
            delete state.thematicLayers[key];
        }
    }
}

// Helper to update all dots' hoverability
function updateDotsHoverability() {
    const dots = document.querySelectorAll('.event-element');
    dots.forEach(dot => {
        dot.classList.remove('story-mode-active-dot-disable');
        // Re-add listeners if needed
        const eventId = dot.dataset.eventId;
        const event = (window.allEventsData && window.allEventsData[state.currentPeriod])
            ? window.allEventsData[state.currentPeriod].find(e => getEventId(e) === eventId)
            : null;
        if (event) {
            dot.onmouseenter = () => showHoverBox(event, dot);
            dot.onmouseleave = hideHoverBox;
        }
    });
}

// Export functions globally
window.getEventId = getEventId;
window.showHoverBox = showHoverBox;
window.renderMapEvents = renderMapEvents;
window.updateDotsHoverability = updateDotsHoverability;

function isValidLatLng(lat, lng) {
    return (
        typeof lat === 'number' && typeof lng === 'number' &&
        !isNaN(lat) && !isNaN(lng) &&
        lat >= -85 && lat <= 85 &&
        lng >= -180 && lng <= 180
    );
}

// Remove the debug test marker if present
if (window._debugTestMarker) {
    window._debugTestMarker.remove();
    window._debugTestMarker = null;
}

function showClusterPopup(events, x, y) {
    // Remove any existing cluster popup
    const oldPopup = document.getElementById('cluster-popup');
    if (oldPopup) oldPopup.remove();
    // Create popup
    const popup = document.createElement('div');
    popup.id = 'cluster-popup';
    popup.className = 'cluster-popup';
    popup.style.left = `${x + 20}px`;
    popup.style.top = `${y - 10}px`;
    popup.dataset.clusterX = x + 20;
    popup.dataset.clusterY = y - 10;
    popup.innerHTML = `<div class="cluster-popup-title">Evenimente aici:</div>` +
        events.map(ev => `<div class="cluster-popup-item" data-event-id="${getEventId(ev)}" tabindex="0" role="button">${ev.title}</div>`).join('');
    // Click/keyboard handler for items
    popup.addEventListener('click', (e) => {
        const item = e.target.closest('.cluster-popup-item');
        if (item) {
            e.stopPropagation();
            const eventId = item.getAttribute('data-event-id');
            const event = events.find(ev => getEventId(ev) === eventId);
            if (event) {
                popup.remove(); // Remove popup first
                showModal(event);
            }
        }
    });
    popup.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('cluster-popup-item')) {
            const eventId = e.target.getAttribute('data-event-id');
            const event = events.find(ev => getEventId(ev) === eventId);
            if (event) {
                popup.remove(); // Remove popup first
                showModal(event);
            }
        }
    });
    // Remove popup on outside click
    setTimeout(() => {
        document.addEventListener('click', function handler(ev) {
            const popupEl = document.getElementById('cluster-popup');
            if (popupEl && !popupEl.contains(ev.target)) {
                popupEl.remove();
                document.removeEventListener('click', handler);
            }
        });
    }, 0);
    state.dom.dotsContainer.appendChild(popup);
}
