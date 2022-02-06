import MenuMobile from "./modules/menuMobile.js";
import ReadMore from "./modules/ReadMore.js";

import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";
const mobileMenu = new MenuMobile("mobileMenu", "collapseMenu", "menu__open");
mobileMenu.init();

const readme = new ReadMore(
  '[data-readMore="wrapper"]',
  '[data-readMore="buttom"]'
);
readme.init();

// scroll top
const button = document.querySelector(".scroolUp");
button.addEventListener("click", () => {
  window.scroll(0, 0);
});

const partnersSlide = new Swiper(".partners__slide", {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});

const aboutSlide = new Swiper(".about__slide", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".about__slide__pagination",
    clickable: true,
  },
});

//

const transparencyButtonExpand = document.getElementById("expand_button");
const transparencyExpandArea = document.getElementById("expand_area");
const transparencyExpandIcon = document.getElementById("expand_icon");

transparencyButtonExpand.addEventListener("click", () => {
  transparencyExpandArea.classList.toggle("open");
  transparencyExpandIcon.classList.toggle("open");
});
