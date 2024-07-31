function displayMenu() {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector("nav");
  const logo = document.querySelector(".header-logo");
  const header = document.querySelector("header");
  const body = document.body;

  nav.classList.toggle("nav-shown");
  logo.classList.toggle("logo-hidden");
  header.classList.toggle("header-expand");
  body.classList.toggle("body-down");
  menuButton.classList.toggle("menu-button-down");
}
