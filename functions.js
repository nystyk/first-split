// --- MAP INITIALIZATION ---
function initializeMap() {
    map = L.map('map', {
        zoomControl: false, scrollWheelZoom: false, doubleClickZoom: false,
        touchZoom: false, dragging: false, attributionControl: false,
        worldCopyJump: true
    });
    map.setView([30, 35], 2);
    
    fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
        .then(res => res.json())
        .then(geoJsonData => {
            geoJsonLayer = L.geoJSON(geoJsonData).addTo(map);
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
        const activePeriod = currentPeriod;
        if (activePeriod) {
            renderMapEvents(activePeriod);
        }
    };

    window.addEventListener('resize', debounce(() => {
        rerenderOnResize();
        positionSliderLabels();
    }, 100));
}

// --- MAP STATE & COLORS ---
function getAllegiance(countryName, controlData) {
    if (!controlData) return 'neutral';
    if (controlData.allied.includes(countryName)) return 'allied';
    if (controlData.co_belligerent.includes(countryName)) return 'co_belligerent';
    if (controlData.axis.includes(countryName)) return 'axis';
    if (controlData.co_aggressor.includes(countryName)) return 'co_aggressor';
    if (controlData.occupied_by_axis.includes(countryName)) return 'occupied_by_axis';
    return 'neutral';
}

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

function updateMapColors(newPeriod, oldPeriod) {
    const oldControl = territorialData[oldPeriod];
    const newControl = territorialData[newPeriod];
    if (!geoJsonLayer || !newControl) return;

    geoJsonLayer.eachLayer(layer => {
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

function getBounds(events) {
    const visibleEvents = events.filter(e => e.onMap !== false);

    if (visibleEvents.length === 0) {
        return L.latLngBounds([[60, -20], [20, 80]]);
    }

    const points = visibleEvents.map(e => L.latLng(e.lat, e.lng));

    if (points.length === 1) {
        return L.latLngBounds([
            [points[0].lat - 5, points[0].lng - 5],
            [points[0].lat + 5, points[0].lng + 5]
        ]);
    }

    // For years with many events, add more padding
    return L.latLngBounds(points);
}

// --- VISUAL RENDERING ---
function renderMapEvents(period) {
    dotsContainer.innerHTML = '';
    labelsContainer.innerHTML = '';
    lineCanvas.innerHTML = '';

    const events = allEventsData[period];
    if (!events) return;

    const occupiedRects = [];

    function rectsOverlap(a, b) {
        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }

    function findFreeLabelSpot(dot, labelW, labelH) {
        const maxRadius = 220;
        const step = 18;
        const radiusStep = 18;
        let best = null;
        let minDist = Infinity;

        for (let r = 60; r <= maxRadius; r += radiusStep) {
            for (let angle = 0; angle < 360; angle += step) {
                const rad = angle * Math.PI / 180;
                const x = dot.x + r * Math.cos(rad);
                const y = dot.y + r * Math.sin(rad);
                const rect = { x: x - labelW / 2, y: y - labelH / 2, width: labelW, height: labelH };

                let overlap = false;
                for (const occ of occupiedRects) {
                    if (rectsOverlap(rect, occ)) {
                        overlap = true;
                        break;
                    }
                }
                if (!overlap) {
                    const dist = Math.abs(r);
                    if (dist < minDist) {
                        minDist = dist;
                        best = { x, y };
                    }
                }
            }
            if (best) break;
        }
        return best || { x: dot.x, y: dot.y };
    }

    function findFreeDotSpot(dot, dotW, dotH) {
        let x = dot.x, y = dot.y;
        let tries = 0;
        while (tries < 20) {
            const rect = { x: x - dotW / 2, y: y - dotH / 2, width: dotW, height: dotH };
            let overlap = false;
            for (const occ of occupiedRects) {
                if (rectsOverlap(rect, occ)) {
                    overlap = true;
                    break;
                }
            }
            if (!overlap) return { x, y };
            x += 18; y += 18; tries++;
        }
        return { x, y };
    }

    const typeOrder = { major: 1, minor: 2, atrocity: 3 };
    const sortedEvents = events
        .filter(e => e.onMap !== false)
        .slice()
        .sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);

    sortedEvents.forEach(event => {
        const eventLatLng = L.latLng(event.lat, event.lng);
        let dotPoint = map.latLngToContainerPoint(eventLatLng);

        let dotW = 12, dotH = 12;
        if (event.type === 'atrocity' || event.type === 'minor') { dotW = dotH = 10; }

        const dotPos = findFreeDotSpot(dotPoint, dotW, dotH);
        const dotRect = { x: dotPos.x - dotW / 2, y: dotPos.y - dotH / 2, width: dotW, height: dotH };
        occupiedRects.push(dotRect);

        let dot;
        switch(event.type) {
            case 'major': {
                const labelW = 160, labelH = 50;
                const labelPos = findFreeLabelSpot(dotPos, labelW, labelH);
                const labelRect = { x: labelPos.x - labelW / 2, y: labelPos.y - labelH / 2, width: labelW, height: labelH };
                occupiedRects.push(labelRect);

                const lineRect = {
                    x: Math.min(dotPos.x, labelPos.x),
                    y: Math.min(dotPos.y, labelPos.y),
                    width: Math.abs(dotPos.x - labelPos.x),
                    height: Math.abs(dotPos.y - labelPos.y)
                };
                occupiedRects.push(lineRect);

                dot = document.createElement('div');
                dot.className = 'event-dot';
                dot.style.left = `${dotPos.x}px`;
                dot.style.top = `${dotPos.y}px`;

                const label = document.createElement('div');
                label.className = 'event-label';
                label.style.left = `${labelPos.x}px`;
                label.style.top = `${labelPos.y}px`;
                label.innerHTML = `<img src="${event.imageUrl}" alt="${event.title}"><div class="title">${event.title}</div>`;
                label.addEventListener('click', () => showModal(event));

                const connectorLine = createSVGLine(dotPos, labelPos, 'connector-line');

                dotsContainer.appendChild(dot);
                labelsContainer.appendChild(label);
                lineCanvas.appendChild(connectorLine);

                requestAnimationFrame(() => {
                    dot.classList.add('visible');
                    label.classList.add('visible');
                    connectorLine.classList.add('visible');
                });
                break;
            }
            case 'atrocity':
            case 'minor': {
                dot = document.createElement('div');
                dot.className = event.type === 'atrocity' ? 'atrocity-dot' : 'minor-event-dot';
                dot.style.left = `${dotPos.x}px`;
                dot.style.top = `${dotPos.y}px`;
                dot.title = event.title;
                dot.addEventListener('click', () => showModal(event));
                dotsContainer.appendChild(dot);
                requestAnimationFrame(() => {
                    dot.classList.add('visible');
                });
                break;
            }
        }
    });
}

function renderLegend(period) {
    const legendContent = document.getElementById('legend-panel');
    if(!legendContent) return;

    let eventTypesHTML = `
        <div class="legend-section">
            <h4>Legenda Evenimente</h4>
            <div class="legend-item-event">
                <div class="legend-symbol"><div class="legend-symbol-label"></div></div>
                <span>Eveniment Major</span>
            </div>
            <div class="legend-item-event">
                <div class="legend-symbol"><div class="atrocity-dot visible"></div></div>
                <span>Locul Atrocității</span>
            </div>
            <div class="legend-item-event">
                <div class="legend-symbol"><div class="minor-event-dot visible"></div></div>
                <span>Eveniment Minor</span>
            </div>
        </div>
    `;
    
    let allegianceHTML = '';
    if (period !== 'pre-war' && period !== 'post-war') {
        const control = territorialData[period] || {};
        allegianceHTML = `
        <div class="legend-section">
            <h4>Control Teritorial (${period})</h4>
            <div class="legend-item"><div class="legend-color allied-color"></div><span>Control Aliat</span></div>`;
        
        if(control.co_belligerent && control.co_belligerent.length > 0) {
             allegianceHTML += `<div class="legend-item"><div class="legend-color co-belligerent-allied-color"></div><span>Co-beligeranți (cu Aliații)</span></div>`;
        }
        allegianceHTML += `<div class="legend-item"><div class="legend-color axis-color"></div><span>Controlul Axei</span></div>`;
        if(control.co_aggressor && control.co_aggressor.length > 0) {
             allegianceHTML += `<div class="legend-item"><div class="legend-color co-aggressor-axis-color"></div><span>Co-agresori (cu Axa)</span></div>`;
        }
        allegianceHTML += `
            <div class="legend-item"><div class="legend-color occupied-color"></div><span>Ocupație de către Axă</span></div>
            <div class="legend-item"><div class="legend-color neutral-color"></div><span>Zone Neutre</span></div>
        </div>`;
    }

    legendContent.innerHTML = eventTypesHTML + allegianceHTML;
    legendContent.classList.remove('hidden');
}

function createSVGLine(p1, p2, className) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', p1.x); line.setAttribute('y1', p1.y);
    line.setAttribute('x2', p2.x); line.setAttribute('y2', p2.y);
    line.setAttribute('class', className);
    return line;
}

function updateSliderVisuals(periodIndex) {
    const slider = timelineSlider;
    const tooltip = sliderTooltip;
    
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);

    const progressPercent = (val - min) / (max - min) * 100;
    slider.style.setProperty('--fill-percent', `${progressPercent}%`);
    
    const periodKey = periods[parseInt(periodIndex, 10)];
    tooltip.textContent = periodKey === 'pre-war' ? 'Pre-Război' : (periodKey === 'post-war' ? 'Post-Război' : periodKey);
    
    const sliderWidth = slider.clientWidth;
    const thumbWidth = 25;
    const travelDistance = sliderWidth - thumbWidth;
    const progress = (val - min) / (max - min);
    const thumbLeft = progress * travelDistance;
    const thumbCenter = thumbLeft + (thumbWidth / 2);
    const sliderLeftOffset = slider.offsetLeft;
    const tooltipFinalLeft = sliderLeftOffset + thumbCenter;
    
    tooltip.style.left = `${tooltipFinalLeft}px`;
}

function positionSliderLabels() {
    const slider = document.getElementById('timeline-slider');
    const labelsContainer = document.getElementById('slider-labels');
    const labels = labelsContainer.getElementsByTagName('span');
    
    if (!slider || !labelsContainer || labels.length === 0) return;

    const sliderWidth = slider.clientWidth;
    const thumbWidth = 25;
    const travelableWidth = sliderWidth - thumbWidth;
    const numSteps = labels.length - 1;

    for (let i = 0; i < labels.length; i++) {
        const progress = i / numSteps;
        const labelCenterPos = (progress * travelableWidth) + (thumbWidth / 2);
        
        const label = labels[i];
        label.style.position = 'absolute';
        label.style.left = `${labelCenterPos}px`;
        label.style.transform = 'translateX(-50%)';
    }
}

function renderFilterBar() {
    const labelsContainer = document.getElementById('slider-labels');
    timelineSlider.max = periods.length - 1;
    
    labelsContainer.innerHTML = periods.map(p => `<span>${p === 'pre-war' ? 'Pre' : (p === 'post-war' ? 'Post' : p)}</span>`).join('');

    timelineSlider.addEventListener('input', (e) => {
        const periodIndex = e.target.value;
        updateSliderVisuals(periodIndex);
    });
    
    timelineSlider.addEventListener('change', (e) => {
        const periodIndex = e.target.value;
        const selectedPeriod = periods[periodIndex];
        handlePeriodChange(selectedPeriod);
    });

    const toggleTooltip = (visible) => {
        if(visible) {
            updateSliderVisuals(timelineSlider.value);
            sliderTooltip.classList.add('visible');
        } else {
            sliderTooltip.classList.remove('visible');
        }
    };
    
    timelineSlider.addEventListener('mousedown', () => toggleTooltip(true));
    timelineSlider.addEventListener('touchstart', () => toggleTooltip(true));
    timelineSlider.addEventListener('mouseup', () => toggleTooltip(false));
    timelineSlider.addEventListener('touchend', () => toggleTooltip(false));
};

// --- MODAL MANAGEMENT ---
function showModal(event) {
    currentEvent = event;
    modal.querySelector('#modalImage').src = event.imageUrl;
    modal.querySelector('#modalTitle').textContent = event.title;
    modal.querySelector('#modalDescription').textContent = event.description;
    modal.querySelector('#aiContent').classList.add('hidden');
    modal.classList.remove('hidden');
}

function hideModal() { modal.classList.add('hidden'); }

function showContextModal(key) {
    const data = contextData[key];
    if (!data) {
        contextModal.classList.add('hidden');
        return
    };
    contextModal.querySelector('#contextModalTitle').textContent = data.title;
    contextModal.querySelector('#contextModalDescription').textContent = data.description;
    contextModal.classList.remove('hidden');
}

function hideContextModal() { contextModal.classList.add('hidden'); }

// --- CORE LOGIC ---
function handlePeriodChange(selectedPeriod) {
    if (selectedPeriod === currentPeriod) return;

    const oldPeriod = currentPeriod;
    currentPeriod = selectedPeriod;
    const events = allEventsData[selectedPeriod] || [];

    dotsContainer.innerHTML = '';
    labelsContainer.innerHTML = '';
    lineCanvas.innerHTML = '';
    renderLegend(selectedPeriod);
    showContextModal(selectedPeriod);

    const targetBounds = getBounds(events);

    mapEl.classList.add('is-transitioning');
    updateMapColors(selectedPeriod, oldPeriod);

    let paddingTopLeft = [340, 100];
    let paddingBottomRight = [50, 150];
    let maxZoom = 4;
    if (events.length <= 3) {
        maxZoom = 5;
    } else if (events.length > 10) {
        paddingTopLeft = [400, 150];
        paddingBottomRight = [100, 200];
        maxZoom = 3;
    }

    map.flyToBounds(targetBounds, {
        paddingTopLeft,
        paddingBottomRight,
        maxZoom,
        duration: 1.8
    });

    map.once('moveend', () => {
        mapEl.classList.remove('is-transitioning');
        setTimeout(() => {
            renderMapEvents(selectedPeriod);
        }, 50);
    });
}

function initialLoad() {
    const activePeriod = periods[timelineSlider.value];
    currentPeriod = activePeriod;
    const events = allEventsData[activePeriod] || [];
    
    const initialBounds = getBounds(events);
    const options = { paddingTopLeft: [340, 100], paddingBottomRight: [50, 150], maxZoom: 6 };

    map.fitBounds(initialBounds, options);

    updateMapColors(activePeriod, null);
    renderLegend(activePeriod);
    showContextModal(activePeriod);
    updateSliderVisuals(timelineSlider.value);
    
    map.whenReady(() => {
        renderMapEvents(activePeriod)
    });
}
