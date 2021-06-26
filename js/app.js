// menu mobile
const mobileMenuBtnEl = document.getElementById("mobileMenu");
const collapseMenu = document.getElementById("collapseMenu");

mobileMenuBtnEl.addEventListener("click", () => {
  collapseMenu.classList.toggle("menu__open");
});

//paralax
const imageParalaxEl = document.querySelector(".cover__photo");

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  imageParalaxEl.style.top = `${scroll * 0.5}px`;
});
const slides = document.querySelectorAll(".ods__card");
