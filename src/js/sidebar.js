export const sidebar = () => {
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("close-sidebar");
  const openSidebarButtons = document.querySelectorAll("#open-sidebar");

  openSidebarButtons.forEach((button) => {
    button.addEventListener("click", function () {
      sidebar.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  closeSidebar.addEventListener("click", function () {
    sidebar.style.display = "none";
     document.body.style.overflow = "auto";
  });

  const handleResize = () => {
    if (window.innerWidth > 768) {
      sidebar.style.display = "none";
    }
  };

  window.addEventListener("resize", handleResize);
  handleResize();
};
