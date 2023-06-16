// Треба описати функції
// Потім їх можна буде використовувати при імпорті в нших файлах

//REST API: books-backend.p.goit.global/books/category-list
export function fetchAllCategories() {}

//REST API: books-backend.p.goit.global/books/bookId
export function fetchExactBook() {}

//REST API: https://books-backend.p.goit.global/books/category?category=$
export function fetchBooksByExactCategory() {}

//REST API: https://books-backend.p.goit.global/books/top-books
export function fetchTopBooks() {
  return fetch('https://books-backend.p.goit.global/books/top-books').then(response => {
  return response.json();
})
}
