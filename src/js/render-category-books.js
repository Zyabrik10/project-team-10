// Рендер однієї секції категорії з книгами
import { fetchBooksByExactCategory, fetchTopBooks } from './fetch-func';

export function renderCategoryBooks() {}

const containerEl = document.querySelector(".bestseller-container")

fetchTopBooks().then(renderTopBooks)


export function renderTopBooks(bestsellersArray) {

  const markup1 = bestsellersArray.map(({ list_name, books }) => {
    const markup = books.map(({ author, title, book_image }) => {
      return `<div class="tb-book-card">
      <img class="tb-book-img img" src="${book_image}" alt="${title}">
      <p class="tb-book-title">${title}</p>
      <p class="tb-book-author">${author}</p>
      </div>`
    }).join('')
    return `<h2 class='tb-category'>${list_name}</h2>
    <div class='tb-books-container'>${markup}</div>
    <button class="button">See more</button>`
  }).join('')

containerEl.insertAdjacentHTML('beforeend', markup1)

}
