// Логіка, яка рендерить список категорій
// Визиваеться одразу в index.js
import { fetchAllCategories } from './fetch-func';
import { shopping_info } from './shopping-list';

import { renderTheme } from './switch-theme';
import Notiflix from 'notiflix';

const categoryList = document.querySelector('.category-list');
const loadCategory = document.querySelector('.load');
const loader = document.querySelector('.loader');

fetchAllCategories()
  .then(data => {
    loader.classList.remove('is-hidden');

    const markup = data
      .map(({ list_name }) => {
        return `<li class="category-list-item global-list light-theme theme-switch">${list_name}</li>`;
      })
      .join('');
    categoryList.insertAdjacentHTML('beforeend', markup);

    const lis = document.querySelectorAll('.category-list-item');

    lis.forEach(e => {
      e.addEventListener('click', activatedCategory);
      loader.classList.remove('is-hidden');

      function activatedCategory() {
        lis.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
      }
    });

    shopping_info.theme === 'light'
      ? renderTheme('light')
      : renderTheme('dark');

    loadCategory.classList.add('unvisible');
  })
  .catch(error => {
    console.log(error);
  });
