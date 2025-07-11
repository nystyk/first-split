// --- MAP CONTROLLER ---

// Global state for the hover system
let hoverState = {
    timeout: null,
    activeElements: { box: null, line: null },
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
    
    state.map.on('move', debounce(() => {
        if (state.currentPeriod) renderMapEvents(state.currentPeriod);
    }, 16));
    
    window.addEventListener('resize', debounce(() => {
        if (state.currentPeriod) renderMapEvents(state.currentPeriod);
        positionSliderLabels();
    }, 100));
}

function getAllegiance(countryName, controlData) {
    if (!controlData) return 'neutral';
    if (controlData.allied.includes(countryName)) return 'allied';
    if (controlData.axis.includes(countryName)) return 'axis';
    if (controlData.occupied_by_axis.includes(countryName)) return 'occupied_by_axis';
    return 'neutral';
}

function getStyleForAllegiance(allegiance) {
    const baseStyle = { weight: 1, color: '#3d3d3d', fillOpacity: 1 };
    switch (allegiance) {
        case 'allied': return { ...baseStyle, fillColor: '#4a6d8a' };
        case 'axis': return { ...baseStyle, fillColor: '#a44a4a' };
        case 'occupied_by_axis': return { ...baseStyle, fillColor: '#d16d6d' };
        default: return { ...baseStyle, fillColor: '#5a5a5a' };
    }
}

function updateMapColors(newPeriod) {
    const newControl = territorialData[newPeriod];
    if (!state.geoJsonLayer || !newControl) return;

    state.geoJsonLayer.eachLayer(layer => {
        const countryName = layer.feature.properties.name;
        const newAllegiance = getAllegiance(countryName, newControl);
        layer.setStyle(getStyleForAllegiance(newAllegiance));
    });
}

function getBounds(events) {
    const visibleEvents = events.filter(e => e.onMap !== false && state.eventFilters[e.type]);
    if (visibleEvents.length === 0) return L.latLngBounds([[60, -20], [20, 80]]);
    const points = visibleEvents.map(e => L.latLng(e.lat, e.lng));
    if (points.length === 1) {
        return L.latLngBounds([[points[0].lat - 5, points[0].lng - 5], [points[0].lat + 5, points[0].lng + 5]]);
    }
    return L.latLngBounds(points);
}

function getEventId(event) {
    return `${event.year}-${event.title.replace(/[^a-zA-Z0-9]/g, '-')}`;
}

function renderMapEvents(period) {
    const { dom, map } = state;
    if (!map) return;

    dom.dotsContainer.innerHTML = '';

    const events = allEventsData[period] || [];
    const visibleEvents = events.filter(e => e.onMap !== false && state.eventFilters[e.type] && isValidLatLng(e.lat, e.lng));

    const dotPoints = visibleEvents.map(event => {
        const point = map.latLngToContainerPoint(L.latLng(event.lat, event.lng));
        return {
            id: getEventId(event),
            x: Math.round(point.x),
            y: Math.round(point.y),
            event: event
        };
    });

    const TOLERANCE = 15;
    const clusters = [];
    const processedEventIds = new Set();

    dotPoints.forEach(point => {
        if (processedEventIds.has(point.id)) return;
        const nearbyPoints = dotPoints.filter(otherPoint => {
             if (processedEventIds.has(otherPoint.id)) return false;
             const dx = point.x - otherPoint.x;
             const dy = point.y - otherPoint.y;
             return Math.sqrt(dx * dx + dy * dy) <= TOLERANCE;
        });
        clusters.push({
            events: nearbyPoints.map(p => p.event),
            x: point.x,
            y: point.y,
        });
        nearbyPoints.forEach(p => processedEventIds.add(p.id));
    });

    const fragment = document.createDocumentFragment();
    clusters.forEach(cluster => {
        let element = (cluster.events.length > 1) ? createClusterDot(cluster) : createEventDot(cluster.events[0]);
        element.style.left = `${cluster.x}px`;
        element.style.top = `${cluster.y}px`;
        fragment.appendChild(element);
    });

    dom.dotsContainer.appendChild(fragment);

    requestAnimationFrame(() => {
        Array.from(dom.dotsContainer.children).forEach(el => el.classList.add('visible'));
    });
}

