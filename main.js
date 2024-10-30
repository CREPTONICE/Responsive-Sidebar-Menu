const togglebutton = document.getElementById("toggle-btn");
const Sidebar = document.getElementById("sidebar");
const add = document.getElementById("add");

function toggleSideBar() {
  Sidebar.classList.toggle("close");
  togglebutton.classList.toggle("rotate");

  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (Sidebar.classList.contains("close")) {
    Sidebar.classList.toggle("close");
    togglebutton.classList.toggle("rotate");
  }
}

function closeAllSubMenus() {
  Array.from(Sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}