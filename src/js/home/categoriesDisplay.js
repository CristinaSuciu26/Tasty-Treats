import { updateRecipes } from "./updateRecipes";
import { setActiveCategory } from "./sharedState";

let activeCategory = "";

export function categoriesList(categoriesData) {
    const categoriesListEl = document.getElementById("categories-list");
    categoriesListEl.innerHTML = "";

    categoriesData.forEach((element) => {
        const listItem = document.createElement("div");
        listItem.classList.add("categories-item");

        const categoryBtn = document.createElement("button");
        categoryBtn.classList.add("category-btn");
        categoryBtn.textContent = element.name;

        categoryBtn.addEventListener("click", (e) => {
            setActiveCategory(element.name);
            activeCategory = element.name;

            document.querySelectorAll(".category-btn").forEach((btn) => btn.classList.remove("active"));
            categoryBtn.classList.add("active");

            updateRecipes();
        });

        listItem.appendChild(categoryBtn);
        categoriesListEl.appendChild(listItem);
    });
}
