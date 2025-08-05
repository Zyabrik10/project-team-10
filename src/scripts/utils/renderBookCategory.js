import { getBooksByExactCategory } from "../apis";
import { ListBookItem } from "../components";

export default async function renderBookCategory(category){
    const books = await getBooksByExactCategory(category);
    const booksElement = document.querySelector('.books');
    
    const booksItems = books.map((book)=> ListBookItem(book));

    const listBookItems = booksItems
      .map((link) => {
        // <li><a /></li>
        const li = document.createElement('li');
        li.appendChild(link);
        return li;
    });

    const ul = document.createElement('ul');
    ul.classList.add('books-list');
    ul.classList.add('flex-container');

    listBookItems.forEach(item => ul.appendChild(item));

    booksElement.innerHTML = '';
    booksElement.appendChild(ul);
}