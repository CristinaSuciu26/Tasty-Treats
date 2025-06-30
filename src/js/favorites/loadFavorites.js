import { renderPagination } from "../pagination";
import { renderRecipes } from "../home/searchRecipes";

let currentPage = 1;
const itemsPerPage = 8;

export function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const emptyFavorites = document.getElementById("empty-page");
  const recipeResults = document.getElementById("recipe-results");
  const favoritesImg = document.getElementById("fav-img");

  if (favorites.length === 0) {
    recipeResults.style.display = "none";
    emptyFavorites.style.display = "flex";
    favoritesImg.style.display = "none";
    return;
  }
  favoritesImg.style.display = "flex";
  recipeResults.style.display = "flex";
  emptyFavorites.style.display = "none";

  if (!favorites || favorites.length === 0) {
    recipeResults.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const favoritesPage = favorites.slice(start, end);

  renderRecipes(favoritesPage, { fromFavoritesPage: true });
  renderPagination(currentPage, totalPages, (newPage) => {
    currentPage = newPage;
    loadFavorites();
  });
}
