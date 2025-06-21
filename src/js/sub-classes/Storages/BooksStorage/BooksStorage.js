import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { catchError, renderShoppingListAmount } from '../../../utils';
import { db } from '../../../utils/user-firebase';
import { user } from '../../../config';

const getAllDocuments = catchError(async collectionName => {
  const collectionRef = collection(db, collectionName);

  // Fetch all documents in the collection
  const querySnapshot = await getDocs(collectionRef);

  // Array to hold the documents
  const documents = [];

  // Loop through the documents and add them to the array
  querySnapshot.forEach(doc => {
    documents.push({
      id: doc.id, // Document ID
      ...doc.data(), // Document data
    });
  });

  return documents;
});

const addDocument = catchError(async collectionName => {
  // Reference to the collection
  const collectionRef = collection(db, collectionName);

  // Add a new document with an auto-generated ID
  console.log(data);
  const docRef = await addDoc(collectionRef, data);

  console.log('Document written with ID: ', docRef.id);
  return docRef.id; // Return the ID of the newly created document
});

export default class BooksStorage {
  constructor() {
    this.books = [];
  }

  doesBookPresent(bookId) {
    return this.books.find(id => id === bookId);
  }

  async getBooks() {
    const books = await getAllDocuments('books');
    return books;
  }

  async init() {
    const books = await this.getBooks();
    if (!books) {
      this.setBooks([]);
      this.books = [];
    } else {
      this.books = books;
    }
    renderShoppingListAmount();
  }

  addBook(bookId) {
    for (const element of this.books) if (bookId === element) return;

    this.books.push(bookId);
    this.setBooks(this.books);
  }

  async setBooks(books) {
    books.forEach(async book_id => {
      await addDocument('books', { user_id: user.user.id, book_id });
    });

    this.books = books;

    renderShoppingListAmount();
  }

  removeBookById(id) {
    this.books = this.books.filter(bookId => bookId !== id);
    this.setBooks(this.books);
  }

  removeBooks() {
    this.setBooks([]);
  }
}
