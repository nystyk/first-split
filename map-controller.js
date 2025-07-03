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
 * Renders event dots, labels, and connector lines onto the map overlay.
 * @param {string} period - The current period to render events for.
 */
function renderMapEvents(period) {
    state.dom.dotsContainer.innerHTML = '';
    state.dom.labelsContainer.innerHTML = '';
    state.dom.lineCanvas.innerHTML = '';

    const events = allEventsData[period];
    if (!events) return;

    const occupiedRects = [];

    function rectsOverlap(a, b) {
        return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
    }

    function findFreeSpot(initialPos, width, height, isLabel = false) {
        const maxRadius = 220;
        const step = 18;
        const radiusStep = 18;
        let best = null;
        let minDist = Infinity;

        let rect = { x: initialPos.x - width / 2, y: initialPos.y - height / 2, width, height };
        if (!occupiedRects.some(occ => rectsOverlap(rect, occ))) {
            return initialPos;
        }

        if (!isLabel) return initialPos;

        for (let r = 60; r <= maxRadius; r += radiusStep) {
            for (let angle = 0; angle < 360; angle += step) {
                const rad = angle * Math.PI / 180;
                const x = initialPos.x + r * Math.cos(rad);
                const y = initialPos.y + r * Math.sin(rad);
                rect = { x: x - width / 2, y: y - height / 2, width, height };
                if (!occupiedRects.some(occ => rectsOverlap(rect, occ))) {
                    const dist = Math.hypot(x - initialPos.x, y - initialPos.y);
                    if (dist < minDist) {
                        minDist = dist;
                        best = { x, y };
                    }
                }
            }
            if (best) return best;
        }
        return best || initialPos;
    }

    const typeOrder = { major: 1, minor: 2, atrocity: 3 };
    const sortedEvents = (events || []).filter(e => e.onMap !== false).sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

    sortedEvents.forEach(event => {
        const dotPoint = state.map.latLngToContainerPoint(L.latLng(event.lat, event.lng));
        const dotSize = (event.type === 'atrocity' || event.type === 'minor') ? 10 : 12;
        const dotPos = findFreeSpot(dotPoint, dotSize, dotSize);
        occupiedRects.push({ x: dotPos.x - dotSize / 2, y: dotPos.y - dotSize / 2, width: dotSize, height: dotSize });

        const dot = document.createElement('div');
        dot.className = event.type === 'major' ? 'event-dot' : (event.type === 'atrocity' ? 'atrocity-dot' : 'minor-event-dot');
        dot.style.left = `${dotPos.x}px`;
        dot.style.top = `${dotPos.y}px`;
        dot.title = event.title;
        dot.addEventListener('click', () => showModal(event));
        state.dom.dotsContainer.appendChild(dot);

        if (event.type === 'major') {
            const labelW = 160, labelH = 50;
            const labelPos = findFreeSpot(dotPos, labelW, labelH, true);
            occupiedRects.push({ x: labelPos.x - labelW / 2, y: labelPos.y - labelH / 2, width: labelW, height: labelH });

            const label = document.createElement('div');
            label.className = 'event-label';
            label.style.left = `${labelPos.x}px`;
            label.style.top = `${labelPos.y}px`;
            label.innerHTML = `<img src="${event.imageUrl}" alt="${event.title}"><div class="title">${event.title}</div>`;
            label.addEventListener('click', () => showModal(event));
            state.dom.labelsContainer.appendChild(label);

            const connectorLine = createSVGLine(dotPos, labelPos, 'connector-line');
            state.dom.lineCanvas.appendChild(connectorLine);

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
