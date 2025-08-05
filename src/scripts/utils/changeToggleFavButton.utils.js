import { Notify } from 'notiflix';
import {addFavBook, removeFavBook } from './user-fav-books.utils';

export default async function changeToggleFavButton(button, bookId, hasBook){
    const congElement = document.querySelector('#book-info .cong');
    
    const newBooks = hasBook === 'true' ? await removeFavBook(bookId) : await addFavBook(bookId);
    if (!newBooks) {
        Notify.failure("Can't add this book to shopping-cart");
        return;
    }
    hasBook !== 'true' ? congElement.classList.add('active') : congElement.classList.remove('active');
    button.innerText = hasBook !== 'true' ? 'remove from shopping list' : 'add to shopping list';
    button.dataset.hasBook = hasBook !== 'true';

}