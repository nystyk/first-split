// This file acts as the main controller, initializing the app and handling core logic.

// --- MAIN LOGIC ---

/**
 * Handles the logic for changing the timeline period.
 * @param {string} selectedPeriod - The new period to display (e.g., '1941').
 * @param {boolean} force - Whether to force the animation even if the period hasn't changed.
 */
function handlePeriodChange(selectedPeriod, force) {
    if (!force && selectedPeriod === state.currentPeriod) return;

    const oldPeriod = state.currentPeriod;
    state.currentPeriod = selectedPeriod;
    const events = allEventsData[selectedPeriod] || [];

    // Clear old elements and render new UI state
    state.dom.labelsContainer.innerHTML = '';
    state.dom.lineCanvas.innerHTML = '';
    
    // Hide all existing dots before starting animation
    const existingDots = state.dom.dotsContainer.querySelectorAll('.event-element');
    existingDots.forEach(dot => {
        dot.classList.add('hiding');
        dot.addEventListener('transitionend', () => dot.remove(), { once: true });
    });
    
    // Clear dots container after a short delay to ensure smooth transition
    setTimeout(() => {
        state.dom.dotsContainer.innerHTML = '';
    }, 250);
    
    renderLegend(selectedPeriod);
    showContextModal(selectedPeriod);

    const targetBounds = getBounds(events);

    const { flyToBounds: flyConfig } = config.map;
    let maxZoom = events.length <= 3 ? flyConfig.maxZoomSmall : (events.length > 10 ? flyConfig.maxZoomLarge : flyConfig.maxZoomMedium);
    let paddingTopLeft = events.length > 10 ? flyConfig.paddingLarge : flyConfig.paddingSmall;
    let paddingBottomRight = events.length > 10 ? flyConfig.paddingBottomLarge : flyConfig.paddingBottomSmall;

    // Calculate target zoom level
    const targetZoom = Math.min(maxZoom, state.map.getBoundsZoom(targetBounds, false, paddingTopLeft, paddingBottomRight));
    
    // Add aesthetic tile layer that matches the current style
    const aestheticTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors, © CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    });
    
    // Add the tile layer to the map
    aestheticTileLayer.addTo(state.map);
    
    // Start the animation immediately
    updateMapColors(selectedPeriod, oldPeriod);
    
    state.map.flyToBounds(targetBounds, {
        paddingTopLeft,
        paddingBottomRight,
        maxZoom,
        duration: flyConfig.duration
    });

    // Wait for animation to complete and tiles to load
    state.map.once('moveend', () => {
        // Wait a bit more for tiles to fully load
        setTimeout(() => {
            // Remove the aesthetic tile layer once the main tiles are loaded
            aestheticTileLayer.remove();
            
            // Render events
            setTimeout(() => renderMapEvents(selectedPeriod), 100);
        }, 500);
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
    state.dom.hoverBoxContainer = document.getElementById('hover-box-container');
    state.dom.hoverLineCanvas = document.getElementById('hover-line-canvas');
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

// Export functions globally
window.handlePeriodChange = handlePeriodChange;