function createEventDot(event) {
    const dot = document.createElement('div');
    const id = getEventId(event);
    let svgHtml = '';
    let className = '';
    if (event.type === 'major') {
        className = 'event-dot';
        svgHtml = `<svg class="marker-svg" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10" fill="#4a6d8a" stroke="#000" stroke-width="2"/><polygon points="11,5 12.9,9.1 17.4,9.3 13.8,12.2 15,16.5 11,13.9 7,16.5 8.2,12.2 4.6,9.3 9.1,9.1" fill="#fff"/></svg>`;
    } else if (event.type === 'atrocity') {
        className = 'atrocity-dot';
        svgHtml = `<svg class="marker-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="16" height="16" rx="3" fill="#e74c3c" stroke="#fff" stroke-width="2"/><text x="10" y="15" text-anchor="middle" font-size="13" fill="#fff" font-family="Arial" font-weight="bold">!</text></svg>`;
    } else {
        className = 'minor-event-dot';
        svgHtml = `<svg class="marker-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" fill="#f1c40f" stroke="#333" stroke-width="2"/><circle cx="9" cy="9" r="3" fill="#fff"/></svg>`;
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

function createClusterDot(clusterData) {
    const markerEl = document.createElement('div');
    markerEl.className = 'event-element cluster-dot';
    markerEl.innerHTML = `<span class="cluster-badge">${clusterData.events.length}</span>`;
    markerEl.title = `${clusterData.events.length} evenimente aici`;
    
    let popupPinned = false;
    markerEl.addEventListener('mouseenter', e => {
        e.stopPropagation();
        if (!popupPinned) showClusterPopup(clusterData.events, clusterData.x, clusterData.y);
    });
    markerEl.addEventListener('mouseleave', () => {
        if (!popupPinned) {
            const popup = document.getElementById('cluster-popup');
            if (popup) popup.remove();
        }
    });
    markerEl.addEventListener('click', e => {
        e.stopPropagation();
        popupPinned = true;
        showClusterPopup(clusterData.events, clusterData.x, clusterData.y);
        const clickOutsideHandler = (ev) => {
            const popup = document.getElementById('cluster-popup');
            if (popup && !popup.contains(ev.target) && !markerEl.contains(ev.target)) {
                popupPinned = false;
                popup.remove();
                document.removeEventListener('click', clickOutsideHandler);
            }
        };
        setTimeout(() => document.addEventListener('click', clickOutsideHandler), 0);
    });
    return markerEl;
}

/**
 * FIX: Creates and displays a hover box with correct styling.
 */
function showHoverBox(event, dotElement) {
    clearTimeout(hoverState.timeout);
    if (hoverState.activeElements.box) {
        hideHoverBox(true);
    }
    // FIX: Add event type class for styling
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

function renderThematicOverlays() {
    for (const key in thematicData) {
        const isRelevant = thematicData[key].relevantYears.includes(state.currentPeriod);
        const shouldBeVisible = state.overlayFilters[key] && isRelevant;
        const layerExists = state.thematicLayers[key];
        if (shouldBeVisible && !layerExists) {
            const overlay = thematicData[key];
            if (overlay.type === 'polyline') {
                const polyline = L.polyline(overlay.coords, overlay.style).addTo(state.map);
                state.thematicLayers[key] = polyline;
                setTimeout(() => {
                    const pane = state.map.getPane('overlayPane');
                    if (pane) {
                        pane.querySelectorAll('svg, canvas').forEach(el => el.style.pointerEvents = 'none');
                    }
                }, 0);
            }
        } else if (!shouldBeVisible && layerExists) {
            state.thematicLayers[key].remove();
            delete state.thematicLayers[key];
        }
    }
}

function isValidLatLng(lat, lng) {
    return typeof lat === 'number' && !isNaN(lat) && lat >= -85 && lat <= 85 &&
           typeof lng === 'number' && !isNaN(lng) && lng >= -180 && lng <= 180;
}

function showClusterPopup(events, x, y) {
    const oldPopup = document.getElementById('cluster-popup');
    if (oldPopup) oldPopup.remove();
    
    const popup = document.createElement('div');
    popup.id = 'cluster-popup';
    popup.className = 'cluster-popup';
    popup.innerHTML = `<div class="cluster-popup-title">Evenimente aici:</div>` +
        events.map(ev => `<div class="cluster-popup-item" data-event-id="${getEventId(ev)}" tabindex="0" role="button">${ev.title}</div>`).join('');
    
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    
    popup.addEventListener('click', (e) => {
        const item = e.target.closest('.cluster-popup-item');
        if (item) {
            e.stopPropagation();
            const eventId = item.getAttribute('data-event-id');
            const event = events.find(ev => getEventId(ev) === eventId);
            if (event) {
                popup.remove();
                showModal(event);
            }
        }
    });
    popup.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('cluster-popup-item')) {
            const eventId = e.target.getAttribute('data-event-id');
            const event = events.find(ev => getEventId(ev) === eventId);
            if (event) {
                popup.remove();
                showModal(event);
            }
        }
    });

    state.dom.dotsContainer.appendChild(popup);
    
    requestAnimationFrame(() => {
        popup.classList.add('visible');
    });
}
