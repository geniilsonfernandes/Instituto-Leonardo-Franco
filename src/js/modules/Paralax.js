export default class Paralax {
  constructor(btn, menuWrapper, className) {
    this.mobileMenuBtnEl = document.getElementById(btn);
    this.collapseMenu = document.getElementById(menuWrapper);
    this.className = className;
  }

  addMenuMobileEvents() {
    this.mobileMenuBtnEl.addEventListener("click", () => {
      this.collapseMenu.classList.toggle(this.className);
    });
  }

  //     //paralax cover
  // const imageParalaxEl = document.querySelector(".cover__photo");
  // window.addEventListener("scroll", () => {
  //   const scroll = window.scrollY;
  //   imageParalaxEl.style.top = `${scroll * 0.5}px`;
  // });

  


  init() {
    this.addMenuMobileEvents();
  }
}
