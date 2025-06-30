import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const seeRecipeModal = (recipe) => {
  const modal = document.getElementById("see-recipe-modal");
  const closeModal = document.getElementById("close-see-recipe-modal");
  const modalContent = document.getElementById("see-recipe-content");
  const modalButtons = document.getElementById("modal-buttons");
  const removeOrAddBtn = document.getElementById("remove-btn");

  // Clear previous content (except buttons)
  modalContent.innerHTML = "";
  modalContent.appendChild(closeModal);
  modalContent.appendChild(modalButtons);

  // Show modal
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  modalContent.classList.remove("hide");
  modalContent.classList.add("show");

  // Create image container
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const imgModal = document.createElement("img");
  imgModal.src = recipe.thumb;
  imgContainer.appendChild(imgModal);

  const modalDetails = document.createElement("div");
  modalDetails.classList.add("modal-details");
  imgContainer.appendChild(modalDetails);

  // Title
  const titleModal = document.createElement("h2");
  titleModal.classList.add("recipe-title-modal");
  titleModal.textContent = recipe.title;
  modalDetails.appendChild(titleModal);

  // Rating
  const ratingModal = document.createElement("div");
  ratingModal.classList.add("rating-modal");

  const ratingValueModal = document.createElement("span");
  ratingValueModal.classList.add("rating-value-modal");
  ratingValueModal.textContent = recipe.rating.toFixed(1);
  ratingModal.appendChild(ratingValueModal);

  const starsContainerModal = document.createElement("span");
  starsContainerModal.classList.add("stars-container-modal");
  for (let i = 0; i < Math.round(recipe.rating); i++) {
    const star = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    star.setAttribute("width", "20");
    star.setAttribute("height", "20");
    star.setAttribute("viewBox", "0 0 24 24");
    star.setAttribute("fill", "#FFD700");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.17L12 18.897l-7.334 3.865 1.4-8.17L.132 9.21l8.2-1.192z"
    );
    star.appendChild(path);
    starsContainerModal.appendChild(star);
  }
  ratingModal.appendChild(starsContainerModal);

  const timePreparation = document.createElement("p");
  timePreparation.classList.add("time-preparation");
  timePreparation.textContent = `${recipe.time} min`;
  ratingModal.appendChild(timePreparation);

  modalDetails.appendChild(ratingModal);

  // Tags
  const tagsContainer = document.createElement("ul");
  tagsContainer.classList.add("tags-container");
  recipe.tags.forEach((tag) => {
    if (tag) {
      const tagItem = document.createElement("li");
      tagItem.classList.add("tags");
      tagItem.textContent = `#${tag}`;
      tagsContainer.appendChild(tagItem);
    }
  });
  modalDetails.appendChild(tagsContainer);

  // Description
  const descriptionModal = document.createElement("p");
  descriptionModal.classList.add("description-modal");
  descriptionModal.textContent = recipe.description;
  modalDetails.appendChild(descriptionModal);

  modalContent.appendChild(imgContainer);

  // Favorite button state
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  let isFavorite = favorites.some((fav) => fav.id === recipe.id);

  removeOrAddBtn.textContent = isFavorite
    ? "Remove from Favorites"
    : "Add to Favorites";

  removeOrAddBtn.onclick = function () {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    isFavorite = favorites.some((fav) => fav.id === recipe.id);

    if (isFavorite) {
      Toastify({
        text: "Removed from favorites",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #ff5f6d, #ffc371)",
        },
      }).showToast();
      favorites = favorites.filter((fav) => fav.id !== recipe.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      removeOrAddBtn.textContent = "Add to Favorites";
    } else {
      Toastify({
        text: "Added to favorites",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
      favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      removeOrAddBtn.textContent = "Remove from Favorites";
    }
  };

  // Close modal handler
  closeModal.onclick = () => {
    modalContent.classList.remove("show");
    modalContent.classList.add("hide");
    setTimeout(() => {
      modal.style.display = "none";
      modalContent.classList.remove("hide");
      document.body.style.overflow = "auto";
    }, 300);
  };
};
