const seekSlider = document.getElementById('seek-slider');
const toggleButton = document.getElementById('play-pause');
const audioTrackWrapper = document.querySelector('.audio-track');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const forwardIcon = document.querySelector('.go-forward-icon');
const backwardIcon = document.querySelector('.go-back-icon');
const audio = document.querySelector('audio');
const audioSource = document.querySelector('#audio-file source');
const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
const hamburgerOpen = document.querySelector('.hamburger-open');
const hamburgerClose = document.querySelector('.hamburger-close');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerBackground = document.querySelector('.hamburger-background');
const questionBackground = document.querySelector('.question-background');
const questionContainerOne = document.querySelector('.question-container-one');
const questionContainerTwo = document.querySelector('.question-container-two');
const questionContainerThree = document.querySelector('.question-container-three');
const questionContainerFour = document.querySelector('.question-container-four');
const questionContainerFive = document.querySelector('.question-container-five');
const questionContainerSix = document.querySelector('.question-container-six');
const questionContainerSeven = document.querySelector('.question-container-seven');
const questionContainerEight = document.querySelector('.question-container-eight');
const questionContainerNine = document.querySelector('.question-container-nine');

const closeInfo = document.querySelector(".close-info");
const infoTop = document.querySelector("info-top");

const optionsOne = document.querySelectorAll('.options-one');
const textAreaTwo = document.querySelector('#text-area-two');
const textAreaThree = document.querySelector('#text-area-three');
const optionsFour = document.querySelectorAll('.options-four');
const optionsFive = document.querySelectorAll('.options-five');
const textAreaSix = document.querySelector('#text-area-six');
const optionsSeven = document.querySelectorAll('.options-seven');
const textAreaEight = document.querySelector('#text-area-eight');
const optionsNine = document.querySelectorAll('.options-nine');

const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const btnThree = document.querySelector('.btn-three');
const btnFour = document.querySelector('.btn-four');
const btnFive = document.querySelector('.btn-five');
const btnSix = document.querySelector('.btn-six');
const btnSeven = document.querySelector('.btn-seven');
const btnEight = document.querySelector('.btn-eight');
const btnNine = document.querySelector('.btn-nine');

let questionOne = false;
let questionTwo = false;
let questionThree = false;
let questionFour = false;
let questionFive = false;
let questionSix = false;
let questionSeven = false;
let questionEight = false;
let questionNine = false;

let multipleChoiceOne = "wrong";
let multipleChoiceFour = "wrong";
let multipleChoiceFive = "wrong";
let multipleChoiceSeven = "wrong";
let multipleChoiceNine = "wrong";

const sceneCount = document.querySelector('.scene-count');
const sceneLocation = document.querySelector('.scene-location');
const sceneLocationName = document.querySelector('.scene-location-name');
const sceneLocationImage = document.querySelector('.scene-location-image');
let sceneNumber = 1;
let playState = 'play';

function playAudio() {
    audio.play();
    playIcon.classList.add("hide");
    pauseIcon.classList.remove("hide");
    playState = 'pause';
}

function pauseAudio() {
    audio.pause();
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
    playState = 'play';
}

// Audio track functionality
function showRangeProgress() {
    audioTrackWrapper.style.setProperty('--seek-before-width', seekSlider.value / seekSlider.max * 100 + '%');
    audio.currentTime = seekSlider.value;
}

