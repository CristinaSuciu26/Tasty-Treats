let activeCategory = "";
export function setActiveCategory(category) {
    activeCategory = category;
}
export function getActiveCategory() {
    return activeCategory;
}

export function resetActiveCategory() {
    activeCategory = "";
    selectedRegion = "";
    selectedIngredient = "";
    selectedTime = "";
}
let selectedRegion = "";

export function setSelectedRegion(region) {
    selectedRegion = region;
}

export function getSelectedRegion() {
    return selectedRegion;
}

let selectedIngredient = "";

export function setSelectedIngredient(ingredient) {
    selectedIngredient = ingredient;
}

export function getSelectedIngredient() {
    return selectedIngredient;
}

let selectedTime = "";

export function setSelectedTime(time) {
    selectedTime = time;
}

export function getSelectedTime() {
    return selectedTime;
}
