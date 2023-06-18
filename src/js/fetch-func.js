// Треба описати функції
// Потім їх можна буде використовувати при імпорті в нших файлах
import axios from 'axios';

//REST API: books-backend.p.goit.global/books/category-list
const BASE_URL = 'https://books-backend.p.goit.global';
export function fetchAllCategories() {
    return fetch(`${BASE_URL}/books/category-list`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
      console.log(response);
        return response.json();
    })
}

//REST API: books-backend.p.goit.global/books/bookId
export function fetchExactBook() {}

//REST API: https://books-backend.p.goit.global/books/category?category=$

export async function fetchBooksByExactCategory(item) {
  try {
    const response = await axios(`${BASE_URL}/books/category?category=${item}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//REST API: https://books-backend.p.goit.global/books/top-books


