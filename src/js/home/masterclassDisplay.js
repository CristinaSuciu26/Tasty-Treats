import { fetchMasterclasses } from "../fetchData.js";

// Function to display the masterclasses on the page
export function masterClassDisplay(masterClassData) {
    const masterClassList = document.getElementById("masterclass-list");

    masterClassData.forEach((item) => {
        const masterClassItem = document.createElement("div");
        masterClassItem.classList.add("masterclass-item", "swiper-slide");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const cookImage = document.createElement("img");
        cookImage.src = item.cook.imgUrl;
        cookImage.alt = item.cook.name;
        cookImage.classList.add("chef-img");
        masterClassItem.appendChild(cookImage);

        const foodImg = document.createElement("img");
        foodImg.src = item.topic.imgUrl;
        foodImg.classList.add("food-img");
        imageContainer.appendChild(foodImg);

        masterClassItem.appendChild(imageContainer);
        masterClassList.appendChild(masterClassItem);
    });
}
