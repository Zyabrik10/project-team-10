// Треба описати функції
// Потім їх можна буде використовувати при імпорті в нших файлах

//REST API: books-backend.p.goit.global/books/category-list
export function fetchAllCategories() {}

//REST API: books-backend.p.goit.global/books/bookId
export function fetchExactBook() {}

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
