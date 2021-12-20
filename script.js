const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");

const serviceLink = document.querySelector(".mobile-nav ul li:nth-child(1) a");

const servicesDiv = document.querySelector(
  ".mobile-nav ul li:nth-child(1) div.services"
);

const serviceLinkImg = document.querySelector(
  ".mobile-nav ul li:nth-child(1) a img"
);

const serviceDiv = document.querySelector("section.services");

let isMenuOpen = false;
let isServicesOpen = false;

const switchNav = (type) => {
  if (type === "open") {
    mobileNav.classList.add("active");
    hamburgerBtn.firstElementChild.src = `${window.location.origin}/assets/svg/cancel.svg`;
    hamburgerBtn.firstElementChild.classList.add("small");
    isMenuOpen = true;
  } else {
    mobileNav.classList.remove("active");
    hamburgerBtn.firstElementChild.src = `${window.location.origin}/assets/svg/menu.svg`;
    hamburgerBtn.firstElementChild.classList.remove("small");
    isMenuOpen = false;
  }
};
hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isMenuOpen) {
    switchNav("open");
  } else {
    switchNav("close");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 152) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
    switchNav("close");
  }
});

serviceLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (isServicesOpen) {
    serviceLinkImg.classList.remove("open");
    servicesDiv.classList.remove("open");
    isServicesOpen = false;
  } else {
    serviceLinkImg.classList.add("open");
    servicesDiv.classList.add("open");
    isServicesOpen = true;
  }
});

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
  });
});
