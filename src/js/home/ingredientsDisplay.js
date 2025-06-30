import Choices from "choices.js";
import "choices.js/public/assets/styles/choices.min.css";
import { setSelectedIngredient } from "./sharedState.js";
import { updateRecipes } from "./updateRecipes.js";

let choicesInstance;
let ingredientMap = {};
export function ingredientList(ingredientList) {
    const ingredientSelect = document.getElementById("search-by-ingredients");

    ingredientSelect.innerHTML = "";

    ingredientList.forEach((element) => {
        ingredientMap[element.name] = element._id;
        const option = document.createElement("option");
        option.textContent = element.name;
        option.value = element._id;
        option.dataset.name = element.name;
        option.value = element.name;
        ingredientSelect.appendChild(option);
    });

    ingredientSelect.addEventListener("change", (e) => {
        const name = e.target.value;
        const id = ingredientMap[name];
        setSelectedIngredient(id);

        updateRecipes();
    });

    if (choicesInstance) {
        choicesInstance.destroy();
    }

    // Initialize Choices
    choicesInstance = new Choices(ingredientSelect, {
        removeItemButton: false,
        placeholderValue: "Select",
        searchPlaceholderValue: "Type to search",
        searchEnabled: true,
        shouldSort: false,
        duplicateItemsAllowed: false,
    });
}
