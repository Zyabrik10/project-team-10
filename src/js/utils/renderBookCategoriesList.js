/* 

<div class="books-item">
  <h3 class='books-item-title'>${list_name}</h3>
  <div class="books-item-sublist flex-container">
  ${markup}
  </div>
  <button class="book-item-button" data-name="">See more</button>
</div>

*/


import { Lightbox } from "../classes/Lightbox";
import { booksAPI } from "../config";
import addBooksToContainer from "./addBooksToContainer";

const allBooksContainer = document.querySelector(".all-books-container");
const booksListTitle = document.querySelector(".heading-primary");

export default function renderBookCategoriesList(data) {
  allBooksContainer.innerHTML = "";

  booksListTitle.innerHTML = `<h1 class="heading-primary">Best Sellers <span class="colored-heading">Books</span></h1>`;
    
  data.forEach(function ({ list_name, books }, index) {
    const container = document.createElement("div");
    container.classList.add("books-item");

    const title = document.createElement("h3");
    title.classList.add("books-item-title");
    title.textContent = list_name;

    const containerSubList = document.createElement("div");
    containerSubList.classList.add("books-item-sublist");
    containerSubList.classList.add("flex-container");
    containerSubList.classList.add("books-container");
    containerSubList.id = `id-${index}`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "See more";
    button.classList.add("book-item-button");

    container.appendChild(title);
    container.appendChild(containerSubList);
    container.appendChild(button);
    allBooksContainer.appendChild(container);

    const cardBox = new Lightbox();
    cardBox.init(`.books-item-sublist#id-${index}`);

    cardBox.addImages(books);

    button.addEventListener("click", function () {
      booksAPI.getBooksByExactCategory(list_name).then((books) => {
        cardBox.clearImages();
        addBooksToContainer(books, cardBox);
        button.remove();
      });
    });
  });
}
