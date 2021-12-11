const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");

const serviceLink = document.querySelector(".mobile-nav ul li:nth-child(1) a");

const serviceDiv = document.querySelector("section.services");

let isMenuOpen = false;

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
  window.scrollTo({
    top: serviceDiv.offsetTop - 40,
    behavior: "smooth",
  });
  switchNav("close");
});

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
  });
});
