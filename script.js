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
    
    // MODIFICARE: Logica pentru stratul temporar ('aestheticTileLayer') a fost eliminată.
    // Acum, actualizăm culorile direct pe stratul GeoJSON permanent.
    updateMapColors(selectedPeriod, oldPeriod);
    
    // Animația va rula acum peste harta deja colorată corect.
    state.map.flyToBounds(targetBounds, {
        paddingTopLeft,
        paddingBottomRight,
        maxZoom,
        duration: flyConfig.duration
    });

    // După terminarea animației, randăm evenimentele (punctele).
    state.map.once('moveend', () => {
        setTimeout(() => {
            renderMapEvents(selectedPeriod);
        }, 100); // Delay redus pentru o apariție mai rapidă
    });
}


/**
 * Handles the initial loading sequence of the application.
 */
function initialLoad() {
    const activePeriod = config.periods[state.dom.timelineSlider.value];
    state.currentPeriod = activePeriod;
    const events = allEventsData[activePeriod] || [];
    // Set a wide initial view (no fitBounds)
    state.map.setView(config.map.initialCenter, config.map.initialZoom, { animate: false });
    updateMapColors(activePeriod, null);
    renderLegend(activePeriod);
    if (activePeriod !== 'pre-war') {
        showContextModal(activePeriod);
    } else {
        state.dom.contextModal.classList.add('hidden');
    }
    updateSliderVisuals(state.dom.timelineSlider.value);
    state.map.whenReady(() => {
        renderMapEvents(activePeriod);
    });
}

// --- INTERACTION LOCKING ---
function lockInteractions() {
    if (state.dom && state.dom.timelineSlider) {
        state.dom.timelineSlider.disabled = true;
        state.dom.timelineSlider.style.opacity = 0.5;
    }
    if (state.map) {
        state.map.scrollWheelZoom.disable();
        state.map.doubleClickZoom.disable();
        state.map.touchZoom.disable();
        state.map.dragging.disable();
        state.map.keyboard.disable();
    }
}
function unlockInteractions() {
    if (state.dom && state.dom.timelineSlider) {
        state.dom.timelineSlider.disabled = false;
        state.dom.timelineSlider.style.opacity = '';
    }
    // Do NOT enable map interactions (keep map static)
}
window.lockInteractions = lockInteractions;
window.unlockInteractions = unlockInteractions;

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

    // Disable interactions until intro animation is finished
    lockInteractions();

    // Show overlays and context box immediately (they are loaded in initialLoad)

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

    // --- INTRO OVERLAY LOGIC ---
    const introOverlay = document.getElementById('intro-overlay');
    const introStartBtn = document.getElementById('intro-start-btn');
    introOverlay.style.display = 'flex';

    // Helper: enable/disable button
    function setIntroBtnEnabled(enabled) {
        if (introStartBtn) {
            introStartBtn.disabled = !enabled;
            introStartBtn.style.opacity = enabled ? '1' : '0.5';
            introStartBtn.style.cursor = enabled ? 'pointer' : 'not-allowed';
            console.log('Intro button enabled:', enabled);
        }
    }
    setIntroBtnEnabled(false);

    // Wait for map and overlays to be ready
    function checkMapReadyAndEnableBtn() {
        console.log('Checking map ready:', state.map, state.geoJsonLayer);
        if (state.map && state.geoJsonLayer) {
            setIntroBtnEnabled(true);
        } else {
            setTimeout(checkMapReadyAndEnableBtn, 100);
        }
    }
    checkMapReadyAndEnableBtn();

    if (introStartBtn) {
        introStartBtn.addEventListener('click', () => {
            console.log('Intro button clicked');
            if (!state.map || !state.geoJsonLayer) {
                console.error('Map or geoJsonLayer not ready', state.map, state.geoJsonLayer);
                return;
            }
            // Morph the main title
            document.getElementById('app-header').classList.add('morph');
            // Fade out the overlay
            introOverlay.classList.add('hidden');
            // After fade, trigger zoom-in animation
            setTimeout(() => {
                try {
                    // Clean zoom-in to current period
                    const activePeriod = config.periods[state.dom.timelineSlider.value];
                    const events = allEventsData[activePeriod] || [];
                    console.log('Zooming to period:', activePeriod, events);
                    const targetBounds = getBounds(events);
                    console.log('Target bounds:', targetBounds);
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
                    // Show context box for pre-war after animation
                    if (activePeriod === 'pre-war') {
                        state.map.once('moveend', () => {
                            showContextModal('pre-war');
                            unlockInteractions();
                        });
                    } else {
                        state.map.once('moveend', () => {
                            unlockInteractions();
                        });
                    }
                } catch (err) {
                    console.error('Error during intro animation:', err);
                }
            }, 700); // match overlay fade duration
        });
    }
});

// Export functions globally
window.handlePeriodChange = handlePeriodChange;
