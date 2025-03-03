import { Modal } from '../../components';
import { user } from '../../config';

export default class LightboxModal {
  static instance = null;

  closeOnMouseDown({ target }) {
    if (!target.classList.contains('book-modal-wrapper')) return;

    this.closeModal();
    this.element.removeEventListener(
      'mousedown',
      this.closeOnMouseDown.bind(this)
    );
  }

  initCloseButton() {
    this.element = document.querySelector(`.book-modal-wrapper`);

    const closeButton = this.element.querySelector(`.book-modal-close-button`);
    closeButton.addEventListener('click', this.closeModal.bind(this));
  }

  initElement() {
    document.body.insertAdjacentHTML('beforeend', Modal());
    this.element = document.querySelector('.book-modal-wrapper');

    this.element.addEventListener(
      'mousedown',
      this.closeOnMouseDown.bind(this)
    );
  }

  init() {
    this.initElement();
    this.initCloseButton();

    this.imageElement = this.element.querySelector('.book-modal-wrapper-img');

    this.bookIcon = this.element.querySelector('.book-modal-book-icon');
    this.bookAuthor = this.element.querySelector('.book-modal-book-author');
    this.bookTitle = this.element.querySelector('.book-modal-book-title');
    this.bookDescr = this.element.querySelector('.book-modal-book-description');
    this.shopLinks = this.element.querySelectorAll('.book-modal-shop-link');
    this.addButton = this.element.querySelector('.book-modal-add-button');
    this.congratulation = this.element.querySelector(
      '.book-modal-text-congratulation'
    );

    this.booksStorage = user.booksStorage;

    this.addButton.addEventListener('click', ({ currentTarget }) => {
      const id = currentTarget.dataset.id;
      if (!this.doesBookPresent) {
        this.congratulation.classList.add('active');
        this.doesBookPresent = true;
        this.addButton.textContent = 'REMOVE FROM SHOPING LIST';
        this.booksStorage.addBook(id);
      } else {
        this.congratulation.classList.remove('active');
        this.doesBookPresent = false;
        this.addButton.textContent = 'ADD TO SHOPING LIST';
        this.booksStorage.removeBookById(id);
      }
    });

    this.windowKeyDownHandler = this.keydownHandler.bind(this);
  }

  render({ book_image, author, title, description, buy_links, _id }) {
    if (!book_image)
      book_image =
        'https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small/illustration-of-book-icon-free-vector.jpg';

    this.bookIcon.src = book_image;
    this.bookAuthor.textContent = author;
    this.bookTitle.textContent = title;

    if (description.trim().length === 0) {
      this.bookDescr.textContent = 'No description';
    } else {
      this.bookDescr.textContent = description;
    }

    buy_links.forEach(
      function ({ url }, index) {
        if (index > 1) return;
        this.shopLinks[index].src = url;
      }.bind(this)
    );

    this.addButton.setAttribute('data-id', _id);

    if (this.booksStorage.doesBookPresent(_id)) {
      this.congratulation.classList.add('active');
      this.doesBookPresent = true;
      this.addButton.textContent = 'REMOVE FROM SHOPING LIST';
    } else {
      this.congratulation.classList.remove('active');
      this.doesBookPresent = false;
      this.addButton.textContent = 'ADD TO SHOPING LIST';
    }
  }

  static getInstance() {
    if (LightboxModal.instance !== null) return LightboxModal.instance;

    LightboxModal.instance = new LightboxModal();
    LightboxModal.instance.init();
    this.doesBookPresent = false;

    return LightboxModal.instance;
  }

  closeModal() {
    this.element.classList.remove('active');
    window.removeEventListener('keydown', this.windowKeyDownHandler);
    document.body.classList.remove('locked');
  }

  keydownHandler({ key }) {
    if (key === 'Escape') this.closeModal();
  }
}
