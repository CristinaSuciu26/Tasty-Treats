import { fetchRecipes } from "../fetchData";
import { renderRecipes } from "./searchRecipes";
import { getActiveCategory, getSelectedIngredient, getSelectedRegion, getSelectedTime, resetActiveCategory } from "./sharedState";

export async function updateRecipes() {
    const searchInput = document.getElementById("search-recipes");
    const allRecipes = await fetchRecipes();
    const searchQuery = searchInput?.value?.trim().toLowerCase() || "";
    const selectedCategory = getActiveCategory();
    const selectedRegion = getSelectedRegion();
    const selectedIngredient = getSelectedIngredient();
    const selectedTime = getSelectedTime();
    const allBtn = document.getElementById("all-categories-btn");

    allBtn.addEventListener("click", () => {
        resetActiveCategory();
    });

    let filtered = allRecipes;

    // Filter by time
    if (selectedTime) {
        filtered = filtered.filter((r) => r.time === selectedTime);
    }

    // filter by ingredient
    if (selectedIngredient) {
        filtered = filtered.filter((r) => r.ingredients?.some((ing) => ing.id === selectedIngredient));
    }
    // Filter by category
    if (selectedCategory) {
        filtered = filtered.filter((r) => r.category === selectedCategory);
    }
    if (selectedRegion) {
        filtered = filtered.filter((r) => r.area === selectedRegion);
    }

    // Filter by search input
    if (searchQuery) {
        filtered = filtered.filter((r) => r.title.toLowerCase().includes(searchQuery));
    }

    renderRecipes(filtered);
}
