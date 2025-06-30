import { seeRecipeModal } from "../seeRecipeModal.js";
import { updateRecipes } from "./updateRecipes.js";
import { renderPagination } from "../pagination";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

let currentPage = 1;
const itemsPerPage = 9;

export function renderRecipes(recipes, options = {}) {
  const container = document.getElementById("recipe-results");
  const { fromFavoritesPage = false } = options;

  if (!container) {
    console.error("Container element not found!");
    return;
  }

  const paginationContainer = document.getElementById("pagination");
  if (paginationContainer) paginationContainer.style.display = "flex";

  const totalPages = Math.ceil(recipes.length / itemsPerPage);
  currentPage = Math.min(Math.max(currentPage, 1), totalPages);

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentRecipes = recipes.slice(start, end);

  container.innerHTML = "";

  if (!recipes || recipes.length === 0) {
    const noResultMessage = document.createElement("p");
    noResultMessage.textContent =
      "We couldn’t find a match — try adjusting your filters for more results.";
    noResultMessage.classList.add("no-result");
    container.appendChild(noResultMessage);

    if (paginationContainer) paginationContainer.style.display = "none";
    return;
  }

  currentRecipes.forEach((recipe) => {
    recipe.id =
      recipe.id ||
      `${recipe.title}-${recipe.category}`.replace(/\s+/g, "-").toLowerCase();

    const item = document.createElement("div");
    item.classList.add("recipe-card");

    // Image
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    const recipeImg = document.createElement("img");
    recipeImg.classList.add("recipe-img");
    recipeImg.src = recipe.thumb;
    recipeImg.alt = recipe.title;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay-card");

    imageWrapper.appendChild(recipeImg);
    imageWrapper.appendChild(overlay);
    item.appendChild(imageWrapper);

    // Favorite button
    const favoriteButton = document.createElement("button");
    favoriteButton.classList.add("favorites-button");
    favoriteButton.id = "favorite-btn";

    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute("viewBox", "0 0 24 24");
    heart.setAttribute("width", "24");
    heart.setAttribute("height", "24");

    const heartPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    heartPath.setAttribute(
      "d",
      "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    );

    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    heartPath.setAttribute("fill", isFavorite ? "red" : "white");

    heart.appendChild(heartPath);
    favoriteButton.appendChild(heart);

    favoriteButton.addEventListener("click", () => {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const isFavorite = favorites.some((fav) => fav.id === recipe.id);

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
        heartPath.setAttribute("fill", "white");
        if (fromFavoritesPage) {
          item.remove();
        }
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
        heartPath.setAttribute("fill", "red");
      }
    });

    item.appendChild(favoriteButton);

    // Details
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-card-container");

    const title = document.createElement("h4");
    title.classList.add("recipe-title");
    title.textContent = recipe.title;

    const description = document.createElement("p");
    description.classList.add("card-description");
    description.textContent = recipe.description;

    const rating = document.createElement("div");
    rating.classList.add("rating");

    const ratingValue = document.createElement("span");
    ratingValue.classList.add("rating-value");
    ratingValue.textContent = recipe.rating.toFixed(1);

    const starsContainer = document.createElement("span");
    starsContainer.classList.add("stars-container");
    for (let i = 0; i < Math.round(recipe.rating); i++) {
      const star = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      star.setAttribute("viewBox", "0 0 24 24");
      star.setAttribute("width", "20");
      star.setAttribute("height", "20");
      star.setAttribute("fill", "#FFD700");

      const starPath = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      starPath.setAttribute(
        "d",
        "M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.17L12 18.897l-7.334 3.865 1.4-8.17L.132 9.21l8.2-1.192z"
      );
      star.appendChild(starPath);
      starsContainer.appendChild(star);
    }

    rating.appendChild(ratingValue);
    rating.appendChild(starsContainer);

    detailsContainer.appendChild(title);
    detailsContainer.appendChild(description);
    detailsContainer.appendChild(rating);

    // See Recipe button
    const buttonCard = document.createElement("button");
    buttonCard.id = "see-recipe-btn";
    buttonCard.classList.add("recipe-card-button");
    buttonCard.textContent = "See Recipe";
    buttonCard.addEventListener("click", () => seeRecipeModal(recipe));

    detailsContainer.appendChild(buttonCard);
    item.appendChild(detailsContainer);

    container.appendChild(item);
  });

  renderPagination(currentPage, totalPages, (newPage) => {
    currentPage = newPage;
    setTimeout(() => updateRecipes(), 300);
  });
}
