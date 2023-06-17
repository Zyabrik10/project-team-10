// Рендер однієї секції категорії з книгами
import { fetchBooksByExactCategory, fetchTopBooks } from './fetch-func';

// export function renderCategoryBooks() {}

const containerTbEl = document.querySelector('.tb-container');

fetchTopBooks().then(renderTopBooks);

export function renderTopBooks(bestsellersArray) {
  const markup1 = bestsellersArray.data
    .map(({ list_name, books }) => {
      const markup = books
        .map(({ author, title, book_image, _id }) => {
          return `
          <li class="flex-container-item">
            <a href=# class="global-link" data-id="${_id}">
              <div class="tb-book-card">
                <img class="tb-book-img img" src="${book_image}" alt="${title}">
                <p class="tb-book-title light-theme theme-switch global-p">${title}</p>
                <p class="tb-book-author global-p">${author}</p>
              </div>
            </a>
          </li>
          `;
        })
        .join('');
      return `
      <div class="tb-category-container">
        <h2 class='tb-category global-title'>${list_name}</h2>
        <div class='tb-books-container'>
          <ul class="global-list flex-container">
            ${markup}
          </ul>  
        </div>
        <button class="tb-button global-button light-theme theme-switch">See more</button>
      </div>
      `;
    })
    .join('');

  containerTbEl.insertAdjacentHTML('beforeend', markup1);
}
