const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");
const serviceBtn = document.querySelector(
  "div.hero .container .wrapper .buttons button"
);

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
  if (window.scrollY >= 152) {
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

if (serviceBtn) {
  serviceBtn.addEventListener("click", (e) => {
    e.preventDefault();
    serviceDiv.scrollIntoView();
  });
}

if (!window.location.pathname.includes("contact")) {
  $(document).ready(function () {
    $(".carousel").slick({
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true,
          },
        },
      ],
    });
  });
}

//Handling the contact form

const messageBox = document.querySelector("textarea");
const mailInput = document.querySelector("input#email");
const nameInput = document.querySelector("input#name");
const feedbackText = document.querySelector("p.feedback");

const loaderSVG = `
<svg
version="1.1"
id="loader-1"
xmlns="http://www.w3.org/2000/svg"
x="0px"
y="0px"
width="25px"
height="25px"
viewBox="0 0 50 50"
style={{ enableBackground: "new 0 0 50 50" }}
>
<path
  fill="#fff"
  d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
>
  <animateTransform
    attributeType="xml"
    attributeName="transform"
    type="rotate"
    from="0 25 25"
    to="360 25 25"
    dur="0.6s"
    repeatCount="indefinite"
  />
</path>
</svg>
`;

const formBtn = document.querySelector("form > button");

let isFormLoading = null;

const setFeedbackMessage = (message, className) => {
  feedbackText.innerHTML = message;
  setTimeout(() => {
    feedbackText.innerHTML = "";
  }, 5000);
  feedbackText.classList.add(className);
};

formBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  if (!messageBox.value || !mailInput.value || !nameInput.value) {
    setFeedbackMessage(
      "All the fields above are required to send the message.",
      "failed"
    );
    return;
  }

  const templateParams = {
    name: nameInput.value,
    email: mailInput.value,
    message: messageBox.value,
  };

  isFormLoading = true;
  formBtn.innerHTML = loaderSVG;
  formBtn.disabled = isFormLoading;

  emailjs.send("service_esd8jgb", "template_la85l5p", templateParams).then(
    function (response) {
      // console.log(response);
      // console.log("SUCCESS!", response.status, response.text);
      setFeedbackMessage("Your message was sent successfully.", "success");
      isFormLoading = false;
      formBtn.innerHTML = "Send";
      formBtn.disabled = isFormLoading;
    },
    function (error) {
      // console.log("FAILED...", error);
      setFeedbackMessage("Something went wrong. Please try again.", "failed");
      isFormLoading = false;
      formBtn.innerHTML = "Send";
      formBtn.disabled = isFormLoading;
    }
  );
});
