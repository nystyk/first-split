// This file contains data for thematic map overlays, such as front lines, supply routes, etc.

const thematicData = {
    // The Atlantic Wall was a series of coastal fortifications built by Nazi Germany.
    // This polyline represents its general extent along the coast of Western Europe.
    atlanticWall: {
        label: 'Zidul Atlanticului',
        type: 'polyline',
        // NEW: Specifies which years this overlay is relevant for.
        relevantYears: ['1942', '1943', '1944'],
        // Coordinates from northern Norway, down the coast of Denmark, Netherlands, Belgium, and France to the Spanish border.
        coords: [
            [70.6, 23.9], [68.0, 13.5], [63.4, 8.5], [62.2, 5.5], [57.7, 8.3],
            [55.5, 8.4], [53.5, 6.0], [52.3, 4.5], [51.3, 2.9], [49.9, -1.9],
            [48.5, -4.5], [47.2, -2.2], [45.7, -1.2], [43.5, -1.5]
        ],
        style: {
            className: 'thematic-line atlantic-wall'
        }
    }
    // Future overlays like "Eastern Front" or "Allied Supply Routes" can be added here.
};
