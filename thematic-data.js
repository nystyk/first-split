// This file contains data for thematic map overlays, such as front lines, supply routes, etc.

const thematicData = {
    maginotLine: {
        label: 'Linia Maginot',
        type: 'polyline',
        relevantYears: ['1939', '1940'],
        coords: [
            [49.0, 7.8], [49.2, 7.5], [49.4, 6.3], [49.45, 6.0]
        ],
        style: {
            className: 'thematic-line maginot-line'
        }
    },
    siegfriedLine: {
        label: 'Linia Siegfried (Westwall)',
        type: 'polyline',
        relevantYears: ['1939', '1940', '1944', '1945'],
        coords: [
            [50.7, 6.2], [50.2, 6.3], [49.7, 6.5], [49.2, 7.6], [48.9, 7.5]
        ],
        style: {
            className: 'thematic-line siegfried-line'
        }
    },
    gustavLine: {
        label: 'Linia Gustav',
        type: 'polyline',
        relevantYears: ['1943', '1944', '1945'],
        coords: [
            [41.3, 13.6], [41.4, 13.8], [41.45, 14.2], [41.5, 14.5]
        ],
        style: {
            className: 'thematic-line gustav-line'
        }
    },
    gothicLine: {
        label: 'Linia Gotică',
        type: 'polyline',
        relevantYears: ['1944', '1945'],
        // Coordinates across northern Italy, from near La Spezia to Rimini
        coords: [
            [44.08, 9.95], [44.15, 10.5], [44.0, 11.5], [43.9, 12.0], [44.05, 12.6]
        ],
        style: {
            className: 'thematic-line gothic-line'
        }
    },
    atlanticWall: {
        label: 'Zidul Atlanticului',
        type: 'polyline',
        relevantYears: ['1942', '1943', '1944'],
        coords: [
            [70.6, 23.9], [68.0, 13.5], [63.4, 8.5], [62.2, 5.5], [57.7, 8.3],
            [55.5, 8.4], [53.5, 6.0], [52.3, 4.5], [51.3, 2.9], [49.9, -1.9],
            [48.5, -4.5], [47.2, -2.2], [45.7, -1.2], [43.5, -1.5]
        ],
        style: {
            className: 'thematic-line atlantic-wall'
        }
    },
    mannerheimLine: {
        label: 'Linia Mannerheim',
        type: 'polyline',
        relevantYears: ['1939', '1940'],
        // Coordinates across the Karelian Isthmus
        coords: [
            [60.5, 28.5], [60.6, 29.0], [60.4, 29.5], [60.2, 30.0]
        ],
        style: {
            className: 'thematic-line mannerheim-line'
        }
    },
    stalinLine: {
        label: 'Linia Stalin',
        type: 'polyline',
        relevantYears: ['1941'],
        // Coordinates along the pre-1939 western border of the USSR
        coords: [
            // Karelian segment
            [60.7, 30.2], [60.2, 30.5],
            // Pskov segment
            [57.8, 28.3], [57.0, 28.5],
            // Minsk segment
            [54.0, 27.0], [53.5, 27.5],
            // Kiev segment
            [50.8, 30.0], [50.4, 30.5], [50.0, 30.6]
        ],
        style: {
            className: 'thematic-line stalin-line'
        }
    }
};
