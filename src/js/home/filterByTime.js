import debounce from "lodash.debounce";
import { updateRecipes } from "./updateRecipes";
import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";
import { setSelectedTime } from "./sharedState";

let choicesInstance;

const searchInput = document.getElementById("search-recipes");
const searchByTime = document.getElementById("search-by-time");

searchByTime.addEventListener("change", (e) => {
    setSelectedTime(e.target.value);
    updateRecipes();
});

export function filterByTime() {
    if (searchInput) {
        searchInput.addEventListener("input", debounce(updateRecipes, 300));
    }

    if (searchByTime) {
        searchByTime.addEventListener("change", updateRecipes);
    }

    if (choicesInstance) {
        choicesInstance.destroy();
    }

    // Initialize Choices
    choicesInstance = new Choices(searchByTime, {
        removeItemButton: false,
        placeholderValue: "Select",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false,
    });
}
