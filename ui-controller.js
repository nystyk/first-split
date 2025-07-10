// --- UI CONTROLLER ---

/**
 * REVISED: Renders the legend, handles default states, and cleans up irrelevant overlays.
 */
function renderLegend(period) {
    const legendPanel = state.dom.legendPanel;
    
    // --- Event Toggles ---
    const eventTypes = [
        { type: 'major', label: 'Eveniment Major', symbolHtml: `<svg class="legend-marker-svg major-svg" width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10" fill="#4a6d8a" stroke="#000" stroke-width="2"/><polygon points="11,5 12.9,9.1 17.4,9.3 13.8,12.2 15,16.5 11,13.9 7,16.5 8.2,12.2 4.6,9.3 9.1,9.1" fill="#fff"/></svg>` },
        { type: 'atrocity', label: 'Locul Atrocității', symbolHtml: `<svg class="legend-marker-svg atrocity-svg" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="16" height="16" rx="3" fill="#e74c3c" stroke="#fff" stroke-width="2"/><text x="10" y="15" text-anchor="middle" font-size="13" fill="#fff" font-family="Arial" font-weight="bold">!</text></svg>` },
        { type: 'minor', label: 'Eveniment Minor', symbolHtml: `<svg class="legend-marker-svg minor-svg" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" fill="#f1c40f" stroke="#333" stroke-width="2"/><circle cx="9" cy="9" r="3" fill="#fff"/></svg>` }
    ];
    let eventTypesHTML = `<div class="legend-section"><h4>Legenda Evenimente</h4>`;
    eventTypes.forEach(item => {
        const isChecked = state.eventFilters[item.type];
        eventTypesHTML += `
            <label class="legend-toggle" for="toggle-event-${item.type}">
                <input type="checkbox" id="toggle-event-${item.type}" data-type="${item.type}" data-filter-type="event" ${isChecked ? 'checked' : ''}>
                <span class="checkbox-visual"><span class="checkmark"></span></span>
                <span>${item.label}</span>
                <div class="legend-symbol">${item.symbolHtml}</div>
            </label>
        `;
    });
    
    eventTypesHTML += `</div>`;
    
    // --- Thematic Overlays Toggles (Context-Sensitive) ---
    let thematicHTML = '';
    const relevantOverlays = Object.keys(thematicData).filter(key => thematicData[key].relevantYears.includes(period));
    
    relevantOverlays.forEach(key => {
        if (state.overlayFilters[key] === undefined) {
             state.overlayFilters[key] = true;
        }
    });

    if (relevantOverlays.length > 0) {
        thematicHTML = `<div class="legend-section"><h4>Suprapuneri Tematice</h4>`;
        relevantOverlays.forEach(key => {
            const item = thematicData[key];
            const isChecked = state.overlayFilters[key];
            thematicHTML += `
                <label class="legend-toggle" for="toggle-overlay-${key}">
                    <input type="checkbox" id="toggle-overlay-${key}" data-type="${key}" data-filter-type="overlay" ${isChecked ? 'checked' : ''}>
                    <span class="checkbox-visual"><span class="checkmark"></span></span>
                    <span>${item.label}</span>
                </label>
            `;
        });
        thematicHTML += `</div>`;
    }

    // --- Territorial Control Section ---
    let allegianceHTML = '';
    if (period !== 'pre-war' && period !== 'post-war') {
        allegianceHTML = `<div class="legend-section"><h4>Control Teritorial (${period})</h4>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color allied-color"></div><span>Control Aliat</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color axis-color"></div><span>Controlul Axei</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color occupied-color"></div><span>Ocupație de către Axă</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color neutral-color"></div><span>Zone Neutre</span></div></div>`;
    }

    legendPanel.innerHTML = eventTypesHTML + thematicHTML + allegianceHTML;
    legendPanel.classList.remove('hidden');

    // --- Add Event Listeners ---
    document.querySelectorAll('.legend-toggle input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const filterType = e.target.dataset.filterType;
            const type = e.target.dataset.type;
            const isVisible = e.target.checked;

            if (filterType === 'event') {
                state.eventFilters[type] = isVisible;
                renderMapEvents(state.currentPeriod, true); 
            } else if (filterType === 'overlay') {
                state.overlayFilters[type] = isVisible;
                renderThematicOverlays();
            }
        });
    });

    for (const key in state.thematicLayers) {
        if (!relevantOverlays.includes(key) || !state.overlayFilters[key]) {
             renderThematicOverlays();
        }
    }

    renderThematicOverlays();
}

