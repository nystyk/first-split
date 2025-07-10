// This file contains data for thematic map overlays, such as front lines, supply routes, and occupation zones.

const thematicData = {
    // --- Original Defensive Lines (Fact-Checked and Confirmed) ---
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
        relevantYears: ['1943', '1944'],
        coords: [
             [41.28, 13.5], [41.49, 13.81], [41.5, 14.5]
        ],
        style: {
            className: 'thematic-line gustav-line'
        }
    },
    gothicLine: {
        label: 'Linia Gotică',
        type: 'polyline',
        relevantYears: ['1944', '1945'],
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
        coords: [
            [60.7, 30.2], [60.2, 30.5],
            [57.8, 28.3], [57.0, 28.5],
            [54.0, 27.0], [53.5, 27.5],
            [50.8, 30.0], [50.4, 30.5], [50.0, 30.6]
        ],
        style: {
            className: 'thematic-line stalin-line'
        }
    },
    molotovLine: {
        label: 'Linia Molotov',
        type: 'polyline',
        relevantYears: ['1940', '1941'],
        coords: [
            [55.9, 21.1], [55.0, 22.5], [54.0, 23.0], [52.5, 23.2], [50.8, 23.9], [49.5, 22.8]
        ],
        style: {
            className: 'thematic-line molotov-line'
        },
        description: 'A line of Soviet fortifications built in 1940-1941 along the new western border after the annexation of the Baltic states and eastern Poland. It was largely unfinished when Germany invaded.'
    },
    pantherWotanLine: {
        label: 'Linia Panther-Wotan (Ostwall)',
        type: 'polyline',
        relevantYears: ['1943', '1944'],
        coords: [
            [59.4, 28.0], [57.8, 28.3], [56.5, 28.5], [55.0, 29.0], [52.4, 30.9], [50.0, 31.5], [46.8, 32.5]
        ],
        style: {
            className: 'thematic-line panther-wotan-line'
        },
        description: 'A major German defensive line on the Eastern Front, stretching from the Baltic Sea to the Black Sea along the Dnieper River. It was mostly overrun by the Red Army in late 1943 and 1944.'
    }
};
