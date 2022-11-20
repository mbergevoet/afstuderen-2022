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

// let multipleChoiceAnswers = [".wrong", ".wrong", ".wrong", ".wrong", ".wrong"];
let multipleChoiceOne = "wrong";
let multipleChoiceFour = "wrong";
let multipleChoiceFive = "wrong";
let multipleChoiceSeven = "wrong";
let multipleChoiceNine = "wrong";
// if the right answer (the right child) is clicked change to true. Then loop over the array and add class that shows green on the end screen

const sceneCount = document.querySelector('.scene-count')
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
    // console.log(seekSlider.value);
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
        console.log(questionFour)
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
        showQuestionsOne(30, 56, 73);
    }

    if (sceneNumber == 2) {
        showQuestionsTwo(30, 50, 77);
    }

    if (sceneNumber == 3) {
        showQuestionsThree(22, 28, 39);
    }
});

audio.addEventListener('timeupdate', () => {
    if (sceneNumber == 1 || sceneNumber == 2) {
        let currentWord = document.querySelector("span.speaking");
        currentWord.scrollIntoView({ behavior: "smooth", block: "center" });
    }
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

optionsOne.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.checked = true) {
            btnOne.removeAttribute('disabled');
        }
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
    });
});

optionsFive.forEach(answer => {
    answer.addEventListener('click', () => {
        if (answer.checked = true) {
            btnFive.removeAttribute('disabled');
        }
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
});

optionsFour[3].addEventListener('click', () => {
    multipleChoiceFour = "correct";
    localStorage.setItem("answerFour", multipleChoiceFour);
});

optionsFive[1].addEventListener('click', () => {
    multipleChoiceFive = "correct";
    localStorage.setItem("answerFive", multipleChoiceFive);
});

optionsSeven[0].addEventListener('click', () => {
    multipleChoiceSeven = "correct";
    localStorage.setItem("answerSeven", multipleChoiceFive);
});

optionsNine[2].addEventListener('click', () => {
    multipleChoiceNine = "correct";
    localStorage.setItem("answerNine", multipleChoiceFive);
});

const sideBar = document.querySelector("aside");
const infoImage = document.querySelector("#info-container > img");
const infoHeading = document.querySelector("#info-container > h1");
const infoText = document.querySelector("#info-container > p");

const subtitleContainer = document.querySelector("#sub-container");
const subtitleContainerTwo = document.querySelector("#sub-container-two");
const subtitleContainerthree = document.querySelector("#sub-container-three");

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
    sideBar.classList.add("grow");
    DOM_Container.classList.add("visible");
    closeInfo.classList.add("visible");
}

function removeInfo(DOM_Container) {
    infoImage.src = "";
    infoHeading.innerHTML = "";
    infoText.innerHTML = "";
    sideBar.classList.remove("grow");
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
        console.log(sceneNumber)
        sceneCount.innerHTML = sceneNumber;
        const hotspotOne = hotspotContainer.getElementsByTagName("div")[0];
        const hotspotTwo = hotspotContainer.getElementsByTagName("div")[1];

        hotspotOne.addEventListener("click", () => {
            fetchJson("1");
            displayInfo(subtitleContainer);
            pauseAudio();
        });

        hotspotTwo.addEventListener("click", () => {
            fetchJson("2")
            displayInfo(subtitleContainer);
            pauseAudio();
        });

        closeInfo.addEventListener("click", () => {
            removeInfo(subtitleContainer);
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
            audioSource.src = "audio/scripttweedescene.mp3";
            audio.load();
            subtitleContainer.classList.add('hidden');

            subSceneOne.forEach(i => {
                i.classList.add('hidden');
            })

            subSceneTwo.forEach(i => {
                i.classList.remove('hidden');
            });

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
                    });

                    sceneTwoHotspotTwo.addEventListener("click", () => {
                        fetchJson("4");
                        displayInfo(subtitleContainerTwo);
                    });

                    closeInfo.addEventListener("click", () => {
                        removeInfo(subtitleContainerTwo);
                    });


                    switchToSceneThree.addEventListener('click', () => {
                        sceneNumber = 3;
                        sceneCount.innerHTML = sceneNumber;
                        audioSource.src = "audio/scriptderdescene.mp3";
                        audio.load();

                        subSceneTwo.forEach(i => {
                            i.classList.add('hidden');
                        });

                        subSceneThree.forEach(i => {
                            i.classList.remove('hidden');
                        });

                        setTimeout(() => {
                            if (sceneNumber == 3) {
                                const sceneThreeHotspotOne = hotspotContainer.getElementsByTagName("div")[0];
                                const sceneThreeHotspotTwo = hotspotContainer.getElementsByTagName("div")[1];

                                sceneThreeHotspotOne.addEventListener("click", () => {
                                    fetchJson("5");
                                    displayInfo(subtitleContainerthree);
                                });

                                sceneThreeHotspotTwo.addEventListener("click", () => {
                                    fetchJson("6");
                                    displayInfo(subtitleContainerthree);
                                });

                                closeInfo.addEventListener("click", () => {
                                    removeInfo(subtitleContainerthree);
                                });
                            }
                        }, 200);
                    });
                };
            }, 200);
        });
    });
}, 200);

