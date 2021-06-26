export default class Menu {
    constructor(menuBtn, wrapper, classCss) {
      this.menuBtn = document.querySelector(menuBtn);
      this.wrapper = document.querySelector(wrapper);
      this.classCss= classCss
    }
}