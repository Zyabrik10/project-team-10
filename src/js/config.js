import { Categories } from "./classes/";
import { BooksAPI, UserStorage } from "./sub-classes/";

export const bookCategories = new Categories();
export const choosedBookCategories = new Categories();
export const booksAPI = new BooksAPI();
export const user = new UserStorage();