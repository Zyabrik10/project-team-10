import { getBooksByExactCategory, getTopBooks } from "../apis";
import { ListBookItem } from "../components";
import openBookInfoHandler from "./openBookInfoHandler";
import formatTitle from "./utils.formatTitle";

export default async function renderTopBooks(
  booksElement,
  booksSectionTitleElement,
  modal
) {
  const books = await getTopBooks();

  booksElement.innerHTML = "";
  booksSectionTitleElement.innerHTML = formatTitle("Best Sellers Books");

  books.forEach(({ list_name, books }) => {
    if (!list_name) return;

    const listOfBooksElements = books.map((book) => ListBookItem(book));

    const listOfItems = listOfBooksElements.map((link) => {
      // <li><a /></li>
      const li = document.createElement("li");
      li.appendChild(link);
      return li;
    });

    const div = document.createElement("div");
    div.classList.add("book-category-item");

    const h3 = document.createElement("h3");
    h3.innerText = list_name;

    const ul = document.createElement("ul");
    ul.classList.add("books-list");
    ul.classList.add("flex-container");

    listOfItems.forEach((item) => ul.appendChild(item));

    const button = document.createElement("button");
    button.classList.add("see-more");
    button.innerText = "See more";

    div.appendChild(h3);
    div.appendChild(ul);
    div.appendChild(button);

    button.addEventListener("click", async () => {
      const books = await getBooksByExactCategory(list_name);

      books.forEach((book) => {
        const li = document.createElement("li");
        li.appendChild(ListBookItem(book));
        ul.appendChild(li);
      });
      modal.initOpenButtons(openBookInfoHandler);
      button.remove();
    });

    booksElement.appendChild(div);
  });
}
