// menu mobile
const mobileMenuBtnEl = document.getElementById("mobileMenu");
const collapseMenu = document.getElementById("collapseMenu");

mobileMenuBtnEl.addEventListener("click", () => {
  collapseMenu.classList.toggle("menu__open");
});

//paralax cover
const imageParalaxEl = document.querySelector(".cover__photo");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  imageParalaxEl.style.top = `${scroll * 0.5}px`;
});
// scroll top
const button = document.querySelector(".scroolUp");

button.addEventListener("click", () => {
  window.scroll(0, 0);
});

function scrollTo() {
  console.log("554");
}

// - / - //

const swiper = new Swiper(".ods__slide", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
const testimonialSwiper = new Swiper(".testimonial__slide", {
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
