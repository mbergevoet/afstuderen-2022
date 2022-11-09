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
const saveButton = document.querySelector('.save-button');
const nextButton = document.querySelector('.next-button');
const pickSide = document.querySelector('.pick-side');
let playState = 'play';
let questionOne = false;
let questionTwo = false;

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

function pauseAfterThis(questionOneTimeStamp, questionTwoTimeStamp) {
    let flooredCurrentTime = Math.floor(audio.currentTime);

    if (flooredCurrentTime == questionOneTimeStamp && questionOne == false) {
        pauseAudio();
        questionOne = true;
        questionBackground.classList.add("visible");
        questionContainerOne.classList.add("visible");
    }

    if (flooredCurrentTime == questionTwoTimeStamp && questionTwo == false) {
        pauseAudio();
        questionTwo = true;
        questionBackground.classList.add("visible");
        questionContainerTwo.classList.add("visible");
    }
}

// function pickDirection(timeStamp) {
//     Math.floor(audio.currentTime);
// }

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
    // pauseAfterThis(18, 30);
    // pauseAfterThis(2, 3);
});

// audio.addEventListener('ended', () => {
//     // console.log(pickSide)
//     pickSide.classList.add('visible');
//     console.log('ended')
// });

seekSlider.addEventListener('input', () => {
    showRangeProgress();
});

saveButton.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerOne.classList.remove('visible');
})

nextButton.addEventListener('click', () => {
    questionBackground.classList.remove('visible');
    questionContainerTwo.classList.remove('visible');
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

function fetchSubtitles(subID) {
    fetch("../json/subtitles.json")
        .then(res => res.json())
        .then(obj => obj.subtitles.filter(item => item.id == subID))
        .then(arr => {
            subtitleContainer.innerHTML = arr[0].subtitleWords;
        })
}

setTimeout(() => {
    const sideBar = document.querySelector("aside");
    const hotspotContainer = document.querySelector("#panorama > .pnlm-render-container");
    const hotspotOne = hotspotContainer.getElementsByTagName("div")[0];
    const hotspotTwo = hotspotContainer.getElementsByTagName("div")[1];
    const switchScene = hotspotContainer.getElementsByTagName("div")[2];

    const subsToHide = document.querySelectorAll(".hide-sub");
    const subsToShow = document.querySelectorAll(".show-sub");

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
        switchScene.classList.add('pop');
        pauseAudio();
    });

    switchScene.addEventListener('click', () => {
        audioSource.src = "audio/heidebijermelo.mp3";
        audio.load();

        subsToShow.forEach(i => {
            i.classList.add('paste');
        })

        setTimeout(() => {
            subsToHide.forEach(i => {
                i.classList.add('remove');
            });
        }, 500);

        // subtitleContainer.innerHTML = "";
        // fetchSubtitles("1")
    });
}, 200);

