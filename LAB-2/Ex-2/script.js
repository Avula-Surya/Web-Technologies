// Audio elements
const audio = document.getElementById("audioPlayer");
const audioTime = document.getElementById("audioTime");

// Video elements
const video = document.getElementById("videoPlayer");
const videoTime = document.getElementById("videoTime");

// Function to format time (mm:ss)
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return min + ":" + (sec < 10 ? "0" + sec : sec);
}

// Update audio time
audio.addEventListener("timeupdate", () => {
    audioTime.textContent = formatTime(audio.currentTime);
});

// Update video time
video.addEventListener("timeupdate", () => {
    videoTime.textContent = formatTime(video.currentTime);
});
