// Логіка, яка рендерить список категорій
// Визиваеться одразу в index.js
import { fetchAllCategories } from './fetch-func';
import { shopping_info } from './shopping-list';

import { renderTheme } from './switch-theme';

const categoryList = document.querySelector('.category-list');
const loadCategory = document.querySelector('.load');

fetchAllCategories()
  .then(data => {
    const markup = data
      .map(({ list_name }) => {
        return `<li class="category-list-item global-list light-theme theme-switch">${list_name}</li>`;
      })
      .join('');
    categoryList.insertAdjacentHTML('beforeend', markup);
    shopping_info.theme === 'light'
      ? renderTheme('light')
      : renderTheme('dark');
    loadCategory.classList.add('unvisible');
  })
  .catch(error => {
    console.log(error);
  });
