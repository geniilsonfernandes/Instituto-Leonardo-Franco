export default class ReadMore {
  constructor(readmeWrapper, readmeButton) {
    this.readmeWrapper = document.querySelector(readmeWrapper);
    this.readmeButton = document.querySelector(readmeButton);
    this.readmeMask = null;
    this.stateInital = {
      buttonText: "",
    };
  }

  createMask() {
    const mask = document.createElement("div");
    mask.classList.add("redmore-mask");
    this.readmeMask = mask;
    this.readmeWrapper.appendChild(mask);
  }

  addButtonEvents() {
    this.stateInital.buttonText = this.readmeButton.textContent;
    this.readmeButton.addEventListener("click", (e) => {
      e.preventDefault();
      const totalHeight = this.readmeWrapper.firstElementChild.clientHeight;
      if (this.readmeWrapper.clientHeight < totalHeight) {
        this.readmeWrapper.style.height = `${totalHeight}px`;
        this.readmeMask.style.opacity = "0";
        this.readmeButton.textContent = "Fechar";
      } else {
        this.readmeWrapper.style.height = `300px`;
        this.readmeMask.style.opacity = "1";
        this.readmeButton.textContent = this.stateInital.buttonText;
      }
    });
  }

  init() {
    if (this.readmeWrapper && this.readmeButton) {
      this.createMask();
      this.addButtonEvents();
    }
    return this;
  }
}
