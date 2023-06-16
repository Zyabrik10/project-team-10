// Рендер однієї секції категорії з книгами
import { fetchBooksByExactCategory, fetchTopBooks } from './fetch-func';

// export function renderCategoryBooks() {}

const containerTbEl = document.querySelector(".tb-container")

fetchTopBooks().then(renderTopBooks)

export function renderTopBooks(bestsellersArray) {
  console.log(bestsellersArray);
  const markup1 = bestsellersArray.map(({ list_name, books }) => {
    const markup = books.map(({ author, title, book_image }) => {
      return `<a href=# class="global-link"><div class="tb-book-card">
      <img class="tb-book-img img" src="${book_image}" alt="${title}">
      <p class="tb-book-title">${title}</p>
      <p class="tb-book-author">${author}</p>
      </div></a>`
    }).join('')
    return `<div class="tb-category-container">
    <h2 class='tb-category'>${list_name}</h2>
    <div class='tb-books-container'>${markup}</div>
    <button class="tb-button global-button">See more</button>
    </div>
    `
  }).join('')

  containerTbEl.insertAdjacentHTML('beforeend', markup1)

}

