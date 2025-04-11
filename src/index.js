import { orderNowModal } from "./js/orderNowModal";
import { sidebar } from "./js/sidebar";
import { theme } from "./js/theme";

document.addEventListener("DOMContentLoaded", function () {
  try {
    theme();
    sidebar();
    orderNowModal();
  } catch (error) {
    console.error("Error in script:", error);
  }
});
