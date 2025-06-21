import { booksStorage } from '../config';

const noBooks = document.querySelector('.no-books');
export default function toggleNoBooksAlert() {
  if (booksStorage.books.length > 0) {
    noBooks.style.display = 'none';
  } else {
    noBooks.style.display = 'block';
  }
}