/**
 * Updates the visual state of the timeline slider and its tooltip.
 */
function updateSliderVisuals(periodIndex) {
    const slider = state.dom.timelineSlider;
    const tooltip = state.dom.sliderTooltip;
    const progressBar = document.getElementById('slider-progress-bar');

    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const progressPercent = (val - min) / (max - min) * 100;
    slider.style.setProperty('--fill-percent', `${progressPercent}%`);
    if (progressBar) {
        progressBar.style.setProperty('--fill-percent', `${progressPercent}%`);
    }

    const periodKey = config.periods[parseInt(periodIndex, 10)];
    tooltip.textContent = periodKey === 'pre-war' ? 'Pre-Război' : (periodKey === 'post-war' ? 'Post-Război' : periodKey);
    
    const sliderWidth = slider.clientWidth;
    const thumbWidth = 25;
    const travelDistance = sliderWidth - thumbWidth;
    const progress = (val - min) / (max - min);
    const thumbLeft = progress * travelDistance + (thumbWidth / 2);
    tooltip.style.left = `${slider.offsetLeft + thumbLeft}px`;
}

/**
 * Positions the year labels beneath the timeline slider.
 */
function positionSliderLabels() {
    const labelsContainer = document.getElementById('slider-labels');
    if (!labelsContainer || !state.dom.timelineSlider) return;
    
    // Position labels to match slider stops more precisely
    Array.from(labelsContainer.children).forEach((label, index) => {
        // Calculate position based on slider step
        const slider = state.dom.timelineSlider;
        const sliderWidth = slider.clientWidth;
        const thumbWidth = 25;
        const travelDistance = sliderWidth - thumbWidth;
        const stepPosition = (index / (config.periods.length - 1)) * travelDistance + (thumbWidth / 2);
        const percentage = (stepPosition / sliderWidth) * 100;
        
        label.style.left = `${percentage}%`;
    });
}

/**
 * Sets up the timeline slider with labels and event listeners.
 */
function renderFilterBar() {
    const labelsContainer = document.getElementById('slider-labels');
    state.dom.timelineSlider.max = config.periods.length - 1;
    labelsContainer.innerHTML = config.periods.map(p => `<span class='slider-label'>${p === 'pre-war' ? 'Pre' : (p === 'post-war' ? 'Post' : p)}</span>`).join('');
    labelsContainer.style.display = 'block';
    labelsContainer.style.position = 'relative';
    labelsContainer.style.width = '100%';
    labelsContainer.style.marginTop = '4px';
    labelsContainer.style.pointerEvents = 'none';
    labelsContainer.style.height = '20px';
    
    // Position labels to match slider stops more precisely
    Array.from(labelsContainer.children).forEach((label, index) => {
        label.className = 'slider-label';
        label.style.position = 'absolute';
        label.style.textAlign = 'center';
        label.style.pointerEvents = 'none';
        label.style.whiteSpace = 'nowrap';
        label.style.transform = 'translateX(-50%)';
        label.style.top = '0';
        
        // Calculate position based on slider step
        const slider = state.dom.timelineSlider;
        const sliderWidth = slider.clientWidth;
        const thumbWidth = 25;
        const travelDistance = sliderWidth - thumbWidth;
        const stepPosition = (index / (config.periods.length - 1)) * travelDistance + (thumbWidth / 2);
        const percentage = (stepPosition / sliderWidth) * 100;
        
        label.style.left = `${percentage}%`;
    });

    state.dom.timelineSlider.addEventListener('input', () => updateSliderVisuals(state.dom.timelineSlider.value));
    state.dom.timelineSlider.addEventListener('change', () => handlePeriodChange(config.periods[state.dom.timelineSlider.value]));

    const toggleTooltip = (visible) => {
        if (visible) {
            updateSliderVisuals(state.dom.timelineSlider.value);
            state.dom.sliderTooltip.classList.add('visible');
        } else {
            state.dom.sliderTooltip.classList.remove('visible');
        }
    };
    
    state.dom.timelineSlider.addEventListener('mousedown', () => toggleTooltip(true));
    state.dom.timelineSlider.addEventListener('touchstart', () => toggleTooltip(true));
    state.dom.timelineSlider.addEventListener('mouseup', () => toggleTooltip(false));
    state.dom.timelineSlider.addEventListener('touchend', () => toggleTooltip(false));
}

