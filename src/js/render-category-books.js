// Рендер однієї секції категорії з книгами
import { fetchBooksByExactCategory, fetchTopBooks } from './fetch-func';


export function renderTopBooks() { }
export function renderCategoryBooks() { }

const categoryList = document.querySelector('.category-list');
const bookThumb = document.querySelector('.book-thumb');
categoryList.addEventListener('click', renderCategoryBooks)
export function renderCategoryBooks(event) {
  const item = event.target.textContent;
  console.log(item)
  bookThumb.innerHTML = '';
  
  fetchBooksByExactCategory(item)
    .then(data => {
      console.log(data)
      const markup = data.map(({ list_name, author, title, book_image }) => {
        return `
        <h2 class="category-title">${list_name}</h2>
        <li class="book-item">
        <img class="book-img" src="${book_image}" alt="${title}">
        <p class="book-title">${title}</p>
        <p>${author}</p>
        </li>`
        
      })
        .join('');
      bookThumb.innerHTML = markup
    }).catch(error => {
    console.log(error)
  })
  }