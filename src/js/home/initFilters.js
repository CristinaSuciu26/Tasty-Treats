import {
  fetchCategories,
  fetchIngredientsList,
  fetchMasterclasses,
  fetchPopularRecipes,
  fetchRegionsList,
} from "../fetchData.js";
import { categoriesList } from "./categoriesDisplay.js";
import { masterClassDisplay } from "./masterclassDisplay.js";
import { resetActiveCategory } from "./sharedState.js";
import { updateRecipes } from "./updateRecipes.js";
import { slider } from "../swiper.js";
import { popularRecipes } from "./popularRecipesDisplay.js";
import { regionList } from "./regionsDisplay.js";
import { ingredientList } from "./ingredientsDisplay.js";

export function categoriesListInit() {
  fetchCategories()
    .then((data) => {
      categoriesList(data);
    })
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });

  const allBtn = document.getElementById("all-categories-btn");
  if (allBtn) {
    allBtn.addEventListener("click", () => {
      resetActiveCategory();
      document
        .querySelectorAll(".category-btn")
        .forEach((btn) => btn.classList.remove("active"));
      allBtn.classList.add("active");

      updateRecipes();
    });
  }
}

export function ingredientListInit() {
  fetchIngredientsList()
    .then((data) => {
      ingredientList(data);
    })
    .catch((error) => {
      console.error("Error fetching ingredients:", error);
    });
}

export function masterClassInit() {
  fetchMasterclasses()
    .then((data) => {
      masterClassDisplay(data);

      setTimeout(() => {
        const swiper = slider();
        swiper.update();
      }, 100);
    })

    .catch((error) => {
      console.error("Error fetching masterclasses:", error);
    });
}

export function PopularRecipesInit() {
  fetchPopularRecipes()
    .then((data) => {
      popularRecipes(data);
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
    });
}

export function regionListInit() {
  fetchRegionsList()
    .then((data) => {
      regionList(data);
    })
    .catch((error) => {
      console.error("Error fetching regions", error);
    });
}
