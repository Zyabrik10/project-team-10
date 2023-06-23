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
const loader = document.querySelector('.loader');
loader.classList.add('is-hidden');

categoryList.addEventListener('click', renderCategoryBooks);
setTimeout(e => {
  loader.classList.add('is-hidden');
}, 2500);
async function renderCategoryBooks(event) {
  bookThumb.innerHTML = '';
  loader.classList.remove('is-hidden');
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
    loader.classList.add('is-hidden');

    createMarkupBook(data);
  }
}

function createMarkupBook({ data }) {
  bookThumb.innerHTML = '';
  const markup = data
    .map(
      ({
        list_name,
        book_image = 'https://bookcart.azurewebsites.net/Upload/Default_image.jpg',
        title = 'title not available',
        author = 'anonymous',
        description,
        _id,
      }) => {
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
      }
    )
    .join('');

  bookThumb.innerHTML = markup;
}

// export function renderTopBooks() { }

const noBooksEl = document.querySelector('.no-books-card');

fetchTopBooks().then(renderTopBooks);

export function renderTopBooks({ data }) {
  if (data.length == 0) {
    noBooksEl.classList.remove('is-hidden');
  } else {
    const markupCategory = data
      .map(({ list_name, books }) => {
        const markup = books
          .map(
            ({
              list_name,
              book_image = 'https://bookcart.azurewebsites.net/Upload/Default_image.jpg',
              title = 'title not available',
              author = 'anonymous',
              description,
              _id,
            }) => {
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
            }
          )
          .join('');
        return `
      <li class="tb-category-container">
        <h2 class='tb-category global-title'>${list_name}</h2>
        <div class='tb-books-container'>
          <ul class="global-list flex-container hidden-books">
            ${markup}
          </ul>
        </div>
        <button class="tb-button global-button light-theme theme-switch">See more</button>
      </li>
      `;
      })
      .join('');
    loader.classList.add('is-hidden');

    bookThumb.insertAdjacentHTML('beforeend', markupCategory);
    shopping_info.theme === 'light'
      ? renderTheme('light')
      : renderTheme('dark');
    modalWindow();
  }
}

bookThumb.addEventListener('click', onSeeMoreClick);

async function onSeeMoreClick(event) {
  if (event.target.matches('button')) {
    let bookTitle = event.target.closest('.tb-category-container').firstChild
      .nextSibling.textContent;
    let categoryContainer = event.target.closest('.tb-category-container')
      .firstChild.nextSibling.nextSibling.nextSibling;
    const data = await fetchBooksByExactCategory(bookTitle);
    createMarkupSeeMore(data, categoryContainer);
    event.target.classList.add('is-hidden');
    loader.classList.add('is-hidden');
  }
}

function createMarkupSeeMore({ data }, categoryContainer) {
  const markup = data
    .map(
      ({
        list_name,
        book_image = 'https://bookcart.azurewebsites.net/Upload/Default_image.jpg',
        title = 'title not available',
        author = 'anonymous',
        description,
        _id,
      }) => {
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
      }
    )
    .join('');
  const seeMoreMarkup = `<ul class="global-list flex-container">
            ${markup}
          </ul>`;
  categoryContainer.innerHTML = seeMoreMarkup;
  shopping_info.theme === 'light'
      ? renderTheme('light')
      : renderTheme('dark');
}
