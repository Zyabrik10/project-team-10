// Рендер однієї секції категорії з книгами
import { fetchBooksByExactCategory, fetchTopBooks } from './fetch-func';

// export function renderCategoryBooks() { }

const categoryList = document.querySelector('.category-list');
const bookThumb = document.querySelector('.tb-container');
const headingEl = document.querySelector('.heading-primary')

categoryList.addEventListener('click', renderCategoryBooks);
async function renderCategoryBooks(event) {
  const item = event.target.textContent;
  headingEl.textContent = item;
  headingEl.classList.add('ctg-maintitle');
  console.log(item);
  const data = await fetchBooksByExactCategory(item);
  console.log(data);
  createMarkupBook(data);
}
function createMarkupBook({ data }) {
  bookThumb.innerHTML = '';
    const markup = data.map(({ author, title, book_image }) => {
      return `
    <li class="book-item flex-container-item">
    <img class="book-img tb-book-img img" src="${book_image}" alt="${title}">
    <p class="book-title tb-book-author global-p">${title}</p>
    <p>${author}</p>
    </li>`
    
    })
      .join('');
  bookThumb.innerHTML = markup;
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
