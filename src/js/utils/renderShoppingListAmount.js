import { user } from "../config";

const shoppingCarts = document.querySelectorAll(".shopping-cart");

export default function renderShoppingListAmount() {
  const { booksStorage } = user;

  const booksLength = booksStorage.books.length;
    shoppingCarts.forEach((e) => {
    e.textContent = booksLength;
  });
}
