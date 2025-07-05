// This file acts as the main controller, initializing the app and handling core logic.

// --- MAIN LOGIC ---

/**
 * Handles the logic for changing the timeline period.
 * @param {string} selectedPeriod - The new period to display (e.g., '1941').
 */
function handlePeriodChange(selectedPeriod) {
    if (selectedPeriod === state.currentPeriod) return;

    const oldPeriod = state.currentPeriod;
    state.currentPeriod = selectedPeriod;
    const events = allEventsData[selectedPeriod] || [];

    // Clear old elements and render new UI state
    state.dom.dotsContainer.innerHTML = '';
    state.dom.labelsContainer.innerHTML = '';
    state.dom.lineCanvas.innerHTML = '';
    renderLegend(selectedPeriod);
    showContextModal(selectedPeriod);

    const targetBounds = getBounds(events);

    // Animate map transition
    state.dom.mapEl.classList.add('is-transitioning');
    updateMapColors(selectedPeriod, oldPeriod);

    const { flyToBounds: flyConfig } = config.map;
    let maxZoom = events.length <= 3 ? flyConfig.maxZoomSmall : (events.length > 10 ? flyConfig.maxZoomLarge : flyConfig.maxZoomMedium);
    let paddingTopLeft = events.length > 10 ? flyConfig.paddingLarge : flyConfig.paddingSmall;
    let paddingBottomRight = events.length > 10 ? flyConfig.paddingBottomLarge : flyConfig.paddingBottomSmall;

    state.map.flyToBounds(targetBounds, {
        paddingTopLeft,
        paddingBottomRight,
        maxZoom,
        duration: flyConfig.duration
    });

    state.map.once('moveend', () => {
        state.dom.mapEl.classList.remove('is-transitioning');
        setTimeout(() => renderMapEvents(selectedPeriod), 50);
    });
}

/**
 * Handles the initial loading sequence of the application.
 */
function initialLoad() {
    const activePeriod = config.periods[state.dom.timelineSlider.value];
    state.currentPeriod = activePeriod;
    const events = allEventsData[activePeriod] || [];
    
    const initialBounds = getBounds(events);
    state.map.fitBounds(initialBounds, config.map.initialFitBounds);

    updateMapColors(activePeriod, null);
    renderLegend(activePeriod);
    showContextModal(activePeriod);
    updateSliderVisuals(state.dom.timelineSlider.value);
    
    // Correctly reference state.map
    state.map.whenReady(() => {
        renderMapEvents(activePeriod);
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements into the state object
    state.dom.mapEl = document.getElementById('map');
    state.dom.dotsContainer = document.getElementById('dots-container');
    state.dom.labelsContainer = document.getElementById('labels-container');
    state.dom.lineCanvas = document.getElementById('line-canvas');
    state.dom.modal = document.getElementById('modal');
    state.dom.closeModalBtn = document.getElementById('closeModal');
    state.dom.contextModal = document.getElementById('contextModal');
    state.dom.closeContextModal = document.getElementById('closeContextModal');
    state.dom.legendPanel = document.getElementById('legend-panel');
    state.dom.timelineSlider = document.getElementById('timeline-slider');
    state.dom.sliderTooltip = document.getElementById('slider-tooltip');

    // Attach global event listeners
    state.dom.closeModalBtn.addEventListener('click', hideModal);
    state.dom.contextModal.addEventListener('click', (e) => (e.target === state.dom.contextModal) && hideContextModal());
    state.dom.closeContextModal.addEventListener('click', hideContextModal);
    window.addEventListener('resize', positionSliderLabels);

    // Start the application
    initializeMap();
    renderFilterBar();
    
    setTimeout(() => {
        positionSliderLabels();
        updateSliderVisuals(state.dom.timelineSlider.value);
    }, 100);
});

// Export functions globally for story mode functionality
window.handlePeriodChange = handlePeriodChange;
