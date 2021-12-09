const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  mobileNav.classList.remove("active");
});
