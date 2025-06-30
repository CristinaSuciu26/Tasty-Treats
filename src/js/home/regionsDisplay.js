import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";
import { updateRecipes } from "./updateRecipes.js";
import { setSelectedRegion } from "./sharedState.js";

let choicesInstance;

export function regionList(regionList) {
    const regionSelect = document.getElementById("search-by-area");

    regionSelect.innerHTML = "";

    regionList.forEach((element) => {
        const regionItem = document.createElement("option");
        regionItem.classList.add("region-item");
        regionItem.textContent = element.name;
        regionItem.value = element.name;

        regionSelect.appendChild(regionItem);
    });

    regionSelect.addEventListener("change", (e) => {
        setSelectedRegion(e.target.value);
        updateRecipes();
    });
    if (choicesInstance) {
        choicesInstance.destroy();
    }

    // Initialize Choices
    choicesInstance = new Choices(regionSelect, {
        removeItemButton: false,
        placeholderValue: "Select",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false,
    });
}