window.addEventListener('resize', () => setTimeout(positionSliderLabels, 0));

// --- MODAL MANAGEMENT ---
function showModal(event) {
    state.currentEvent = event;
    const modal = state.dom.modal;
    
    // Basic event information
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDescription').textContent = event.description;
    document.getElementById('modalImage').src = event.imageUrl;
    document.getElementById('modalYear').textContent = event.year;
    
    // Event type badge
    const eventTypeElement = document.getElementById('modalEventType');
    eventTypeElement.textContent = getEventTypeLabel(event.type);
    eventTypeElement.className = `px-3 py-1 text-xs font-semibold rounded-full ${event.type}`;
    
    // Location information
    let locationText = `Coordonate: ${event.lat.toFixed(4)}, ${event.lng.toFixed(4)}`;
    document.getElementById('modalLocationText').textContent = locationText;
    
    // Historical context, Key Figures, and Impact
    document.getElementById('modalContext').innerHTML = `<p>${event.context || 'Context istoric nu este disponibil.'}</p>`;
    document.getElementById('modalFigures').innerHTML = generateKeyFiguresHTML(event.figures);
    document.getElementById('modalImpact').innerHTML = `<p>${event.impact || 'Impactul și consecințele nu sunt disponibile.'}</p>`;
    
    // Progress indicator
    updateModalProgress(event);
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Add event listeners for interactive buttons
    setupModalInteractions(event);

    // Add document click listener to close on outside click
    function handleOutsideClick(e) {
        const content = modal.querySelector('.modal-content');
        if (content && !content.contains(e.target)) {
            hideModal();
        }
    }
    state.modalOutsideClickHandler = handleOutsideClick;
    setTimeout(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
    }, 0);
}

function getEventTypeLabel(type) {
    const labels = {
        'major': 'Eveniment Major',
        'minor': 'Eveniment Minor', 
        'atrocity': 'Atrocitate'
    };
    return labels[type] || type;
}

function generateKeyFiguresHTML(figures) {
    if (!figures || figures.length === 0) {
        return '<p>Nu sunt disponibile figuri cheie.</p>';
    }
    
    return figures.map(figure => `
        <div class="figure-card">
            <div class="figure-name">${figure.name}</div>
            <div class="figure-role">${figure.role}</div>
        </div>
    `).join('');
}


function getEventPeriod(event) {
    for (const [period, events] of Object.entries(allEventsData)) {
        if (events.some(e => e.title === event.title)) {
            return period;
        }
    }
    return 'pre-war';
}

function updateModalProgress(event) {
    const currentPeriod = getEventPeriod(event);
    const eventsInPeriod = allEventsData[currentPeriod] || [];
    const currentIndex = eventsInPeriod.findIndex(e => e.title === event.title);
    
    if (currentIndex !== -1) {
        const progress = ((currentIndex + 1) / eventsInPeriod.length) * 100;
        document.getElementById('modalProgress').textContent = currentIndex + 1;
        document.getElementById('modalTotal').textContent = eventsInPeriod.length;
        document.getElementById('modalProgressBar').style.width = `${progress}%`;
    }
}

