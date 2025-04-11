export const sidebar = () => {
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const openSidebarButtons = document.querySelectorAll("#open-sidebar");

  openSidebarButtons.forEach(button => {
    button.addEventListener("click", function () {
      sidebar.style.display = "flex";
      console.log("openSidebar clicked");
      console.log("Sidebar style:", sidebar.style.display);
    });
  });

  closeSidebar.addEventListener("click", function () {
    sidebar.style.display = "none";
  });

  const handleResize = () => {
    if (window.innerWidth > 768) {
      sidebar.style.display = "none";
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();
};
