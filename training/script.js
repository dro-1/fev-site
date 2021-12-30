const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");

const mobileServiceLink = document.querySelector(
  ".mobile-nav ul li:nth-child(1) a"
);

const mobileServicesDiv = document.querySelector(
  ".mobile-nav ul li:nth-child(1) div.services"
);

const mobileServiceLinkImg = document.querySelector(
  ".mobile-nav ul li:nth-child(1) a img"
);

const desktopServiceLink = document.querySelector(
  ".desktop-nav ul li:nth-child(1) a"
);

const desktopServicesDiv = document.querySelector(
  ".desktop-nav ul li:nth-child(1) div.services"
);

const desktopServiceLinkImg = document.querySelector(
  ".desktop-nav ul li:nth-child(1) a img"
);

const serviceDiv = document.querySelector("section.services");

let isMenuOpen = false;
let isMobileServicesOpen = false;
let isDesktopServicesOpen = false;

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
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
    switchNav("close");
  }
});

mobileServiceLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (isMobileServicesOpen) {
    mobileServiceLinkImg.classList.remove("open");
    mobileServicesDiv.classList.remove("open");
    isMobileServicesOpen = false;
  } else {
    mobileServiceLinkImg.classList.add("open");
    mobileServicesDiv.classList.add("open");
    isMobileServicesOpen = true;
  }
});

desktopServiceLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (isDesktopServicesOpen) {
    desktopServiceLinkImg.classList.remove("open");
    desktopServicesDiv.classList.remove("open");
    isDesktopServicesOpen = false;
  } else {
    desktopServiceLinkImg.classList.add("open");
    desktopServicesDiv.classList.add("open");
    isDesktopServicesOpen = true;
  }
});