function setupModalInteractions(event) {
    // View on Map button
    document.getElementById('viewOnMapBtn').onclick = () => {
        hideModal();
        state.map.flyTo([event.lat, event.lng], 8, {
            duration: 2,
            easeLinearity: 0.25
        });
    };
    
    // Navigation buttons
    const currentPeriod = getEventPeriod(event);
    const eventsInPeriod = allEventsData[currentPeriod] || [];
    const currentIndex = eventsInPeriod.findIndex(e => e.title === event.title);
    
    const prevBtn = document.getElementById('prevEventBtn');
    const nextBtn = document.getElementById('nextEventBtn');
    
    prevBtn.onclick = () => {
        if (currentIndex > 0) {
            showModal(eventsInPeriod[currentIndex - 1]);
        }
    };
    
    nextBtn.onclick = () => {
        if (currentIndex < eventsInPeriod.length - 1) {
            showModal(eventsInPeriod[currentIndex + 1]);
        }
    };
    
    // Update button states
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= eventsInPeriod.length - 1;
    
    // Keyboard navigation
    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            hideModal();
        } else if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            prevBtn.click();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextBtn.click();
        }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    // Store the handler to remove it later
    state.currentModalKeyHandler = handleKeyPress;
}

function hideModal() {
    state.dom.modal.classList.add('hidden');
    state.currentEvent = null;
    
    // Remove keyboard event listener
    if (state.currentModalKeyHandler) {
        document.removeEventListener('keydown', state.currentModalKeyHandler);
        state.currentModalKeyHandler = null;
    }
    // Remove outside click handler if present
    if (state.modalOutsideClickHandler) {
        document.removeEventListener('mousedown', state.modalOutsideClickHandler);
        document.removeEventListener('touchstart', state.modalOutsideClickHandler);
        state.modalOutsideClickHandler = null;
    }
}

function showContextModal(key) {
    const data = contextData[key];
    if (!data) {
        state.dom.contextModal.classList.add('hidden');
        return;
    }
    state.dom.contextModal.querySelector('#contextModalTitle').textContent = data.title;
    state.dom.contextModal.querySelector('#contextModalDescription').textContent = data.description;
    state.dom.contextModal.classList.remove('hidden');

    // Add document click listener to close on outside click
    function handleOutsideClick(e) {
        const content = state.dom.contextModal.querySelector('.context-modal-content');
        if (content && !content.contains(e.target)) {
            hideContextModal();
        }
    }
    // Store handler so it can be removed later
    state.contextModalOutsideClickHandler = handleOutsideClick;
    setTimeout(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
    }, 0);
}

function hideContextModal() {
    state.dom.contextModal.classList.add('hidden');
    // Remove outside click handler if present
    if (state.contextModalOutsideClickHandler) {
        document.removeEventListener('mousedown', state.contextModalOutsideClickHandler);
        document.removeEventListener('touchstart', state.contextModalOutsideClickHandler);
        state.contextModalOutsideClickHandler = null;
    }
}

// === RESET BUTTON FUNCTIONALITY ===
function addAestheticTileLayer() {
    const aestheticTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors, © CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    });
    
    aestheticTileLayer.addTo(state.map);
    
    setTimeout(() => {
        if (aestheticTileLayer._map) {
            aestheticTileLayer.remove();
        }
    }, 2500);
    
    return aestheticTileLayer;
}

function resetMapView() {
    const currentPeriod = state.currentPeriod || config.periods[state.dom.timelineSlider.value];
    if (typeof handlePeriodChange === 'function') {
        handlePeriodChange(currentPeriod, true);
    } else if (window.handlePeriodChange) {
        window.handlePeriodChange(currentPeriod, true);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('story-play').addEventListener('click', resetMapView);
    
    const backBtn = document.getElementById('story-back');
    const forwardBtn = document.getElementById('story-forward');
    
    if(backBtn) backBtn.style.display = 'none';
    if(forwardBtn) forwardBtn.style.display = 'none';
});
