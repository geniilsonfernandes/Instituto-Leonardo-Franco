import MenuMobile from "./modules/menuMobile.js";
import ReadMore from "./modules/ReadMore.js";

const mobileMenu = new MenuMobile("mobileMenu", "collapseMenu", "menu__open");
mobileMenu.init();

const readme = new ReadMore('[data-readMore="wrapper"]', '[data-readMore="buttom"]');
readme.init();



// scroll top
const button = document.querySelector(".scroolUp");
button.addEventListener("click", () => {
  window.scroll(0, 0);
});

//sliodes home
const odsSlide = new Swiper(".ods__slide", {
  slidesPerView: 1,
  spaceBetween: 8,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

const testimonialSlide = new Swiper(".testimonial__slide", {
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".control__right",
    prevEl: ".control__left",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const partnersSlide = new Swiper(".partners__slide", {
  slidesPerView: 2,
  spaceBetween: 16,
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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".about__slide__pagination",
    clickable: true,
  },
});
