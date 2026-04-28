const modal = document.querySelector("#image-modal");
const modalImage = document.querySelector("#modal-image");
const thumbs = document.querySelectorAll(".zeta-card-thumb");
const closeButtons = document.querySelectorAll("[data-close-modal]");

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  modalImage.removeAttribute("src");
  modalImage.removeAttribute("alt");
}

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    modalImage.src = thumb.dataset.fullImage;
    modalImage.alt = thumb.dataset.fullAlt;
    modal.hidden = false;
    document.body.classList.add("modal-open");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeModal();
  }
});
