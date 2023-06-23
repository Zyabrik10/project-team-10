// Треба описати функції
// Потім їх можна буде використовувати при імпорті в нших файлах
import axios from 'axios';
import Notiflix from 'notiflix';

//REST API: books-backend.p.goit.global/books/category-list
const BASE_URL = 'https://books-backend.p.goit.global';
export function fetchAllCategories() {
  return fetch(`${BASE_URL}/books/category-list`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export async function fetchTopBooks() {
  try {
    return await axios.get('', {
      baseURL: 'https://books-backend.p.goit.global/books/top-books',
    });
  } catch (error) {
    Notiflix.Notify.failure('Sorry, something is wrong. Please try later.');
    console.error(error);
  }
}

//REST API: books-backend.p.goit.global/books/bookId
export function fetchExactBook() {}

//REST API: https://books-backend.p.goit.global/books/category?category=$

export async function fetchBooksByExactCategory(item) {
  try {
    const response = await axios(`${BASE_URL}/books/category?category=${item}`);
    return response;
  } catch (error) {
    Notiflix.Notify.failure('Sorry, something is wrong. Please try later.');
  }
}

//REST API: https://books-backend.p.goit.global/books/top-books

export async function fetchBook(dataId) {
  try {
    const response = await axios.get(`${BASE_URL}/books/${dataId}`);
    return response.data;
  } catch (error) {
    Notiflix.Notify.failure('Sorry, something is wrong. Please try later.');
    console.error(error);
    throw error;
  }
}
