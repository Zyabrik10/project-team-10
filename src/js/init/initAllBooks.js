import { booksAPI } from "../config.js";

import renderBookCategoriesList from "../utils/renderBookCategoriesList";

export default function initAllBooks() {
  // Load all books
  booksAPI.getTopBooks().then(renderBookCategoriesList);
}