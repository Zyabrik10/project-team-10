import { booksAPI, bookCategories } from "../config";
import cardBox from "../config/cardBox";
import {
  renderOneBookCategorie,
  renderBookCategoriesList,
} from "../utils";
import { CategoryItem } from "../components/";

export default function initAsideBooksCategories() {
  // init and render book categories in aside and set event listener for opening this category
  booksAPI.getAllBooksCategories().then((data) => {
    bookCategories.init(".category-list", CategoryItem);
    bookCategories.render(data);

    function itemHandler(e) {
      let item = e.target;

      if (item.classList.contains("category-item")) {
        item = item.querySelector(".category-link");
      }

      if (item.classList.contains("all")) {
        cardBox.clearImages();
        booksAPI.getTopBooks().then(renderBookCategoriesList);

        return;
      }

      const category = item.dataset.name;

      booksAPI.getBooksByExactCategory(category).then((data) => {
        document.querySelector(".all-books-container").innerHTML = "";
        renderOneBookCategorie(data);
      });

      document
        .querySelectorAll(".category-link")
        .forEach((e) => e.classList.remove("active"));
      item.classList.add("active");
    }

    bookCategories.categoryList.addEventListener("click", itemHandler);
  });
}
