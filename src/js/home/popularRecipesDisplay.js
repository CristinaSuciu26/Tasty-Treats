export function popularRecipes(recipes) {
    const recipesList = document.getElementById("recipes-list");

    recipes.forEach((recipe) => {
        const recipeItem = document.createElement("li");
        recipeItem.classList.add("popular-recipe-item");

        const imageContainer = document.createElement("img");
        imageContainer.src = recipe.preview;
        imageContainer.alt = recipe.title;
        recipeItem.appendChild(imageContainer);

        const recipeDetails = document.createElement("div");
        recipeDetails.classList.add("details-container");
        const recipeName = document.createElement("h3");
        recipeName.textContent = recipe.title;
        recipeName.classList.add("popular-recipe-name");
        recipeDetails.appendChild(recipeName);

        const recipeDescription = document.createElement("p");
        recipeDescription.textContent = recipe.description;
        recipeDescription.classList.add("recipe-description");
        recipeDetails.appendChild(recipeDescription);
        recipeItem.appendChild(recipeDetails);
        recipesList.appendChild(recipeItem);
    });
}
