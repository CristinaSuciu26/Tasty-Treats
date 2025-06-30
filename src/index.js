import { categoriesListInit } from "./js/home/initFilters";
import { ingredientListInit } from "./js/home/initFilters";
import { filterByTime } from "./js/home/filterByTime";
import { showLoader } from "./js/loader";
import { masterClassInit } from "./js/home/initFilters";
import { orderNowModal } from "./js/home/orderNowModal";
import { PopularRecipesInit } from "./js/home/initFilters";
import { regionListInit } from "./js/home/initFilters";
import { sidebar } from "./js/sidebar";
import { theme } from "./js/theme";
import { updateRecipes } from "./js/home/updateRecipes";
import { ratingModal } from "./js/ratingModal";

document.addEventListener("DOMContentLoaded", function () {
  try {
    showLoader();
    masterClassInit();
    categoriesListInit();
    PopularRecipesInit();
    ingredientListInit();
    regionListInit();
    theme();
    sidebar();
    orderNowModal();
    ratingModal()
    filterByTime();
    updateRecipes();
  } catch (error) {
    console.error("Error in script:", error);
  }
});
