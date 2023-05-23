const hamburgerMenuButton = document.querySelector(".toggle-menu-button");
const hamburgerMenuIcon = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".nav-mobile-container");

hamburgerMenuButton.addEventListener("click", () => {
  hamburgerMenuIcon.classList.toggle("opacity-50");
  mobileMenu.classList.toggle("hidden");
});

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
