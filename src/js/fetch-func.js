// Треба описати функції
// Потім їх можна буде використовувати при імпорті в нших файлах
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books/';

//REST API: books-backend.p.goit.global/books/category-list
export function fetchAllCategories() {}

//REST API: books-backend.p.goit.global/books/bookId
export async function fetchExactBook(id) {
  return await axios.get(`${id}`);
}

//REST API: https://books-backend.p.goit.global/books/category?category=$
export function fetchBooksByExactCategory() {}

//REST API: https://books-backend.p.goit.global/books/top-books

import axios from 'axios';

export async function fetchTopBooks() {
  try {
    return await axios.get('', {
      baseURL: 'https://books-backend.p.goit.global/books/top-books',
    });
  } catch (error) {
    console.error(error);
  }
}
