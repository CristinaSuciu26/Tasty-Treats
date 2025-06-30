import { showLoader } from "../loader.js";
import { loadFavorites } from "./loadFavorites.js";
import { sidebar } from "../sidebar.js";
import { theme } from "../theme.js";
import { ratingModal } from "../ratingModal.js";

document.addEventListener("DOMContentLoaded", function () {
  try {
    showLoader();
    loadFavorites();
    theme();
    sidebar();
    ratingModal();
  } catch (error) {
    console.error("Error in script:", error);
  }
});
