// --- UI CONTROLLER ---

/**
 * REVISED: Renders the legend, handles default states, and cleans up irrelevant overlays.
 */
function renderLegend(period) {
    const legendPanel = state.dom.legendPanel;
    
    // --- Event Toggles ---
    const eventTypes = [
        { type: 'major', label: 'Eveniment Major', symbolHtml: '<div class="legend-symbol-label"></div>' },
        { type: 'atrocity', label: 'Locul Atrocității', symbolHtml: '<div class="atrocity-dot visible"></div>' },
        { type: 'minor', label: 'Eveniment Minor', symbolHtml: '<div class="minor-event-dot visible"></div>' }
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
    
    // FIX: Set relevant overlays to be ON by default. We check if the state is undefined
    // to only set it the first time the user enters a relevant year for that session.
    relevantOverlays.forEach(key => {
        if (state.overlayFilters[key] === undefined) {
             state.overlayFilters[key] = true;
        }
    });

    if (relevantOverlays.length > 0) {
        thematicHTML = `<div class="legend-section"><h4>Suprapuneri Tematice</h4>`;
        relevantOverlays.forEach(key => {
            const item = thematicData[key];
            const isChecked = state.overlayFilters[key]; // This will now be true by default
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
                renderMapEvents(state.currentPeriod); 
            } else if (filterType === 'overlay') {
                state.overlayFilters[type] = isVisible;
                renderThematicOverlays();
            }
        });
    });

    // FIX: Automatically hide overlays that are no longer relevant for the current year
    for (const key in state.thematicLayers) {
        if (!relevantOverlays.includes(key) || !state.overlayFilters[key]) {
             renderThematicOverlays();
        }
    }
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
    // Remove blue background from slider, only use progress bar
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
function positionSliderLabels() {} // No longer needed

/**
 * Sets up the timeline slider with labels and event listeners.
 */
