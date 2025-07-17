import { booksStorage } from '../config';

const shoppingCarts = document.querySelectorAll('.shopping-cart');

export default function renderShoppingListAmount() {
  const booksLength = booksStorage.books.length;
  shoppingCarts.forEach(e => {
    e.textContent = booksLength;
  });
}
