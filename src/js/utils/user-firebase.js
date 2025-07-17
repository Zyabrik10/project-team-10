import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import catchError from './catchError';

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

/*
  username: test
  email: test@gmail.com
  password: test_1
*/

export const signup = catchError(async (username, email, password) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  const token = await user.getIdToken();

  await setDoc(doc(db, 'users', user.uid), {
    username,
    email,
    token,
  });

  return {
    id: user.uid,
    username,
    email,
    token,
  };
});

export const signin = catchError(async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const token = await user.getIdToken();

  const userDoc = await getDoc(doc(db, 'users', user.uid));

  if (userDoc.exists()) {
    const userInfo = userDoc.data();
    return {
      id: user.uid,
      email: userInfo.email,
      token,
      username: userInfo.username,
      role: userInfo.role,
    };
  } else {
    console.error('User data not found in database.');
    return false;
  }
});

export const logout = catchError(async () => { 
    await auth.signOut();
});

export const getAuthedUserToken = catchError(async (userToken) => { 
  return auth.currentUser && userToken === (await auth.currentUser.getIdToken());
});
