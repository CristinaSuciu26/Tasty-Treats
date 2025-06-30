import Toastify from "toastify-js";

export const orderNowModal = () => {
  const modal = document.getElementById("order-now-modal");
  const openModal = document.getElementById("open-order-now-modal");
  const closeModal = document.getElementById("close-order-now-modal");
  const modalContent = document.querySelector(".order-now-content");
  const form = document.getElementById("order-now-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    modalContent.classList.add("hide");
    Toastify({
      text: "Order submitted successfully!",
      duration: 3000,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove("hide");
      document.body.style.overflow = "auto";
    }, 300);
  });

  openModal.addEventListener("click", () => {
    modalContent.classList.remove("hide");
    modalContent.classList.add("show");
    modal.style.display = "block";

    document.body.style.overflow = "hidden";
  });

  closeModal.addEventListener("click", () => {
    modalContent.classList.remove("show");
    modalContent.classList.add("hide");
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove("hide");
      document.body.style.overflow = "auto";
    }, 300);
  });
};
