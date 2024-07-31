function displayMenu() {
  const menuButton = document.querySelector(".menu-button");
  const menuIcon = document.querySelector(".menu-button i");
  const nav = document.querySelector("nav");
  const logo = document.querySelector(".header-logo");
  const header = document.querySelector("header");
  const body = document.body;

  if (menuIcon.classList.contains("bx-menu")) {
    menuIcon.classList.remove("bx-menu");
    menuIcon.classList.add("bx-x");
  } else if (menuIcon.classList.contains("bx-x")) {
    menuIcon.classList.remove("bx-x");
    menuIcon.classList.add("bx-menu");
  }

  nav.classList.toggle("nav-update");
  header.classList.toggle("header-update");
}
