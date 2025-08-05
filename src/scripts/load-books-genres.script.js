import { getAllBooksCategories } from "./apis";

(async () => {
  const categories = await getAllBooksCategories();
  const categoryListElement = document.querySelector(".category-list");

  categories.forEach(({ list_name }) => {
    if (!list_name) return;

    categoryListElement.insertAdjacentHTML(
      "beforeend",
      `<li>
        <input type='radio' name='categories' id='${list_name}' />
        <label data-category="${list_name}" for='${list_name}'>${list_name}</label>
       </li>
       `
    );
  });
})();
