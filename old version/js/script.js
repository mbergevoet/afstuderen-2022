const seekSlider = document.getElementById('seek-slider');
const toggleButton = document.getElementById('play-pause');
const audioTrackWrapper = document.querySelector('.audio-track');
const playIcon = document.querySelector('.play-icon');
const pauseIcon = document.querySelector('.pause-icon');
const audio = document.querySelector('audio');
const durationContainer = document.getElementById('duration');
const currentTimeContainer = document.getElementById('current-time');
let playState = 'play';

toggleButton.addEventListener("click", () => {
    if (playState == 'play') {
        audio.play();
        playIcon.classList.add("hide");
        pauseIcon.classList.remove("hide");
        playState = 'pause';
    } else {
        audio.pause();
        playIcon.classList.remove("hide");
        pauseIcon.classList.add("hide");
        playState = 'play';
    }
});

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

audio.addEventListener('loadedmetadata', () => {
    displayDuration(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    // console.log("timeupdate");
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeContainer.textContent = calculateTime(seekSlider.value);
    whilePlaying();
});

seekSlider.addEventListener('input', () => {
    // console.log("input");
    showRangeProgress();
});

// const audioSync = require('audio-sync-with-text');

// new audioSync({
//     audioPlayer: 'audio-file', // the id of the audio tag
//     subtitlesContainer: 'sub-container', // the id where subtitles should show
//     subtitlesFile: '../subtitles/romeinsegrensinnederland.vtt' // the path to the vtt file
// });

// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//         const textWrapper = document.querySelector(".text-wrapper");
//         const hotspotContainer = document.querySelector("#panorama > .pnlm-render-container");
//         const hotspotOne = hotspotContainer.getElementsByTagName("div")[0];
//         const hotspotTwo = hotspotContainer.getElementsByTagName("div")[1];

//         hotspotOne.addEventListener("click", () => {
//             textWrapper.classList.toggle("red");

//         });

//         hotspotTwo.addEventListener("click", () => {
//             textWrapper.classList.toggle("blue");
//         });
//     }, 100);
// });