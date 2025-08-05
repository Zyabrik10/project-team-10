import {openBookInfoHandler, renderBookCategory, formatTitle, renderTopBooks} from "./utils";
import { ModalWindow } from "./classes";

(async () => {
  const booksSectionElement = document.querySelector(".books-section");
  const booksElement = booksSectionElement.querySelector(".books");
  const booksSectionTitleElement = booksSectionElement.querySelector("h2");
  const categoryListElement = document.querySelector(".category-list");

  const modalBookInfo = new ModalWindow("book-info");

  await renderTopBooks(booksElement, booksSectionTitleElement, modalBookInfo);

  modalBookInfo.init(openBookInfoHandler);

  categoryListElement.addEventListener("click", async ({ target }) => {
    if (target.tagName !== "LABEL") return;

    const categoryTitle = target.dataset.category;

    if (categoryTitle === "all") {
      await renderTopBooks(booksElement, booksSectionTitleElement);
      modalBookInfo.initOpenButtons(openBookInfoHandler);
      return;
    }

    await renderBookCategory(categoryTitle);
    modalBookInfo.initOpenButtons(openBookInfoHandler);
    booksSectionTitleElement.innerHTML = formatTitle(categoryTitle);
  });
})();
