export default class MenuMobile {
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

  init() {
    this.addMenuMobileEvents();
  }
}
