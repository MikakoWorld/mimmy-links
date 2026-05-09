document.querySelectorAll(".video-gate").forEach((gate) => {
  const showButton = gate.querySelector(".video-show-button");
  const videoFrame = gate.querySelector(".video-frame");
  const video = gate.querySelector("[data-gated-video]");

  if (!showButton || !videoFrame || !video) {
    return;
  }

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
});