function calculateTime(secs) {
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${minutes}:${returnedSeconds}`;
}

function displayDuration() {
    durationContainer.textContent = calculateTime(audio.duration);
}

function setSliderMax() {
    seekSlider.max = Math.floor(audio.duration);
}

function whilePlaying() {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    audioTrackWrapper.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
}

if (audio.readyState > 0) {
    displayDuration();
    setSliderMax();
} else {
    audio.addEventListener('loadedmetadata', () => {
        displayDuration();
        setSliderMax();
    });
}

function showQuestionsOne(stampOne, stampTwo, stampThree) {
    let flooredCurrentTime = Math.floor(audio.currentTime);

    if (flooredCurrentTime == stampOne && questionOne == false) {
        pauseAudio();
        questionOne = true;
        questionBackground.classList.add("visible");
        questionContainerOne.classList.add("visible");
    }
    if (flooredCurrentTime == stampTwo && questionTwo == false) {
        pauseAudio();
        questionTwo = true;
        questionBackground.classList.add("visible");
        questionContainerTwo.classList.add("visible");
    }
    if (flooredCurrentTime == stampThree && questionThree == false) {
        pauseAudio();
        questionThree = true;
        questionBackground.classList.add("visible");
        questionContainerThree.classList.add("visible");
    }
}

function showQuestionsTwo(stampOne, stampTwo, stampThree) {
    let flooredCurrentTime = Math.floor(audio.currentTime);

    if (flooredCurrentTime == stampOne && questionFour == false) {
        pauseAudio();
        questionFour = true;
        questionBackground.classList.add("visible");
        questionContainerFour.classList.add("visible");
    }
    if (flooredCurrentTime == stampTwo && questionFive == false) {
        pauseAudio();
        questionFive = true;
        questionBackground.classList.add("visible");
        questionContainerFive.classList.add("visible");
    }
    if (flooredCurrentTime == stampThree && questionSix == false) {
        pauseAudio();
        questionSix = true;
        questionBackground.classList.add("visible");
        questionContainerSix.classList.add("visible");
    }
}

function showQuestionsThree(stampOne, stampTwo, stampThree) {
    let flooredCurrentTime = Math.floor(audio.currentTime);

    if (flooredCurrentTime == stampOne && questionSeven == false) {
        pauseAudio();
        questionSeven = true;
        console.log(questionFour)
        questionBackground.classList.add("visible");
        questionContainerSeven.classList.add("visible");
    }
    if (flooredCurrentTime == stampTwo && questionEight == false) {
        pauseAudio();
        questionEight = true;
        questionBackground.classList.add("visible");
        questionContainerEight.classList.add("visible");
    }
    if (flooredCurrentTime == stampThree && questionNine == false) {
        pauseAudio();
        questionNine = true;
        questionBackground.classList.add("visible");
        questionContainerNine.classList.add("visible");
    }
}

audio.addEventListener('loadedmetadata', () => {
    displayDuration(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    whilePlaying();

    if (sceneNumber == 1) {
        showQuestionsOne(31, 58, 75);
    }

    if (sceneNumber == 2) {
        showQuestionsTwo(37, 52, 81);
    }

    if (sceneNumber == 3) {
        showQuestionsThree(23, 30, 42);
    }
});

audio.addEventListener('timeupdate', () => {
    let currentWord = document.querySelector("span.speaking");
    currentWord.scrollIntoView({ behavior: "smooth", block: "center" });
});

forwardIcon.addEventListener("click", () => {
    console.log("klik")
    audio.currentTime += 10.0;
});

backwardIcon.addEventListener("click", () => {
    console.log("klik")
    audio.currentTime -= 10.0;
});

toggleButton.addEventListener("click", () => {
    if (playState == 'play') {
        playAudio();
    } else {
        pauseAudio();
    }
});

seekSlider.addEventListener('input', () => {
    showRangeProgress();
});

sceneLocation.addEventListener('click', () => {
    sceneLocation.classList.toggle('slide-up');
});

hamburgerOpen.addEventListener('click', () => {
    hamburgerMenu.classList.add('open');
    hamburgerBackground.classList.add('visible');
});

hamburgerClose.addEventListener('click', () => {
    hamburgerMenu.classList.remove('open');
    hamburgerBackground.classList.remove('visible');
});

optionsOne.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.checked = true) {
            btnOne.removeAttribute('disabled');
        }
        optionsOne.forEach(answer => {
            answer.disabled = true;
        });
    });
});

textAreaTwo.addEventListener('keydown', () => {
    if (textAreaTwo.value.length == 10) {
        btnTwo.removeAttribute('disabled');
    }
});

textAreaThree.addEventListener('keydown', () => {
    if (textAreaThree.value.length == 10) {
        btnThree.removeAttribute('disabled');
    }
});

optionsFour.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.checked = true) {
            btnFour.removeAttribute('disabled');
        }
        optionsFour.forEach(answer => {
            answer.disabled = true;
        });
    });
});

optionsFive.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.checked = true) {
            btnFive.removeAttribute('disabled');
        }
        optionsFive.forEach(answer => {
            answer.disabled = true;
        });
    });
});

textAreaSix.addEventListener('keydown', () => {
    if (textAreaSix.value.length == 10) {
        btnSix.removeAttribute('disabled');
    }
});

optionsSeven.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.checked = true) {
            btnSeven.removeAttribute('disabled');
        }
        optionsSeven.forEach(answer => {
            answer.disabled = true;
        });
    });
});

textAreaEight.addEventListener('keydown', () => {
    if (textAreaEight.value.length == 10) {
        btnEight.removeAttribute('disabled');
    }
});

optionsNine.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.checked = true) {
            btnNine.removeAttribute('disabled');
        }
        optionsNine.forEach(answer => {
            answer.disabled = true;
        });
    });
});

btnOne.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerOne.classList.remove('visible');
    playAudio();
});

btnTwo.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerTwo.classList.remove('visible');
    playAudio();
});

btnThree.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerThree.classList.remove('visible');
    playAudio();
});

btnFour.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerFive.classList.remove('visible');
    playAudio();
});

btnFive.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerFive.classList.remove('visible');
    playAudio();
});

btnSix.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerSix.classList.remove('visible');
    playAudio();
});

btnSeven.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerSeven.classList.remove('visible');
    playAudio();
});

btnEight.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerEight.classList.remove('visible');
    playAudio();
});

btnNine.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerNine.classList.remove('visible');
});

optionsOne[0].addEventListener('click', () => {
    multipleChoiceOne = "correct";
    localStorage.setItem("answerOne", multipleChoiceOne);
    const correctAnswer = optionsOne[0].nextElementSibling;
    correctAnswer.classList.add('right');
});

optionsFour[3].addEventListener('click', () => {
    multipleChoiceFour = "correct";
    localStorage.setItem("answerFour", multipleChoiceFour);
    const correctAnswer = optionsFour[3].nextElementSibling;
    correctAnswer.classList.add('right');
});

optionsFive[1].addEventListener('click', () => {
    multipleChoiceFive = "correct";
    localStorage.setItem("answerFive", multipleChoiceFive);
    const correctAnswer = optionsFive[1].nextElementSibling;
    correctAnswer.classList.add('right');
});

optionsSeven[0].addEventListener('click', () => {
    multipleChoiceSeven = "correct";
    localStorage.setItem("answerSeven", multipleChoiceSeven);
    const correctAnswer = optionsSeven[0].nextElementSibling;
    correctAnswer.classList.add('right');
});

optionsNine[2].addEventListener('click', () => {
    multipleChoiceNine = "correct";
    localStorage.setItem("answerNine", multipleChoiceNine);
    const correctAnswer = optionsNine[2].nextElementSibling;
    correctAnswer.classList.add('right');
});

const sideBar = document.querySelector("aside");
const infoImage = document.querySelector("#info-container > img");
const infoHeading = document.querySelector("#info-container > h1");
const infoText = document.querySelector("#info-container > p");

const subtitleContainer = document.querySelector("#sub-container");
const subtitleContainerTwo = document.querySelector("#sub-container-two");
const subtitleContainerThree = document.querySelector("#sub-container-three");

function fetchJson(infoID) {
    fetch("../json/info.json")
        .then(res => res.json())
        .then(obj => obj.informationPoints.filter(item => item.id == infoID))
        .then(arr => {
            infoImage.src = arr[0].imagePath;
            infoHeading.innerHTML = arr[0].infoHeading;
            infoText.innerHTML = arr[0].infoText;
        })
}

function displayInfo(DOM_Container) {
    DOM_Container.classList.add("visible");
    closeInfo.classList.add("visible");
}

function removeInfo(DOM_Container) {
    infoImage.src = "";
    infoHeading.innerHTML = "";
    infoText.innerHTML = "";
    DOM_Container.classList.remove("visible");
    closeInfo.classList.remove("visible");
}

setTimeout(() => {
    const hotspotContainer = document.querySelector("#panorama > .pnlm-render-container");
    const switchSceneTwoHotspots = hotspotContainer.querySelectorAll(".scene-hotspot");

    const subSceneOne = document.querySelectorAll(".subs-scene-one");
    const subSceneTwo = document.querySelectorAll(".subs-scene-two");
    const subSceneThree = document.querySelectorAll(".subs-scene-three");

    if (sceneNumber == 1) {
        sceneCount.innerHTML = sceneNumber;
        const hotspotOne = hotspotContainer.getElementsByTagName("div")[0];
        const hotspotTwo = hotspotContainer.getElementsByTagName("div")[1];

        hotspotOne.addEventListener("click", () => {
            fetchJson("1");
            displayInfo(subtitleContainer);
            pauseAudio();
            hamburgerOpen.classList.add("slide-out-of-view");
            infoTop.scrollIntoView({ block: "start" });
        });

        hotspotTwo.addEventListener("click", () => {
            fetchJson("2")
            displayInfo(subtitleContainer);
            pauseAudio();
            hamburgerOpen.classList.add("slide-out-of-view");
            infoTop.scrollIntoView({ block: "start" });
        });

        closeInfo.addEventListener("click", () => {
            removeInfo(subtitleContainer);
            hamburgerOpen.classList.remove("slide-out-of-view")
        });
    }

    audio.addEventListener('ended', () => {
        switchSceneTwoHotspots.forEach(i => {
            i.classList.add('pop');
        });
        pauseAudio();
    });

    switchSceneTwoHotspots.forEach(sceneSwitch => {

        sceneSwitch.addEventListener('click', () => {
            sceneNumber = 2;
            sceneCount.innerHTML = sceneNumber;
            sceneLocationName.innerHTML = "De Rijn, onderdeel van de Limes";
            sceneLocationImage.src = "images/de-rijn-nederland.png";
            audioSource.src = "audio/scripttweedescene-alt.mp3";
            audio.load();
            infoImage.src = "";
            infoHeading.innerHTML = "";
            infoText.innerHTML = "";
            closeInfo.classList.remove("visible");
            subtitleContainer.classList.add('hidden');
            hamburgerMenu.classList.remove('open');
            hamburgerBackground.classList.remove('visible');

            subSceneOne.forEach(i => {
                i.classList.add('hidden');
            })

            subSceneTwo.forEach(i => {
                i.classList.remove('hidden');
            });

            subtitleContainerTwo.scrollIntoView({ behavior: "smooth", block: "start" });

            setTimeout(() => {
                if (sceneNumber == 2) {
                    const sceneTwoHotspotOne = hotspotContainer.getElementsByTagName("div")[0];
                    const sceneTwoHotspotTwo = hotspotContainer.getElementsByTagName("div")[1];
                    const switchToSceneThree = hotspotContainer.getElementsByTagName("div")[2];

                    audio.addEventListener('ended', () => {
                        switchToSceneThree.classList.add('pop');
                        pauseAudio();
                    });

                    sceneTwoHotspotOne.addEventListener("click", () => {
                        fetchJson("3");
                        displayInfo(subtitleContainerTwo);
                        pauseAudio();
                        hamburgerOpen.classList.add("slide-out-of-view");
                        infoTop.scrollIntoView({ block: "start" });
                    });

                    sceneTwoHotspotTwo.addEventListener("click", () => {
                        fetchJson("4");
                        displayInfo(subtitleContainerTwo);
                        pauseAudio();
                        hamburgerOpen.classList.add("slide-out-of-view");
                        infoTop.scrollIntoView({ block: "start" });
                    });

                    closeInfo.addEventListener("click", () => {
                        removeInfo(subtitleContainerTwo);
                        hamburgerOpen.classList.remove("slide-out-of-view");
                    });

                    switchToSceneThree.addEventListener('click', () => {
                        sceneNumber = 3;
                        sceneCount.innerHTML = sceneNumber;
                        sceneLocationName.innerHTML = "Ruïne van castellum langs de Limes";
                        sceneLocationImage.src = "images/het-castellum-nederland.png";
                        audioSource.src = "audio/scriptderdescene-alt.mp3";
                        audio.load();
                        infoImage.src = "";
                        infoHeading.innerHTML = "";
                        infoText.innerHTML = "";
                        closeInfo.classList.remove("visible");
                        subtitleContainerTwo.classList.add("hidden");
                        hamburgerMenu.classList.remove('open');
                        hamburgerBackground.classList.remove('visible');

                        subSceneTwo.forEach(i => {
                            i.classList.add('hidden');
                        });

                        subSceneThree.forEach(i => {
                            i.classList.remove('hidden');
                        });

                        subtitleContainerThree.scrollIntoView({ behavior: "smooth", block: "start" });

                        setTimeout(() => {
                            if (sceneNumber == 3) {
                                const sceneThreeHotspotOne = hotspotContainer.getElementsByTagName("div")[0];
                                const sceneThreeHotspotTwo = hotspotContainer.getElementsByTagName("div")[1];

                                sceneThreeHotspotOne.addEventListener("click", () => {
                                    fetchJson("5");
                                    displayInfo(subtitleContainerThree);
                                    pauseAudio();
                                    hamburgerOpen.classList.add("slide-out-of-view");
                                    infoTop.scrollIntoView({ block: "start" });
                                });

                                sceneThreeHotspotTwo.addEventListener("click", () => {
                                    fetchJson("6");
                                    displayInfo(subtitleContainerThree);
                                    pauseAudio();
                                    hamburgerOpen.classList.add("slide-out-of-view");
                                    infoTop.scrollIntoView({ block: "start" });
                                });

                                closeInfo.addEventListener("click", () => {
                                    removeInfo(subtitleContainerThree);
                                    hamburgerOpen.classList.remove("slide-out-of-view");
                                });
                            }
                        }, 200);
                    });
                };
            }, 200);
        });
    });
}, 200);

