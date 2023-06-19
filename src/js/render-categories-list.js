// Логіка, яка рендерить список категорій
// Визиваеться одразу в index.js
import { fetchAllCategories } from './fetch-func';

const categoryList = document.querySelector('.category-list');
const loadCategory = document.querySelector('.load');

fetchAllCategories()
  .then(data => {
    // console.log(data);
    const markup = data
      .map(({ list_name }) => {
        return `<li class="category-list-item global-list light-theme theme-switch">${list_name}</li>`;
      })
      .join('');
    categoryList.insertAdjacentHTML('beforeend', markup);
    loadCategory.classList.add('unvisible');
  })
  .catch(error => {
    console.log(error);
  });
