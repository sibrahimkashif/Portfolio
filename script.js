function displayMenu() {
  const menuIcon = document.querySelector(".menu-button i");
  const nav = document.querySelector("nav");
  const header = document.querySelector("header");
  const logo = document.querySelector(".header-logo");

  if (menuIcon.classList.contains("bx-menu")) {
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.toggle("bx-x");
  } else if (menuIcon.classList.contains("bx-x")) {
    menuIcon.classList.toggle("bx-x");
    menuIcon.classList.toggle("bx-menu");
  }

  nav.classList.toggle("nav-shown");
  header.classList.toggle("header-update");
  logo.classList.toggle("logo-update");
}
