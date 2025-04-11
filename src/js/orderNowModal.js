export const orderNowModal = () => {
  const modal = document.getElementById("order-now-modal");
  const openModal = document.getElementById("open-order-now-modal");
  const closeModal = document.getElementById("close-order-now-modal");

  openModal.addEventListener("click", () => {
    modal.style.display = "block";

    document.body.style.overflow = "hidden";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });
};
