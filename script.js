function displayMenu() {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector("nav");
  const logo = document.querySelector(".header-logo");

  nav.classList.toggle("nav-shown");
  logo.classList.toggle("logo-hidden");
}
