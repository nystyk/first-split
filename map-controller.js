// --- MAP CONTROLLER ---

/**
 * Initializes the Leaflet map and fetches the GeoJSON data for country borders.
 */
function initializeMap() {
    state.map = L.map('map', {
        zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false,
        touchZoom: false, dragging: false, attributionControl: false,
        worldCopyJump: true
    });
    state.map.setView(config.map.initialCenter, config.map.initialZoom);
    
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
    
    const rerenderOnResize = () => {
        if (state.currentPeriod) {
            renderMapEvents(state.currentPeriod);
        }
    };

    window.addEventListener('resize', debounce(() => {
        rerenderOnResize();
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
 * @param {Array<object>} events - An array of event objects for the period.
 * @returns {L.LatLngBounds} A Leaflet LatLngBounds object.
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
 * REVISED: Renders event dots and labels based on current filters.
 */
function renderMapEvents(period) {
    const { dom } = state;
    dom.dotsContainer.innerHTML = '';
    dom.labelsContainer.innerHTML = '';
    dom.lineCanvas.innerHTML = '';

    const events = allEventsData[period] || [];
    if (events.length === 0) return;

    // Apply the visibility filters from the state
    const visibleEvents = events.filter(e => e.onMap !== false && state.eventFilters[e.type]);
    
    const majorEvents = visibleEvents.filter(e => e.type === 'major');
    const otherEvents = visibleEvents.filter(e => e.type !== 'major');

    const placedItems = [];
    const mapBounds = dom.mapEl.getBoundingClientRect();

    otherEvents.forEach(event => {
        const dotPoint = state.map.latLngToContainerPoint(L.latLng(event.lat, event.lng));
        const dot = createEventDot(event);
        dot.style.left = `${dotPoint.x}px`;
        dot.style.top = `${dotPoint.y}px`;
        dom.dotsContainer.appendChild(dot);
        requestAnimationFrame(() => dot.classList.add('visible'));
        placedItems.push({
            x: dotPoint.x - 6, y: dotPoint.y - 6,
            width: 12, height: 12
        });
    });
    
    const screenCenter = { x: mapBounds.width / 2, y: mapBounds.height / 2 };
    const sortedMajorEvents = majorEvents
        .map(event => {
            const point = state.map.latLngToContainerPoint(L.latLng(event.lat, event.lng));
            const distanceToCenter = Math.hypot(point.x - screenCenter.x, point.y - screenCenter.y);
            return { event, point, distanceToCenter };
        })
        .sort((a, b) => a.distanceToCenter - b.distanceToCenter);

    sortedMajorEvents.forEach(({ event, point: dotPoint }) => {
        const dot = createEventDot(event);
        dot.style.left = `${dotPoint.x}px`;
        dot.style.top = `${dotPoint.y}px`;
        dom.dotsContainer.appendChild(dot);
        requestAnimationFrame(() => dot.classList.add('visible'));

        const dotRect = { x: dotPoint.x - 6, y: dotPoint.y - 6, width: 12, height: 12 };
        placedItems.push(dotRect);

        const bestPosition = findOptimalLabelPosition(dotPoint, placedItems, mapBounds);
        
        placedItems.push(bestPosition.rect);
        
        const label = createEventLabel(event);
        label.style.left = `${bestPosition.x}px`;
        label.style.top = `${bestPosition.y}px`;
        dom.labelsContainer.appendChild(label);

        const connectorLine = createSVGLine(dotPoint, {x: bestPosition.x, y: bestPosition.y}, 'connector-line');
        dom.lineCanvas.appendChild(connectorLine);

        requestAnimationFrame(() => {
            label.classList.add('visible');
            connectorLine.classList.add('visible');
        });
    });
}

/**
 * Finds the best non-overlapping position for a label using a scoring system.
 */
function findOptimalLabelPosition(anchorPoint, obstacles, mapBounds) {
    const LABEL_WIDTH = 160;
    const LABEL_HEIGHT = 50;
    const PADDING = 5;
    const VIEWPORT_MARGIN = 10;

    let bestCandidate = null;
    let bestScore = Infinity;

    for (let radius = 70; radius < 500; radius += 15) {
        for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
            const x = anchorPoint.x + radius * Math.cos(angle);
            const y = anchorPoint.y + radius * Math.sin(angle);

            const rect = {
                x: x - LABEL_WIDTH / 2,
                y: y - LABEL_HEIGHT / 2,
                width: LABEL_WIDTH,
                height: LABEL_HEIGHT
            };

            let score = 0;

            if (rect.x < VIEWPORT_MARGIN || rect.x + rect.width > mapBounds.width - VIEWPORT_MARGIN ||
                rect.y < VIEWPORT_MARGIN || rect.y + rect.height > mapBounds.height - VIEWPORT_MARGIN) {
                score += 10000;
            }

            for (const obstacle of obstacles) {
                if (checkCollision(rect, obstacle, PADDING)) {
                    score += 5000;
                }
            }
            
            score += radius;

            if (score < bestScore) {
                bestScore = score;
                bestCandidate = { x, y, rect };
            }

            if (bestScore < 200) {
                 return bestCandidate;
            }
        }
    }
    
     if (!bestCandidate) {
        return {
            x: anchorPoint.x,
            y: anchorPoint.y - 100,
            rect: { x: anchorPoint.x - LABEL_WIDTH/2, y: anchorPoint.y - 100 - LABEL_HEIGHT/2, width: LABEL_WIDTH, height: LABEL_HEIGHT }
        };
    }

    return bestCandidate;
}


/**
 * Checks if two rectangles overlap, including padding.
 */
function checkCollision(rect1, rect2, padding) {
    return (
        rect1.x < rect2.x + rect2.width + padding &&
        rect1.x + rect1.width + padding > rect2.x &&
        rect1.y < rect2.y + rect2.height + padding &&
        rect1.y + rect1.height + padding > rect2.y
    );
}

/**
 * Helper to create a generic event dot element.
 */
function createEventDot(event) {
    const dot = document.createElement('div');
    dot.className = event.type === 'major' ? 'event-dot' : (event.type === 'atrocity' ? 'atrocity-dot' : 'minor-event-dot');
    dot.title = event.title;
    dot.addEventListener('click', () => showModal(event));
    return dot;
}

/**
 * Helper to create an event label element.
 */
function createEventLabel(event) {
    const label = document.createElement('div');
    label.className = 'event-label';
    label.innerHTML = `<img src="${event.imageUrl}" alt="${event.title}"><div class="title">${event.title}</div>`;
    label.addEventListener('click', () => showModal(event));
    return label;
}

/**
 * Helper to create an SVG line element.
 */
function createSVGLine(p1, p2, className) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', p1.x);
    line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x);
    line.setAttribute('y2', p2.y);
    line.setAttribute('class', className);
    return line;
}
