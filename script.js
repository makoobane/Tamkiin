"use strict";

const navbar = document.querySelector("[data-navbar]");
const menuButton = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".navbar-link");

// Open/close the mobile menu
const toggleNavbar = () => {
  navbar.classList.toggle("active");
  menuButton.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

menuButton.addEventListener("click", toggleNavbar);

// Keep only one link active at a time
const setActiveLink = (clickedLink) => {
  navLinks.forEach((link) => link.classList.remove("active"));
  clickedLink.classList.add("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => setActiveLink(link));
});

// Make "Home" active on load
navLinks[0]?.classList.add("active");