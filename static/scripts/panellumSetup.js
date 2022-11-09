// pannellum.viewer('panorama', {
//     "type": "equirectangular",
//     "panorama": "../images/360-Forest.jpeg",
//     "pitch": -3.515632092002984,
//     "yaw": -176.67778682085876,
//     "autoLoad": true,
//     "showZoomCtrl": false,
//     "showFullscreenCtrl": false,
//     "compass": false,
//     "mouseZoom": false,
//     // "hotSpotDebug": true,
//     "hotSpots": [
//         {
//             "pitch": 3.3428100372831215,
//             "yaw": 188.39398778576194,
//             "type": "info",
//             "text": "Romeinse trappen"
//         },
//         {
//             "pitch": -10.917758947711812,
//             "yaw": 10.294179222633307,
//             "type": "info",
//             "text": "Paadje"
//         },
//     ]
// });

pannellum.viewer('panorama', {
    "default": {
        "autoLoad": true,
        "showZoomCtrl": false,
        "showFullscreenCtrl": false,
        "compass": false,
        "mouseZoom": false,
        // "hotSpotDebug": true,
        "firstScene": "riverbank",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "riverbank": {
            "title": "",
            "pitch": 0.4,
            "yaw": -336.9,
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
                    "pitch": -1.3,
                    "yaw": -101.3,
                    "cssClass": "scene-hotspot",
                    "sceneId": "river"
                },
            ]
        },

        "river": {
            "title": "",
            "hfov": 110,
            "pitch": -8.713732599745299,
            "yaw": -0.16928288008426784,
            "type": "equirectangular",
            "panorama": "../images/360-River-Two.jpg",
            "hotSpots": [
                {
                    "pitch": -8.713732599745299,
                    "yaw": -0.16928288008426784,
                    "type": "info",
                    "text": "Metalen Brug"
                },

            ]
        },

        "rivertwo": {
            "title": "",
            "hfov": 110,
            "pitch": -8.713732599745299,
            "yaw": -0.16928288008426784,
            "type": "equirectangular",
            "panorama": "../images/360-River-Three.jpg",
            "hotSpots": [
                {
                    "pitch": -8.713732599745299,
                    "yaw": -0.16928288008426784,
                    "type": "info",
                    "text": "Iets"
                },

            ]
        }
    }
});

