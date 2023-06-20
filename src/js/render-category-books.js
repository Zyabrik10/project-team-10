// Рендер однієї секції категорії з книгами
import { fetchBooksByExactCategory, fetchTopBooks } from './fetch-func';

export function renderCategoryBooks() {}

import { modalWindow } from './modal-window';
import { shopping_info } from './shopping-list';
import { renderTheme } from './switch-theme';
// export function renderCategoryBooks() { }

const categoryList = document.querySelector('.category-list');
const bookThumb = document.querySelector('.tb-container');
const headingEl = document.querySelector('.heading-primary');
const loader = document.querySelector('.loader');
categoryList.addEventListener('click', renderCategoryBooks);
setTimeout(e => {
  loader.classList.add('spinner');
}, 2000);
async function renderCategoryBooks(event) {
  loader.classList.remove('spinner');
  const item = event.target.textContent;
  console.log(item);
  headingEl.textContent = item;
  headingEl.classList.add('ctg-maintitle');
  bookThumb.classList.add('flex-container');

  const data = await fetchBooksByExactCategory(item);
  loader.classList.add('spinner');

  createMarkupBook(data);
}

function createMarkupBook({ data }) {
  bookThumb.innerHTML = '';
  const markup = data
    .map(({ author, title, book_image, _id }) => {
      return `
          <li class="flex-container-item">
            <a href=# class="global-link" data-id="${_id}">
              <div class="tb-book-card">
                <img class="tb-book-img img" src="${book_image}" alt="${title}" loading="lazy">
                <p class="tb-book-title light-theme theme-switch global-p">${title}</p>
                <p class="tb-book-author global-p">${author}</p>
              </div>
            </a>
          </li>`;
    })
    .join('');

  bookThumb.innerHTML = markup;
}

// export function renderTopBooks() { }

const noBooksEl = document.querySelector('.no-books-card');

fetchTopBooks().then(renderTopBooks);

export function renderTopBooks(bestsellersArray) {
  if (bestsellersArray.data.length == 0) {
    noBooksEl.classList.remove('is-hidden');
  } else {
    const markupCategory = bestsellersArray.data
      .map(({ list_name, books }) => {
        const markup = books
          .map(({ author, title, book_image, _id }) => {
            return `
          <li class="flex-container-item">
            <a href=# class="global-link" data-id="${_id}">
              <div class="tb-book-card">
                <img class="tb-book-img img" src="${book_image}" alt="${title}" loading="lazy">
                <p class="tb-book-title light-theme theme-switch global-p">${title}</p>
                <p class="tb-book-author global-p">${author}</p>
              </div>
            </a>
          </li>
          `;
          })
          .join('');
        return `
      <li class="tb-category-container">
        <h2 class='tb-category global-title'>${list_name}</h2>
        <div class='tb-books-container'>
          <ul class="global-list flex-container">
            ${markup}
          </ul>
        </div>
        <button class="tb-button global-button light-theme theme-switch">See more</button>
      </li>
      `;
      })
      .join('');

    bookThumb.insertAdjacentHTML('beforeend', markupCategory);
    shopping_info.theme === 'light'
      ? renderTheme('light')
      : renderTheme('dark');
    modalWindow();
  }
}
