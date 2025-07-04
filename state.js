// This file manages the application's dynamic state and holds cached DOM elements.

const state = {
    // Dynamic state variables
    map: null,
    currentEvent: null,
    geoJsonLayer: null,
    currentPeriod: 'pre-war',
    // NEW: Filters for event visibility
    eventFilters: {
        major: true,
        minor: true,
        atrocity: true
    },

    // Cached DOM elements
    dom: {
        mapEl: null,
        dotsContainer: null,
        labelsContainer: null,
        lineCanvas: null,
        modal: null,
        closeModalBtn: null,
        contextModal: null,
        closeContextModal: null,
        legendPanel: null,
        timelineSlider: null,
        sliderTooltip: null
    }
};
