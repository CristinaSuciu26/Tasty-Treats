import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const ratingModal = () => {
  const modal = document.getElementById("rating-modal");
  const modalContent = document.querySelector(".rating-modal-content");
  const seeRecipeModal = document.getElementById("see-recipe-modal");
  const openButton = document.getElementById("rating-btn");
  const closeButton = document.getElementById("close-rating-modal");
  const stars = document.querySelectorAll("#star-rating .star");
  const ratingValue = document.getElementById("rating-value");
  const ratingData = document.getElementById("rating-data");
  const form = document.getElementById("rating-form");
  const ratingContainer = document.getElementById("rating-container");
  const inputForm = document.getElementById("rating-email");
  const message = document.createElement("p");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (stars.length === 0 || ratingValue.value === "0") {
      Toastify({
        text: "Please select a rating before submitting.",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #ff5f6d, #ffc371)",
        },
      }).showToast();
    } else {
      Toastify({
        text: "Rating submitted successfully!",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();

      // Reset form
      inputForm.value = "";
      ratingValue.value = 0;
      ratingData.textContent = "0.0";
      stars.forEach((s) => s.classList.remove("active"));

      // Animate close
      modalContent.classList.remove("show");
      modalContent.classList.add("hide");

      setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("hide");
        document.body.style.overflow = "auto";
      }, 300);
    }
  });

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const value = parseInt(star.getAttribute("data-value"));
      ratingValue.value = value;

      stars.forEach((s) => {
        if (parseInt(s.getAttribute("data-value")) <= value) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });

      ratingData.textContent = `0.${value}`;
    });
  });

  openButton.addEventListener("click", () => {
    modal.style.display = "block";
    modalContent.classList.remove("hide");
    modalContent.classList.add("show");
    document.body.style.overflow = "hidden";

    if (seeRecipeModal && seeRecipeModal.style.display === "block") {
      seeRecipeModal.style.display = "none";
    }
  });

  closeButton.addEventListener("click", () => {
    modalContent.classList.remove("show");
    modalContent.classList.add("hide");

    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove("hide");
      document.body.style.overflow = "auto";

      if (message && ratingContainer.contains(message)) {
        ratingContainer.removeChild(message);
      }

      stars.forEach((s) => {
        ratingData.textContent = `0.0`;
        ratingValue.value = 0;
        s.classList.remove("active");
      });
    }, 300); // Match CSS hide animation
  });
};
