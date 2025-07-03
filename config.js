// This file holds static configuration data for the application.

const config = {
    periods: ['pre-war', '1939', '1940', '1941', '1942', '1943', '1944', '1945', 'post-war'],
    map: {
        initialZoom: 2,
        initialCenter: [30, 35],
        flyToBounds: {
            duration: 1.8,
            maxZoomSmall: 5,
            maxZoomMedium: 4,
            maxZoomLarge: 3,
            paddingSmall: [340, 100],
            paddingLarge: [400, 150],
            paddingBottomSmall: [50, 150],
            paddingBottomLarge: [100, 200]
        },
        initialFitBounds: {
            paddingTopLeft: [340, 100],
            paddingBottomRight: [50, 150],
            maxZoom: 6
        }
    }
};
