export const theme = () => {
  const toggleButtons = document.querySelectorAll(
    "#theme-toggle-light, #theme-toggle-dark, #theme-toggle-sidebar"
  );
  const darkThemeLogo = document.getElementById("dark-theme-logo");
  const lightThemeLogo = document.getElementById("light-theme-logo");

  // Helper function to update logos
  const updateLogos = (isDark) => {
    darkThemeLogo.style.display = isDark ? "flex" : "none";
    lightThemeLogo.style.display = isDark ? "none" : "flex";
  };

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);
  document.body.classList.toggle("dark-theme", isDark);
  updateLogos(isDark);

  // Set the state of all toggles
  toggleButtons.forEach((button) => {
    button.checked = isDark;
    button.addEventListener("change", () => {
      const isDark = document.body.classList.toggle("dark-theme");
      updateLogos(isDark);

      toggleButtons.forEach((toggle) => {
        toggle.checked = isDark;
      });
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
};
