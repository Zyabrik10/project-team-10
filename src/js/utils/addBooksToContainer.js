export default function addBooksToContainer(books, cardBox) {
  const list = books.map(({ author, book_image, title, _id }) => {
    return {
      author,
      book_image,
      title,
      _id,
    };
  });

  cardBox.addImages(list);
}
