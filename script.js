const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");

hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.remove("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 152) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

$(document).ready(function () {
  $(".carousel").slick({
    dots: true,
  });
});
