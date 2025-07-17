import { addDoc, collection, doc, getDocs, deleteDoc } from 'firebase/firestore';
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

const addDocument = catchError(async (userId, bookId) => {
  // Reference to the collection
  const collectionRef = collection(db, 'books');

  // Add a new document with an auto-generated ID
  const docRef = await addDoc(collectionRef, {
    userId,
    bookId,
  });

  console.log('Document written with ID: ', docRef.id);
  return docRef.id; // Return the ID of the newly created document
});

export default class BooksStorage{
  constructor() {
    this.books = [];
  }

  doesBookPresent(bId) {
    return this.books.find(({bookId}) => bookId === bId);
  }

  async getBooks() {
    const books = await getAllDocuments('books');
    return books.filter(({userId})=>userId === user.user.id);
  }

  async init() {
    const books = await this.getBooks();
    if (!books) {
      this.books = [];
    } else {
      this.books = books;
    }
    renderShoppingListAmount();
  }

  async addBook(bookId) {
    for (const element of this.books) if (bookId === element) return;

    this.books.push(bookId);
    await addDocument(user.user.id, bookId);
    renderShoppingListAmount();
  }

  async removeBookById(deleteBookId) {
    if (!this.doesBookPresent(deleteBookId)) return;
    const dbBookId = this.books.filter(({bookId}) => bookId === deleteBookId)[0].id;
    await deleteDoc(doc(db, 'books', dbBookId));
    this.books = this.books.filter(({bookId}) => bookId !== deleteBookId);
    renderShoppingListAmount();
  }

  async removeBooks() {
    this.books.forEach(async (bookId)=>{
      this.removeBookById(bookId);
    });
  }
}
