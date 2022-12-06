pannellum.viewer('panorama', {
    "default": {
        "autoLoad": true,
        "showZoomCtrl": false,
        "showFullscreenCtrl": false,
        "compass": false,
        "mouseZoom": false,
        // "autoRotate": 5,
        // "autoRotateInactivityDelay": 10000,
        // "hotSpotDebug": true,
        "minPitch": -90,
        "maxPitch": 90,
        "firstScene": "riverbank",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "riverbank": {
            "title": "",
            "pitch": -0.3,
            "yaw": -252.1,
            "hfov": 110,
            "type": "equirectangular",
            "panorama": "../images/360-River-Four.jpg",
            "hotSpots": [
                {
                    "pitch": -15.4,
                    "yaw": -148.1,
                    "cssClass": "info-hotspot"
                },
                {
                    "pitch": -28.62,
                    "yaw": -317.8,
                    "cssClass": "info-hotspot"
                },
                {
                    "pitch": -0.1,
                    "yaw": -206.1,
                    "cssClass": "scene-hotspot",
                    "sceneId": "river"
                },
                {
                    "pitch": -0.01,
                    "yaw": -341.8,
                    "cssClass": "scene-hotspot",
                    "sceneId": "river"
                }
            ]
        },

        "river": {
            "title": "",
            "hfov": 110,
            "pitch": -8.7,
            "yaw": -0.1,
            "type": "equirectangular",
            "panorama": "../images/360-River-Three.jpg",
            "hotSpots": [
                {
                    "pitch": -6.3,
                    "yaw": -68.4,
                    "type": "info",
                    "cssClass": "info-hotspot"
                },
                {
                    "pitch": 1.8,
                    "yaw": 177.7,
                    "type": "info",
                    "cssClass": "info-hotspot"
                },
                {
                    "pitch": -0.01,
                    "yaw": -341.8,
                    "cssClass": "scene-hotspot",
                    "sceneId": "field"
                }
            ]
        },

        "field": {
            "title": "",
            "hfov": 110,
            "pitch": -8.7,
            "yaw": -0.1,
            "type": "equirectangular",
            "panorama": "../images/360-Field.jpg",
            "hotSpots": [
                {
                    "pitch": -8.7,
                    "yaw": -0.1,
                    "type": "info",
                    "cssClass": "info-hotspot"
                },
                {
                    "pitch": 1.2,
                    "yaw": -254.9,
                    "type": "info",
                    "cssClass": "info-hotspot"
                },
            ]
        }
    }
});

