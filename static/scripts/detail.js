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

let sceneNumber = 1;
let playState = 'play';

const closeInfo = document.querySelector(".close-info");

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

function showQuestions(stampOne, stampTwo, stampThree, oneDomElement, twoDomElement, threeDomElement) {
    let flooredCurrentTime = Math.floor(audio.currentTime);

    if (flooredCurrentTime == stampOne && questionOne == false) {
        pauseAudio();
        questionOne = true;
        questionBackground.classList.add("visible");
        oneDomElement.classList.add("visible");
    }
    if (flooredCurrentTime == stampTwo && questionTwo == false) {
        pauseAudio();
        questionTwo = true;
        questionBackground.classList.add("visible");
        twoDomElement.classList.add("visible");
    }
    if (flooredCurrentTime == stampThree && questionThree == false) {
        pauseAudio();
        questionThree = true;
        questionBackground.classList.add("visible");
        threeDomElement.classList.add("visible");
    }
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

audio.addEventListener('loadedmetadata', () => {
    displayDuration(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    whilePlaying();

    if (sceneNumber == 1) {
        showQuestions(3, 9, 18, questionContainerOne, questionContainerTwo, questionContainerThree);
    }

    if (sceneNumber == 2) {
        showQuestions(2, 7, 12, questionContainerFour, questionContainerFive, questionContainerSix);
    }

    if (sceneNumber == 3) {
        showQuestions(5, 7, 12, questionContainerSeven, questionContainerEight, questionContainerNine);
    }
});

seekSlider.addEventListener('input', () => {
    showRangeProgress();
});

btnOne.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerOne.classList.remove('visible');
})

btnTwo.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerTwo.classList.remove('visible');
})

btnThree.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerThree.classList.remove('visible');
})

btnFour.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerFive.classList.remove('visible');
})

btnFive.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerFive.classList.remove('visible');
})

btnSix.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerSix.classList.remove('visible');
})

btnSeven.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerSeven.classList.remove('visible');
})

btnEight.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerEight.classList.remove('visible');
})

btnNine.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerNine.classList.remove('visible');
})

const infoImage = document.querySelector("#info-container > img");
const infoHeading = document.querySelector("#info-container > h1");
const infoText = document.querySelector("#info-container > p");

const subtitleContainer = document.querySelector("#sub-container");

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

setTimeout(() => {
    const sideBar = document.querySelector("aside");
    const hotspotContainer = document.querySelector("#panorama > .pnlm-render-container");
    const hotspotOne = hotspotContainer.getElementsByTagName("div")[0];
    const hotspotTwo = hotspotContainer.getElementsByTagName("div")[1];
    const switchToSceneTwo = hotspotContainer.getElementsByTagName("div")[2];
    const switchToSceneThree = hotspotContainer.getElementsByTagName("div")[3];

    const subsToHide = document.querySelectorAll(".hide-sub");
    const subsToShowTwo = document.querySelectorAll(".show-sub-two");
    const subsToShowThree = document.querySelectorAll(".show-sub-three");

    hotspotOne.addEventListener("click", () => {
        fetchJson("1")
        sideBar.classList.add("grow");
        subtitleContainer.classList.add("visible");
        closeInfo.classList.add("visible");
    });

    closeInfo.addEventListener("click", () => {
        infoImage.src = "";
        infoHeading.innerHTML = "";
        infoText.innerHTML = "";
        sideBar.classList.remove("grow");
        subtitleContainer.classList.remove("visible");
        closeInfo.classList.remove("visible");
    });

    hotspotTwo.addEventListener("click", () => {
        fetchJson("2")
        sideBar.classList.add("grow");
        subtitleContainer.classList.add("visible");
        closeInfo.classList.add("visible");
    });

    audio.addEventListener('ended', () => {
        switchToSceneTwo.classList.add('pop');
        switchToSceneThree.classList.add('pop');
        pauseAudio();
    });

    switchToSceneTwo.addEventListener('click', () => {
        sceneNumber = 2;
        audioSource.src = "audio/heidebijermelo.mp3";
        audio.load();

        subsToShowTwo.forEach(i => {
            i.classList.add('paste');
        })

        subsToHide.forEach(i => {
            i.classList.add('remove');
        });
    });

    switchToSceneThree.addEventListener('click', () => {
        sceneNumber = 3;
        audioSource.src = "audio/heidebijermelo.mp3";
        audio.load();

        subsToShowThree.forEach(i => {
            i.classList.add('paste');
        })

        subsToHide.forEach(i => {
            i.classList.add('remove');
        });
    });

}, 200);

