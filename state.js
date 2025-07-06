// This file manages the application's dynamic state and holds cached DOM elements.

const state = {
    // Dynamic state variables
    map: null,
    currentEvent: null,
    geoJsonLayer: null,
    currentPeriod: 'pre-war',
    eventFilters: {
        major: true,
        minor: true,
        atrocity: true
    },
    // NEW: Filters for thematic overlays
    overlayFilters: {
        atlanticWall: true
    },
    // NEW: To hold references to the active overlay layers
    thematicLayers: {},
    // NEW: To hold references to event markers
    eventMarkers: [],

    // Cached DOM elements
    dom: {
        mapEl: null,
        dotsContainer: null,
        labelsContainer: null,
        lineCanvas: null,
        hoverBoxContainer: null,
        hoverLineCanvas: null,
        modal: null,
        closeModalBtn: null,
        contextModal: null,
        closeContextModal: null,
        legendPanel: null,
        timelineSlider: null,
        sliderTooltip: null
    }
};
