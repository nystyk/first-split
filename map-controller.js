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
            // This was the problem area. We now add the GeoJSON layer without a default style,
            // allowing the updateMapColors function to correctly style it from the start.
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
 * @param {string} countryName - The name of the country.
 * @param {object} controlData - The territorial control data for the period.
 * @returns {string} The allegiance status (e.g., 'allied', 'axis').
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
 * @param {string} allegiance - The allegiance status.
 * @returns {object} A Leaflet path style object.
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
 * @param {string} newPeriod - The period to transition to.
 * @param {string} oldPeriod - The period to transition from.
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
    const visibleEvents = events.filter(e => e.onMap !== false);
    if (visibleEvents.length === 0) return L.latLngBounds([[60, -20], [20, 80]]);
    const points = visibleEvents.map(e => L.latLng(e.lat, e.lng));
    if (points.length === 1) {
        return L.latLngBounds([[points[0].lat - 5, points[0].lng - 5], [points[0].lat + 5, points[0].lng + 5]]);
    }
    return L.latLngBounds(points);
}

/**
 * Renders event dots, labels, and connector lines using a simple, robust placement logic.
 * @param {string} period - The current period to render events for.
 */
function renderMapEvents(period) {
    const { dom } = state;
    dom.dotsContainer.innerHTML = '';
    dom.labelsContainer.innerHTML = '';
    dom.lineCanvas.innerHTML = '';

    const events = allEventsData[period];
    if (!events) return;

    const typeOrder = { major: 1, minor: 2, atrocity: 3 };
    const sortedEvents = (events || []).filter(e => e.onMap !== false).sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

    sortedEvents.forEach(event => {
        const dotPoint = state.map.latLngToContainerPoint(L.latLng(event.lat, event.lng));

        const dot = document.createElement('div');
        dot.className = event.type === 'major' ? 'event-dot' : (event.type === 'atrocity' ? 'atrocity-dot' : 'minor-event-dot');
        dot.style.left = `${dotPoint.x}px`;
        dot.style.top = `${dotPoint.y}px`;
        dot.title = event.title;
        dot.addEventListener('click', () => showModal(event));
        dom.dotsContainer.appendChild(dot);

        if (event.type === 'major') {
            // Use the manual offset if it exists, otherwise place it simply above the dot.
            const labelPos = event.labelOffset 
                ? { x: dotPoint.x + event.labelOffset.x, y: dotPoint.y + event.labelOffset.y }
                : { x: dotPoint.x, y: dotPoint.y - 60 };

            const label = document.createElement('div');
            label.className = 'event-label';
            label.style.left = `${labelPos.x}px`;
            label.style.top = `${labelPos.y}px`;
            label.innerHTML = `<img src="${event.imageUrl}" alt="${event.title}"><div class="title">${event.title}</div>`;
            label.addEventListener('click', () => showModal(event));
            dom.labelsContainer.appendChild(label);

            const connectorLine = createSVGLine(dotPoint, labelPos, 'connector-line');
            dom.lineCanvas.appendChild(connectorLine);

            requestAnimationFrame(() => {
                label.classList.add('visible');
                connectorLine.classList.add('visible');
            });
        }
        requestAnimationFrame(() => dot.classList.add('visible'));
    });
}


/**
 * Helper to create an SVG line element.
 * @param {object} p1 - The starting point {x, y}.
 * @param {object} p2 - The ending point {x, y}.
 * @param {string} className - The CSS class for the line.
 * @returns {SVGElement} The created SVG line element.
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
