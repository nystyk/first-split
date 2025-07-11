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
    
    // --- MODIFICATION: Use a class to animate out all dots ---
    const existingDots = state.dom.dotsContainer.querySelectorAll('.event-element');
    existingDots.forEach(dot => {
        dot.classList.add('hiding');
        // Remove after animation. The duration should match the CSS animation.
        dot.addEventListener('transitionend', () => dot.remove(), { once: true });
    });
    
    // A fallback to clear any stragglers after the transition.
    setTimeout(() => {
        if (state.dom.dotsContainer.children.length > 0) {
           // state.dom.dotsContainer.innerHTML = '';
        }
    }, 500); // Should be slightly longer than the transition duration
    
    renderLegend(selectedPeriod);
    showContextModal(selectedPeriod);

    const targetBounds = getBounds(events);

    const { flyToBounds: flyConfig } = config.map;
    let maxZoom = events.length <= 3 ? flyConfig.maxZoomSmall : (events.length > 10 ? flyConfig.maxZoomLarge : flyConfig.maxZoomMedium);
    let paddingTopLeft = events.length > 10 ? flyConfig.paddingLarge : flyConfig.paddingSmall;
    let paddingBottomRight = events.length > 10 ? flyConfig.paddingBottomLarge : flyConfig.paddingBottomSmall;

    // 1. Actualizează culorile hărții.
    updateMapColors(selectedPeriod, oldPeriod);

    // 2. MODIFICARE CHEIE: Folosim o tehnică de dublă animație pentru a forța
    // browserul să randeze noile culori ÎNAINTE de a porni animația de zbor.
    // Acest lucru garantează că stratul colorat este vizibil pe parcursul mișcării.
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            // 3. Pornește animația de zbor.
            state.map.flyToBounds(targetBounds, {
                paddingTopLeft,
                paddingBottomRight,
                maxZoom,
                duration: flyConfig.duration
            });
        });
    });

    // După terminarea animației, randăm evenimentele (punctele).
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

    // Attach global event listeners
    state.dom.closeModalBtn.addEventListener('click', hideModal);
    state.dom.contextModal.addEventListener('click', (e) => (e.target === state.dom.contextModal) && hideContextModal());
    state.dom.closeContextModal.addEventListener('click', hideContextModal);
    window.addEventListener('resize', positionSliderLabels);

    // Start the application
    initializeMap();

    // --- FIX: Hide dots during map movement ---
    if (state.map) {
        state.map.on('movestart', () => {
            state.dom.dotsContainer.classList.add('map-is-moving');
        });
        state.map.on('moveend', () => {
            state.dom.dotsContainer.classList.remove('map-is-moving');
        });
    }

    renderFilterBar();
    setTimeout(() => {
        positionSliderLabels();
        updateSliderVisuals(state.dom.timelineSlider.value);
    }, 100);

    // --- INTRO OVERLAY LOGIC ---
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
                        if (activePeriod === 'pre-war') {
                            showContextModal('pre-war');
                        }
                        unlockInteractions();
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
