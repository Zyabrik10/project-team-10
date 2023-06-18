// Рендер однієї секції категорії з книгами
import { fetchBooksByExactCategory, fetchTopBooks } from './fetch-func';

// export function renderCategoryBooks() { }

const categoryList = document.querySelector('.category-list');
const bookThumb = document.querySelector('.book-thumb');

categoryList.addEventListener('click', renderCategoryBooks);
async function renderCategoryBooks(event) {
  const item = event.target.textContent;
  console.log(item);
  const data = await fetchBooksByExactCategory(item);
  console.log(data);
  createMarkupBook(data);
}
function createMarkupBook({ data }) {
  bookThumb.innerHTML = '';
  const markupBook = data
    .map(({ list_name }) => {
      const markup = data
        .map(({ author, title, book_image }) => {
          return `
        <li class="book-item">
        <img class="book-img" src="${book_image}" alt="${title}">
        <p class="book-title">${title}</p>
        <p>${author}</p>
        </li>`;
        })
        .join('');
      return `

    <h2 class="category-title">${list_name}</h2>
    <ul>${markup}</ul>
    `;
    })
    .join('');
  bookThumb.innerHTML = markupBook;
  console.log(markupBook);
}



// export function renderTopBooks() { }

const containerTbEl = document.querySelector('.tb-container');

fetchTopBooks().then(renderTopBooks);

export function renderTopBooks(bestsellersArray) {
  const markup1 = bestsellersArray.data
    .map(({ list_name, books }) => {
      const markup = books
        .map(({ author, title, book_image, _id }) => {
          return `<a href=# class="global-link" data-id="${_id}"><div class="tb-book-card">
      <img class="tb-book-img img" src="${book_image}" alt="${title}">
      <p class="tb-book-title light-theme theme-switch">${title}</p>
      <p class="tb-book-author">${author}</p>
      </div></a>`;
        })
        .join('');
      return `<div class="tb-category-container">
    <h2 class='tb-category'>${list_name}</h2>
    <div class='tb-books-container'>${markup}</div>
    <button class="tb-button global-button">See more</button>
    </div>
    `;
    })
    .join('');

  containerTbEl.insertAdjacentHTML('beforeend', markup1);
}
