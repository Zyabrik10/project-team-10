// Треба описати функції
// Потім їх можна буде використовувати при імпорті в нших файлах

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
export function fetchBooksByExactCategory() {}

//REST API: https://books-backend.p.goit.global/books/top-books
export function fetchTopBooks() {}
