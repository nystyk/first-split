// This file holds static configuration data for the application.

const config = {
    periods: ['pre-war', '1939', '1940', '1941', '1942', '1943', '1944', '1945', 'post-war'],
    map: {
        initialZoom: 2,
        initialCenter: [30, 35],
        flyToBounds: {
            duration: 1.8,
            maxZoomSmall: 7,
            maxZoomMedium: 6,
            maxZoomLarge: 5,
            paddingSmall: [80, 30],
            paddingLarge: [120, 50],
            paddingBottomSmall: [30, 50],
            paddingBottomLarge: [60, 80]
        },
        initialFitBounds: {
            paddingTopLeft: [80, 30],
            paddingBottomRight: [30, 50],
            maxZoom: 7
        }
    }
};
