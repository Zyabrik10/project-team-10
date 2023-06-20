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
const allCtgrEl = document.querySelector('#allctgr');

categoryList.addEventListener('click', renderCategoryBooks);
async function renderCategoryBooks(event) {
  const item = event.target.textContent;
  const itemFirst = allCtgrEl.textContent;

  if (item === itemFirst) {
    bookThumb.innerHTML = '';
    fetchTopBooks().then(renderTopBooks);
    const headingMarkup = 'Best Sellers Books';
    const startHeading = headingMarkup
      .split(' ')
      .splice(0, headingMarkup.split(' ').length - 1)
      .join(' ');
    const endHeading =
      headingMarkup.split(' ')[headingMarkup.split(' ').length - 1];
    headingEl.innerHTML = `${startHeading} <span class="colored-heading">${endHeading}</span>`;
  } else {
    const startHeading = item
      .split(' ')
      .splice(0, item.split(' ').length - 1)
      .join(' ');
    const endHeading = item.split(' ')[item.split(' ').length - 1];
    headingEl.innerHTML = `${startHeading} <span class="colored-heading">${endHeading}</span>`;
    headingEl.classList.add('ctg-maintitle');
    bookThumb.classList.add('flex-container');

    const data = await fetchBooksByExactCategory(item);
    createMarkupBook(data);
  }
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
        const idCategory = list_name.toLowerCase().replace(/\s/g, "");
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
        <h2 class='tb-category global-title' id="${idCategory}">${list_name}</h2>
        <div class='tb-books-container'>
          <ul class="global-list flex-container tb-books-container">
            ${markup}
          </ul>
        </div>
        <button class="tb-button global-button light-theme theme-switch" id="${idCategory}">See more</button>
      </li>
      `;
      })
      .join('');

    const headingMarkup = 'Best Sellers Books'
    const startHeading = headingMarkup
        .split(' ')
        .splice(0, headingMarkup.split(' ').length - 1)
        .join(' ');
    const endHeading = headingMarkup
      .split(' ')[headingMarkup.split(' ').length - 1];
    headingEl.innerHTML = `${startHeading} <span class="colored-heading">${endHeading}</span>`
    bookThumb.insertAdjacentHTML('beforeend', markupCategory);
    shopping_info.theme === 'light'
      ? renderTheme('light')
      : renderTheme('dark');
    modalWindow();
  }
}

bookThumb.addEventListener('click', onSeeMoreClick)

 function onSeeMoreClick(event) {
   if (event.target.matches('button')) {
    console.log('button');
     const categories = document.querySelectorAll('.tb-category')
    categories.forEach(async function (el) {
      if (el.id == event.target.id) {
        const item = el.innerHTML;
        headingEl.textContent = item;
        bookThumb.classList.add('flex-container');
        const data = await fetchBooksByExactCategory(item);
        createMarkupBook(data);
      }
    })
  }
}


