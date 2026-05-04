const showButton = document.querySelector("#show-video");
const videoFrame = document.querySelector("#video-frame");
const video = document.querySelector("[data-gated-video]");

if (showButton && videoFrame && video) {
  function enableControls() {
    video.controls = true;
    videoFrame.classList.add("is-playing");
  }

  function showAndPlayVideo() {
    videoFrame.hidden = false;
    showButton.hidden = true;
    video.controls = false;
    video.preload = "auto";
    videoFrame.offsetHeight;

    const playRequest = video.play();

    if (playRequest) {
      playRequest.then(enableControls).catch(() => {
        enableControls();
        video.focus();
      });
    } else {
      enableControls();
    }
  }

  video.addEventListener("playing", enableControls);
  showButton.addEventListener("click", showAndPlayVideo, { once: true });
}
