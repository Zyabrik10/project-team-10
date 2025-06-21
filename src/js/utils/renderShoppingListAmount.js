import { booksStorage } from '../config';

const shoppingCarts = document.querySelectorAll('.shopping-cart');

export default function renderShoppingListAmount() {
  const booksLength = booksStorage.getBooks().length;
  shoppingCarts.forEach(e => {
    e.textContent = booksLength;
  });
}
