const seekSlider = document.getElementById('seek-slider');
const toggleButton = document.getElementById('play-pause');
const audioTrackWrapper = document.querySelector('.audio-track');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const audio = document.querySelector('audio');
const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
const questionBackground = document.querySelector('.question-background');
const questionContainerOne = document.querySelector('.question-container-one');
const questionContainerTwo = document.querySelector('.question-container-two');
const saveButton = document.querySelector('.save-button');
const nextButton = document.querySelector('.next-button');
let playState = 'play';
let questionOne = false;
let questionTwo = false;

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
    pauseAfterThis(5, 10);
});

seekSlider.addEventListener('input', () => {
    // console.log("input");
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

function fetchJson(infoID) {
    const infoText = document.querySelector("#information-container > p");
    const infoImage = document.querySelector("#information-container > img");

    let isEmpty = infoText.innerHTML;
    if (isEmpty == null || isEmpty == "") {
        fetch("../json/info.json")
            .then(res => res.json())
            .then(obj => obj.informationPoints.filter(item => item.id == infoID))
            .then(arr => {
                infoText.innerHTML = arr[0].infoText;
                infoImage.src = arr[0].imagePath;
            })
    }
    else {
        infoText.innerHTML = "";
        infoImage.src = "";
    }
}

setTimeout(() => {
    const sideBar = document.querySelector("aside");
    const subtitleContainer = document.querySelector("#sub-container");
    const hotspotContainer = document.querySelector("#panorama > .pnlm-render-container");
    const hotspotOne = hotspotContainer.getElementsByTagName("div")[0];
    const hotspotTwo = hotspotContainer.getElementsByTagName("div")[1];

    hotspotOne.addEventListener("click", () => {
        fetchJson("1")
        sideBar.classList.toggle("grow");
        subtitleContainer.classList.toggle("visible");
    });

    hotspotTwo.addEventListener("click", () => {
        fetchJson("2")
        sideBar.classList.toggle("grow");
        subtitleContainer.classList.toggle("visible");
    });
}, 500);