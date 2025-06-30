import categories from "../data/categoriesList.json" assert { type: "json" };
import ingredientsList from "../data/ingredientsList.json" assert { type: "json" };
import masterclasses from "../data/masterclasses.json" assert { type: "json" };
import popularRecipes from "../data/popularRecipes.json" assert { type: "json" };
import recipes from "../data/recipes.json" assert { type: "json" };
import regionList from "../data/regionsList.json" assert { type: "json" };

export async function fetchCategories() {
  try {
    return categories;
  } catch (error) {
    console.error("Error fetching categories", error);
  }
}

export async function fetchIngredientsList() {
  try {
    return ingredientsList;
  } catch (error) {
    console.error("Error fetching ingredients list", error);
  }
}

export async function fetchMasterclasses() {
  try {
    return masterclasses;
  } catch (error) {
    console.error("Error loading masterclasses:", error);
    throw error;
  }
}

export async function fetchPopularRecipes() {
  try {
    return popularRecipes;
  } catch (error) {
    console.error("Error fetching pupular recipes", error);
  }
}

export async function fetchRecipes() {
  try {
    return recipes.results;
  } catch (error) {
    console.error("Error fetching recipes list", error);
    return [];
  }
}

export async function fetchRegionsList() {
  try {
    return regionList;
  } catch (error) {
    console.error("Error fetching recipes list", error);
  }
}
