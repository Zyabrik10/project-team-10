import LightboxContainer from "./LightboxContainer";
import LightboxModal from "./LightboxModal";

export default class Lightbox {
  init(containerSelector) {
    this.lightboxModal = LightboxModal.getInstance();
    this.lightboxContainer = new LightboxContainer(
      containerSelector,
      this.lightboxModal
    );
  }

  addImages(imagesData) {
    this.lightboxContainer.add(imagesData);
  }

  clearImages() {
    this.lightboxContainer.clear();
  }
}
