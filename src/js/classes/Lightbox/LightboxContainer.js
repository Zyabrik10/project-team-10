import {booksAPI} from "../../config";
import { SliderItem } from "../../components";

export default class LightboxContainer {
  constructor(selector, modal) {
    this.container = document.querySelector(selector);
    this.container.addEventListener("click", this.openModalWindow.bind(this));

    this.modal = modal;
  }

  openModalWindow(e) {
    e.preventDefault();

    const { target, currentTarget } = e;

    if (target === currentTarget) return;

    booksAPI.getBookBookById(target.dataset.id).then((data) => {
      this.modal.element.classList.add("active");
      this.modal.render({...data, _id: target.dataset.id});
    });

    document.body.classList.add("locked");

    window.addEventListener("keydown", this.modal.windowKeyDownHandler);
  }

  add(imagesData) {
    const images = imagesData
      .map((obj) => {
        return SliderItem(obj);
      })
      .join("\n");

    this.container.insertAdjacentHTML("beforeend", images);
  }

  clear() {
    this.container.innerHTML = "";
  }
}
