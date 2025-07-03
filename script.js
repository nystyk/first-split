// --- GLOBAL VARIABLES ---
let map;
let currentEvent = null;
let geoJsonLayer = null;
let currentPeriod = 'pre-war';
const periods = ['pre-war', '1939', '1940', '1941', '1942', '1943', '1944', '1945', 'post-war'];

// --- DOM ELEMENT VARIABLES ---
let mapEl, dotsContainer, labelsContainer, lineCanvas, modal, closeModalBtn, contextModal, closeContextModal, legendPanel, timelineSlider, sliderTooltip;

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM SELECTION ---
    mapEl = document.getElementById('map');
    dotsContainer = document.getElementById('dots-container');
    labelsContainer = document.getElementById('labels-container');
    lineCanvas = document.getElementById('line-canvas');
    modal = document.getElementById('modal');
    closeModalBtn = document.getElementById('closeModal');
    contextModal = document.getElementById('contextModal');
    closeContextModal = document.getElementById('closeContextModal');
    legendPanel = document.getElementById('legend-panel');
    timelineSlider = document.getElementById('timeline-slider');
    sliderTooltip = document.getElementById('slider-tooltip');

    // --- EVENT LISTENERS ---
    closeModalBtn.addEventListener('click', hideModal);
    contextModal.addEventListener('click', (e) => (e.target === contextModal) && hideContextModal());
    closeContextModal.addEventListener('click', hideContextModal);
    window.addEventListener('resize', positionSliderLabels);

    // --- APP ENTRY POINT ---
    initializeMap();
    renderFilterBar();
    
    setTimeout(() => {
        positionSliderLabels();
        updateSliderVisuals(timelineSlider.value);
    }, 100);
});
