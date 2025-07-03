// --- UI CONTROLLER ---

/**
 * Renders the legend panel with event types and territorial control information.
 * @param {string} period - The current period to display in the legend.
 */
function renderLegend(period) {
    let eventTypesHTML = `
        <div class="legend-section">
            <h4>Legenda Evenimente</h4>
            <div class="legend-item-event"><div class="legend-symbol"><div class="legend-symbol-label"></div></div><span>Eveniment Major</span></div>
            <div class="legend-item-event"><div class="legend-symbol"><div class="atrocity-dot visible"></div></div><span>Locul Atrocității</span></div>
            <div class="legend-item-event"><div class="legend-symbol"><div class="minor-event-dot visible"></div></div><span>Eveniment Minor</span></div>
        </div>`;
    
    let allegianceHTML = '';
    if (period !== 'pre-war' && period !== 'post-war') {
        const control = territorialData[period] || {};
        allegianceHTML = `<div class="legend-section"><h4>Control Teritorial (${period})</h4>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color allied-color"></div><span>Control Aliat</span></div>`;
        if (control.co_belligerent && control.co_belligerent.length > 0) {
            allegianceHTML += `<div class="legend-item"><div class="legend-color co-belligerent-allied-color"></div><span>Co-beligeranți (cu Aliații)</span></div>`;
        }
        allegianceHTML += `<div class="legend-item"><div class="legend-color axis-color"></div><span>Controlul Axei</span></div>`;
        if (control.co_aggressor && control.co_aggressor.length > 0) {
            allegianceHTML += `<div class="legend-item"><div class="legend-color co-aggressor-axis-color"></div><span>Co-agresori (cu Axa)</span></div>`;
        }
        allegianceHTML += `<div class="legend-item"><div class="legend-color occupied-color"></div><span>Ocupație de către Axă</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color neutral-color"></div><span>Zone Neutre</span></div></div>`;
    }

    state.dom.legendPanel.innerHTML = eventTypesHTML + allegianceHTML;
    state.dom.legendPanel.classList.remove('hidden');
}

/**
 * Updates the visual state of the timeline slider and its tooltip.
 * @param {string} periodIndex - The index of the current period.
 */
function updateSliderVisuals(periodIndex) {
    const slider = state.dom.timelineSlider;
    const tooltip = state.dom.sliderTooltip;
    
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const progressPercent = (val - min) / (max - min) * 100;
    slider.style.setProperty('--fill-percent', `${progressPercent}%`);
    
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
    const labels = labelsContainer.getElementsByTagName('span');
    const slider = state.dom.timelineSlider;
    if (!slider || !labelsContainer || labels.length === 0) return;

    const sliderWidth = slider.clientWidth;
    const thumbWidth = 25;
    const travelableWidth = sliderWidth - thumbWidth;
    const numSteps = labels.length - 1;

    for (let i = 0; i < labels.length; i++) {
        const progress = i / numSteps;
        const labelCenterPos = (progress * travelableWidth) + (thumbWidth / 2);
        labels[i].style.left = `${labelCenterPos}px`;
        labels[i].style.transform = 'translateX(-50%)';
    }
}

/**
 * Sets up the timeline slider with labels and event listeners.
 */
function renderFilterBar() {
    const labelsContainer = document.getElementById('slider-labels');
    state.dom.timelineSlider.max = config.periods.length - 1;
    labelsContainer.innerHTML = config.periods.map(p => `<span>${p === 'pre-war' ? 'Pre' : (p === 'post-war' ? 'Post' : p)}</span>`).join('');

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

// --- MODAL MANAGEMENT ---

/**
 * Shows the main event modal with details.
 * @param {object} event - The event object to display.
 */
function showModal(event) {
    state.currentEvent = event;
    state.dom.modal.querySelector('#modalImage').src = event.imageUrl;
    state.dom.modal.querySelector('#modalTitle').textContent = event.title;
    state.dom.modal.querySelector('#modalDescription').textContent = event.description;
    state.dom.modal.querySelector('#aiContent').classList.add('hidden');
    state.dom.modal.classList.remove('hidden');
}

function hideModal() {
    state.dom.modal.classList.add('hidden');
}

/**
 * Shows the context modal for pre-war or post-war periods.
 * @param {string} key - The period key ('pre-war' or 'post-war').
 */
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
