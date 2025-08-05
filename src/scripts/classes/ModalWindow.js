export default class ModalWindow {
  constructor(modalId) {
    this.modalId = modalId;
    this.mw = document.getElementById(this.modalId);

    if (!this.mw) throw new Error(`No ${this.modalId} element was found`);

    this.hideModalWindowOnEscapeEnv = this.hideModalWindowOnEscape.bind(this);
    this.openModalWindowButtonHandler = this.showModalWindow.bind(this);
    this.openModalWindowButtons = [];
  }

  init(callbackBefore) {
    this.initCloseModalWindow();
    this.initOpenButtons(callbackBefore);
  }

  initCloseModalWindow() {
    // Close modal by clicking on button
    this.closeModalWindowButton = this.mw.querySelector(
      'button[data-role="close"]'
    );

    if (!this.closeModalWindowButton)
      throw new Error(`No button[data-role="close"] element was found`);

    this.closeModalWindowButton.addEventListener(
      "click",
      this.hideModalWindow.bind(this)
    );

    // close modal by clicking on empty space
    this.mw.addEventListener("mousedown", ({ target, currentTarget }) => {
      if (target !== currentTarget) return;

      this.hideModalWindow();
    });
  }

  initOpenButtons(callbackBefore) {
    // remove event listeners from buttons
    this.openModalWindowButtons.forEach((button) => {
      button.removeEventListener("click", this.openModalWindowButtonHandler);
    });

    this.openModalWindowButtonHandler = (async function (e){
      e.preventDefault();
      if (typeof callbackBefore === 'function') await callbackBefore(e, this);
      this.showModalWindow();
    }).bind(this);

    // open modal by clicking on buttons
    this.openModalWindowButtons = document.querySelectorAll(
      `[data-modal-id="${this.modalId}"]`
    );

    this.openModalWindowButtons.forEach((button) => {
      button.addEventListener("click", this.openModalWindowButtonHandler);
    });
  }

  hideModalWindow() {
    this.mw.classList.remove("active");
    window.removeEventListener("keydown", this.hideModalWindowOnEscapeEnv);
    document.documentElement.style.overflow = "auto";
  }

  hideModalWindowOnEscape({ key }) {
    if (key !== "Escape") return;
    this.hideModalWindow();
  }

  showModalWindow() {
    this.mw.classList.add("active");
    window.addEventListener("keydown", this.hideModalWindowOnEscapeEnv);
    document.documentElement.style.overflow = "hidden";
  }
}
