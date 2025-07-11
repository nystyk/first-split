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
    
    // Animate out all existing dots
    const existingDots = state.dom.dotsContainer.querySelectorAll('.event-element');
    existingDots.forEach(dot => {
        dot.classList.remove('visible'); // Start animation
        // Remove from DOM after animation finishes
        dot.addEventListener('transitionend', () => dot.remove(), { once: true });
    });
    
    renderLegend(selectedPeriod);
    showContextModal(selectedPeriod);

    const targetBounds = getBounds(events);

    const { flyToBounds: flyConfig } = config.map;
    
    // --- MODIFICATION: Adjust maxZoom for specific years ---
    let maxZoom;
    if (selectedPeriod === '1944') {
        maxZoom = 3; // Set an even more zoomed-out view for 1944
    } else if (selectedPeriod === '1942' || selectedPeriod === '1943') {
        maxZoom = 4; // Set a more zoomed-out view for these years
    } else {
        // Use the default logic for all other years
        maxZoom = events.length <= 3 ? flyConfig.maxZoomSmall : (events.length > 10 ? flyConfig.maxZoomLarge : flyConfig.maxZoomMedium);
    }
    // --- END MODIFICATION ---

    let paddingTopLeft = events.length > 10 ? flyConfig.paddingLarge : flyConfig.paddingSmall;
    let paddingBottomRight = events.length > 10 ? flyConfig.paddingBottomLarge : flyConfig.paddingBottomSmall;

    updateMapColors(selectedPeriod);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            state.map.flyToBounds(targetBounds, {
                paddingTopLeft,
                paddingBottomRight,
                maxZoom,
                duration: flyConfig.duration
            });
        });
    });

    state.map.once('moveend', () => {
        setTimeout(() => {
            renderMapEvents(selectedPeriod);
        }, 100);
    });
}


/**
 * Handles the initial loading sequence of the application.
 */
function initialLoad() {
    const activePeriod = config.periods[state.dom.timelineSlider.value];
    state.currentPeriod = activePeriod;
    state.map.setView(config.map.initialCenter, config.map.initialZoom, { animate: false });
    updateMapColors(activePeriod);
    renderLegend(activePeriod);
    showContextModal(activePeriod);
    updateSliderVisuals(state.dom.timelineSlider.value);
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
}
window.lockInteractions = lockInteractions;
window.unlockInteractions = unlockInteractions;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
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

    lockInteractions();

    state.dom.closeModalBtn.addEventListener('click', hideModal);
    state.dom.contextModal.addEventListener('click', (e) => (e.target === state.dom.contextModal) && hideContextModal());
    state.dom.closeContextModal.addEventListener('click', hideContextModal);
    window.addEventListener('resize', positionSliderLabels);

    initializeMap();

    state.map.on('movestart', () => {
        state.dom.dotsContainer.classList.add('map-is-moving');
    });
    state.map.on('moveend', () => {
        state.dom.dotsContainer.classList.remove('map-is-moving');
    });

    renderFilterBar();
    setTimeout(() => {
        positionSliderLabels();
        updateSliderVisuals(state.dom.timelineSlider.value);
    }, 100);

    const introOverlay = document.getElementById('intro-overlay');
    const introStartBtn = document.getElementById('intro-start-btn');
    introOverlay.style.display = 'flex';

    function setIntroBtnEnabled(enabled) {
        if (introStartBtn) {
            introStartBtn.disabled = !enabled;
            introStartBtn.style.opacity = enabled ? '1' : '0.5';
            introStartBtn.style.cursor = enabled ? 'pointer' : 'not-allowed';
        }
    }
    setIntroBtnEnabled(false);

    function checkMapReadyAndEnableBtn() {
        if (state.map && state.geoJsonLayer) {
            setIntroBtnEnabled(true);
        } else {
            setTimeout(checkMapReadyAndEnableBtn, 100);
        }
    }
    checkMapReadyAndEnableBtn();

    if (introStartBtn) {
        introStartBtn.addEventListener('click', () => {
            if (!state.map || !state.geoJsonLayer) {
                return;
            }
            document.getElementById('app-header').classList.add('morph');
            introOverlay.classList.add('hidden');
            setTimeout(() => {
                try {
                    const activePeriod = config.periods[state.dom.timelineSlider.value];
                    const events = allEventsData[activePeriod] || [];
                    const targetBounds = getBounds(events);
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
                        showContextModal(activePeriod);
                        renderMapEvents(activePeriod);
                        unlockInteractions();
                        state.introFinished = true;
                    });
                } catch (err) {
                    console.error('Error during intro animation:', err);
                }
            }, 700);
        });
    }
});

// Export functions globally
window.handlePeriodChange = handlePeriodChange;
