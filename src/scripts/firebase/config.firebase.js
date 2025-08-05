import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQObJ3p4H9FTCPUNUJK-F_sBR4i-q6nR8",
  authDomain: "bookshelf-291e8.firebaseapp.com",
  projectId: "bookshelf-291e8",
  storageBucket: "bookshelf-291e8.firebasestorage.app",
  messagingSenderId: "43360771776",
  appId: "1:43360771776:web:0ec9ab15215885cb0a1725"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);