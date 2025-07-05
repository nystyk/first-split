// This file holds static configuration data for the application.

const config = {
    periods: ['pre-war', '1939', '1940', '1941', '1942', '1943', '1944', '1945', 'post-war'],
    map: {
        initialZoom: 2,
        initialCenter: [30, 35],
        flyToBounds: {
            duration: 1.8,
            // Zoom levels increased for a closer view
            maxZoomSmall: 6,
            maxZoomMedium: 5,
            maxZoomLarge: 4,
            // Padding reduced for a tighter fit
            paddingSmall: [250, 50],
            paddingLarge: [300, 100],
            paddingBottomSmall: [50, 100],
            paddingBottomLarge: [100, 150]
        },
        initialFitBounds: {
            // Padding reduced for a tighter initial fit
            paddingTopLeft: [250, 50],
            paddingBottomRight: [50, 100],
            maxZoom: 6
        }
    }
};
