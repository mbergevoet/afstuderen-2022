/*global ReadAlong */
window.addEventListener('load', function (e) {
    try {
        var args = {
            text_element: document.getElementById('sub-container'),
            audio_element: document.getElementById('audio-file')
        };

        // if (!args.audio_element.canPlayType) {
        //     // No error messaging is needed because error message appears in <audio> fallback
        //     throw new Error('HTML5 Audio not supported');
        // }
        // if (args.audio_element.networkState === args.audio_element.NETWORK_NO_SOURCE) {
        //     document.querySelector('.passage-audio-unavailable').hidden = false;
        //     throw new Error('Cannot play any of the available sources');
        // }

        ReadAlong.init(args);
    }
    catch (err) {
        console.error(err);
    }
    document.body.classList.add('initialized');
}, false);

setTimeout(() => {
    const hotspotContainer = document.querySelector("#panorama > .pnlm-render-container");
    // const switchSceneTwo = hotspotContainer.getElementsByTagName("div")[2];
    const switchSceneTwoHotspots = hotspotContainer.querySelectorAll(".scene-hotspot");
    // console.log(switchSceneTwoHotspots)
    const subContainer = document.getElementById('sub-container');

    switchSceneTwoHotspots.forEach(sceneSwitch => {
        sceneSwitch.addEventListener('click', () => {
            subContainer.classList.remove('speaking');
            try {
                var args = {
                    text_element: document.getElementById('sub-container-two'),
                    audio_element: document.getElementById('audio-file')
                };
                ReadAlong.init(args);
            }
            catch (err) {
                console.error(err);
            }
            document.body.classList.add('reloaded');
        }, false);

        sceneSwitch.addEventListener('click', () => {
            setTimeout(() => {
                const hotspotContainer = document.querySelector("#panorama > .pnlm-render-container");
                const switchSceneThree = hotspotContainer.querySelector(".scene-hotspot");
                const subContainerTwo = document.getElementById('sub-container-two');

                switchSceneThree.addEventListener('click', () => {
                    subContainerTwo.classList.remove('speaking');
                    try {
                        var args = {
                            text_element: document.getElementById('sub-container-three'),
                            audio_element: document.getElementById('audio-file')
                        };

                        if (!args.audio_element.canPlayType) {
                            // No error messaging is needed because error message appears in <audio> fallback
                            throw new Error('HTML5 Audio not supported');
                        }
                        if (args.audio_element.networkState === args.audio_element.NETWORK_NO_SOURCE) {
                            document.querySelector('.passage-audio-unavailable').hidden = false;
                            throw new Error('Cannot play any of the available sources');
                        }

                        ReadAlong.init(args);
                    }
                    catch (err) {
                        console.error(err);
                    }
                    document.body.classList.add('reloaded');
                })
            }, 200);
        });
    });

}, 200);
