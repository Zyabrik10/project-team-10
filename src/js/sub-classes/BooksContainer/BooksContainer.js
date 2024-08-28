export default class BooksContainer {
  constructor(container) {
    this.container = container;
  }

  addBooks(books) {
    const list = books.map(({ author, book_image, title, _id }) => {
      return {
        author,
        book_image,
        title,
        _id,
      };
    });

    this.container.addImages(list);
  }
}