import { Categories } from './classes/';
import { BooksAPI, BooksStorage, UserStorage } from './sub-classes/';

export const bookCategories = new Categories();
export const choosedBookCategories = new Categories();
export const booksAPI = new BooksAPI();
export const user = new UserStorage();
export const booksStorage = new BooksStorage();
