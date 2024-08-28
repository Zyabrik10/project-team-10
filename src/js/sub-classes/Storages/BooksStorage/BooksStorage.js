import Storage from "../../../classes/Storage/Storage";
import { renderShoppingListAmount } from "../../../utils";

export default class BooksStorage {
  constructor() {
    this.storage = new Storage("choosed-books");
    this.books = [];
  }

  doesBookPresent(bookId) { 
    return this.books.find(id => id === bookId);
  }

  getBooks() {
    this.books = this.storage.getItem();
    return this.books;
  }

  init() {
    const books = this.getBooks();

    if (!books) {
      this.setBooks([]);
      this.books = [];
    } else {
      this.books = books;
    }

    renderShoppingListAmount();
  }

  addBook(bookId) {
        for (const element of this.books) 
          if (bookId === element) return;
        
        this.books.push(bookId);
        this.setBooks(this.books);
   }

  setBooks(books) {
    this.books = books;
  
    this.storage.setItem(this.books);
    renderShoppingListAmount();
  }

  removeBookById(id) {
    this.books = this.books.filter((bookId) => bookId !== id);
    this.setBooks(this.books);
  }

  removeBooks() {
    this.setBooks([]);
  }
}
