import { localStorageGetItem, localStorageSetItem } from "./utils.localStorage";
import  { updateUserFavBooks } from "../firebase";

export async function addFavBook(bookId){
    const shoppingCartElement = document.querySelectorAll('.header-shopping-cart-number');
    const favBooks = localStorageGetItem('user-fav-books');
    const newFavBooks = [...favBooks, bookId];

    const newBooks = await updateUserFavBooks(localStorageGetItem('user-id'), newFavBooks);
    if (!newBooks) return;
    localStorageSetItem('user-fav-books', newFavBooks);
    shoppingCartElement.forEach(e => e.innerText = newFavBooks.length);
    return newBooks;
}

export async function removeFavBook(bookId){
    const shoppingCartElement = document.querySelectorAll('.header-shopping-cart-number');
    const favBooks = localStorageGetItem('user-fav-books');
    const newFavBooks = favBooks.filter((id) => bookId !== id);

    const newBooks = await updateUserFavBooks(localStorageGetItem('user-id'), newFavBooks);
    if (!newBooks) return;
    localStorageSetItem('user-fav-books', newFavBooks);
    shoppingCartElement.forEach(e => e.innerText = newFavBooks.length);
    return newBooks;

}

export function hasFavBook(bookId){
    const favBooks = localStorageGetItem('user-fav-books');
    if (!favBooks) return false;

    const haveFavBook = favBooks.filter((id) => bookId === id);

    return haveFavBook.length !== 0;
}