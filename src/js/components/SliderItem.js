export default function SliderItem({
  book_image,
  title = "title not available",
  author = "anonymous",
  _id,
}) {
  if (!book_image) book_image =
    "https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small/illustration-of-book-icon-free-vector.jpg";
  return `
    <a href=# class="books-list-link" data-id="${_id}">
      <div class="book-link-img-box">
        <img class="book-link-img" src="${book_image}" alt="${title}" data-id="${_id}" loading="lazy">
        <p class="book-link-quick-view">quick view</p>
      </div>
      <p class="book-link-title" data-id="${_id}">${title}</p>
      <p class="book-link-author" data-id="${_id}">${author}</p>
    </a>
  `;
}