function renderFilterBar() {
    const labelsContainer = document.getElementById('slider-labels');
    state.dom.timelineSlider.max = config.periods.length - 1;
    labelsContainer.innerHTML = config.periods.map(p => `<span class='slider-label'>${p === 'pre-war' ? 'Pre' : (p === 'post-war' ? 'Post' : p)}</span>`).join('');
    labelsContainer.style.display = 'flex';
    labelsContainer.style.justifyContent = 'space-between';
    labelsContainer.style.alignItems = 'center';
    labelsContainer.style.width = '100%';
    labelsContainer.style.position = 'static';
    labelsContainer.style.marginTop = '4px';
    labelsContainer.style.pointerEvents = 'none';
    Array.from(labelsContainer.children).forEach(label => {
        label.className = 'slider-label';
        label.style.flex = '0 0 auto';
        label.style.textAlign = 'center';
        label.style.width = '40px';
        label.style.pointerEvents = 'none';
        label.style.position = 'static';
        label.style.left = '';
        label.style.transform = '';
        label.style.top = '';
        label.style.whiteSpace = 'nowrap';
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

// Also call positionSliderLabels on window resize
window.addEventListener('resize', () => setTimeout(positionSliderLabels, 0));

// --- MODAL MANAGEMENT ---
function showModal(event) {
    state.currentEvent = event;
    const modal = state.dom.modal;
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDescription').textContent = event.description;
    document.getElementById('modalImage').src = event.imageUrl;
    modal.classList.remove('hidden');
}

function hideModal() {
    state.dom.modal.classList.add('hidden');
    state.currentEvent = null;
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
}

function hideContextModal() {
    state.dom.contextModal.classList.add('hidden');
}

// === STORY MODE BUTTONS ===
const storyState = {
    active: false,
    currentEventIndex: 0,
    events: [],
    period: null,
    memory: {} // Stores last event index for each period
};

function getEventsForPeriod(period) {
    if (!allEventsData[period]) return [];
    return allEventsData[period].sort((a, b) => a.year - b.year);
}

function setStoryModeActive(active) {
    storyState.active = active;
    
    // Update button states
    const backBtn = document.getElementById('story-back');
    const forwardBtn = document.getElementById('story-forward');
    const timelineSlider = document.getElementById('timeline-slider');
    const timelineWrapper = document.getElementById('timeline-slider-wrapper');
    const sliderLabels = document.getElementById('slider-labels');
    
    backBtn.disabled = !active;
    forwardBtn.disabled = !active;
    timelineSlider.disabled = active;
    
    // Update visual states
    if (active) {
        backBtn.classList.remove('disabled');
        forwardBtn.classList.remove('disabled');
        timelineWrapper.classList.add('story-mode-active');
        sliderLabels.classList.add('story-mode-active');
    } else {
        backBtn.classList.add('disabled');
        forwardBtn.classList.add('disabled');
        timelineWrapper.classList.remove('story-mode-active');
        sliderLabels.classList.remove('story-mode-active');
    }
    
    // Change play/pause icon
    const playIcon = document.getElementById('story-play-icon');
    if (active) {
        playIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6" />'; // Pause icon
    } else {
        playIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-6.518-3.748A1 1 0 007 8.118v7.764a1 1 0 001.234.97l6.518-1.87A1 1 0 0016 13.882V10.12a1 1 0 00-1.248-.952z" />'; // Play icon
    }
    
    if (active) {
        // Enter Story Mode
        const currentPeriod = config.periods[state.dom.timelineSlider.value];
        storyState.period = currentPeriod;
        storyState.events = getEventsForPeriod(currentPeriod);
        
        // Use memory or start from first event
        if (storyState.memory[currentPeriod] !== undefined) {
            storyState.currentEventIndex = storyState.memory[currentPeriod];
        } else {
            storyState.currentEventIndex = 0;
        }
        
        if (storyState.events.length > 0) {
            showEventInStoryMode(storyState.events[storyState.currentEventIndex]);
        }
    } else {
        // Exit Story Mode - save current position to memory
        if (storyState.period && storyState.events.length > 0) {
            storyState.memory[storyState.period] = storyState.currentEventIndex;
        }
        
        // Return to normal view with smooth animation
        state.map.flyTo([20, 0], 2, {
            duration: 1.5,
            easeLinearity: 0.25
        });
        
        // Hide any open event dialogs
        hideEventDialog();
    }
}

function showEventInStoryMode(event) {
    if (!event) return;
    // Fly to event location
    state.map.flyTo([event.lat, event.lng], 6, {
        duration: 2,
        easeLinearity: 0.25
    });
    // Show only the hover context box (not modal)
    setTimeout(() => {
        // Try to find the dot for this event
        const eventId = typeof getEventId === 'function' ? getEventId(event) : window.getEventId(event);
        const dot = document.querySelector(`.event-element[data-event-id="${eventId}"]`);
        if (dot) {
            if (typeof showHoverBox === 'function') {
                showHoverBox(event, dot);
            } else if (window.showHoverBox) {
                window.showHoverBox(event, dot);
            }
        } else {
            // If not found, force re-render events and try again
            if (typeof renderMapEvents === 'function') {
                renderMapEvents(storyState.period, true);
            } else if (window.renderMapEvents) {
                window.renderMapEvents(storyState.period, true);
            }
            setTimeout(() => {
                const dotRetry = document.querySelector(`.event-element[data-event-id="${eventId}"]`);
                if (dotRetry) {
                    if (typeof showHoverBox === 'function') {
                        showHoverBox(event, dotRetry);
                    } else if (window.showHoverBox) {
                        window.showHoverBox(event, dotRetry);
                    }
                }
            }, 300);
        }
    }, 1000); // Wait for fly animation to complete
}

function showEventDialog(event) {
    // Create or update event dialog
    let dialog = document.getElementById('story-event-dialog');
    if (!dialog) {
        dialog = document.createElement('div');
        dialog.id = 'story-event-dialog';
        dialog.className = 'fixed top-4 left-4 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-[2000] max-w-md';
        dialog.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-bold text-lg"></h3>
                <button onclick="hideEventDialog()" class="text-gray-400 hover:text-white">×</button>
            </div>
            <p class="text-sm"></p>
        `;
        document.body.appendChild(dialog);
    }
    
    dialog.querySelector('h3').textContent = `${event.year}: ${event.title}`;
    dialog.querySelector('p').textContent = event.description;
}

function hideEventDialog() {
    const dialog = document.getElementById('story-event-dialog');
    if (dialog) {
        dialog.remove();
    }
}

function navigateToNextEvent() {
    if (!storyState.active || storyState.events.length === 0) return;
    
    storyState.currentEventIndex++;
    
    if (storyState.currentEventIndex >= storyState.events.length) {
        // Move to next period
        const currentPeriodIndex = config.periods.indexOf(storyState.period);
        if (currentPeriodIndex < config.periods.length - 1) {
            const nextPeriod = config.periods[currentPeriodIndex + 1];
            const nextEvents = getEventsForPeriod(nextPeriod);
            
            if (nextEvents.length > 0) {
                // Animate period change
                handlePeriodChange(nextPeriod);
                
                // Update story state for new period
                setTimeout(() => {
                    storyState.period = nextPeriod;
                    storyState.events = nextEvents;
                    storyState.currentEventIndex = 0;
                    storyState.memory[nextPeriod] = 0;
                    showEventInStoryMode(nextEvents[0]);
                }, 1000); // Wait for period animation
            }
        } else {
            // At the end, loop back to first event of current period
            storyState.currentEventIndex = 0;
            showEventInStoryMode(storyState.events[0]);
        }
    } else {
        showEventInStoryMode(storyState.events[storyState.currentEventIndex]);
    }
}

function navigateToPreviousEvent() {
    if (!storyState.active || storyState.events.length === 0) return;
    
    storyState.currentEventIndex--;
    
    if (storyState.currentEventIndex < 0) {
        // Move to previous period
        const currentPeriodIndex = config.periods.indexOf(storyState.period);
        if (currentPeriodIndex > 0) {
            const prevPeriod = config.periods[currentPeriodIndex - 1];
            const prevEvents = getEventsForPeriod(prevPeriod);
            
            if (prevEvents.length > 0) {
                // Animate period change
                handlePeriodChange(prevPeriod);
                
                // Update story state for new period
                setTimeout(() => {
                    storyState.period = prevPeriod;
                    storyState.events = prevEvents;
                    storyState.currentEventIndex = prevEvents.length - 1; // Last event
                    storyState.memory[prevPeriod] = prevEvents.length - 1;
                    showEventInStoryMode(prevEvents[prevEvents.length - 1]);
                }, 1000); // Wait for period animation
            }
        } else {
            // At the beginning, loop to last event of current period
            storyState.currentEventIndex = storyState.events.length - 1;
            showEventInStoryMode(storyState.events[storyState.events.length - 1]);
        }
    } else {
        showEventInStoryMode(storyState.events[storyState.currentEventIndex]);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize story mode button states
    const backBtn = document.getElementById('story-back');
    const forwardBtn = document.getElementById('story-forward');
    
    // Initially disable navigation buttons (they're only active in story mode)
    backBtn.disabled = true;
    forwardBtn.disabled = true;
    backBtn.classList.add('disabled');
    forwardBtn.classList.add('disabled');
    
    // Attach story mode button listeners
    document.getElementById('story-play').addEventListener('click', () => {
        setStoryModeActive(!storyState.active);
    });
    backBtn.addEventListener('click', () => {
        if (storyState.active) {
            navigateToPreviousEvent();
        }
    });
    forwardBtn.addEventListener('click', () => {
        if (storyState.active) {
            navigateToNextEvent();
        }
    });
    // Reset story mode memory when timeline is changed
    document.getElementById('timeline-slider').addEventListener('change', () => {
        storyState.memory = {};
    });
});
