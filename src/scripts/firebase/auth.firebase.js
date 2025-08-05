import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "./config.firebase";
import catchError from '../utils/utils.catchError';

/*
  username: test
  email: test@gmail.com
  password: test_1
*/

export const signup = catchError(async ({ username, email, password }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  const token = await user.getIdToken();

  await setDoc(doc(db, "users", user.uid), {
    id: user.uid,
    username,
    email,
    token,
    favBooks: []
  });

  return {
    id: user.uid,
    username,
    email,
    token,
    favBooks: []
  };
});

export const signin = catchError(async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const token = await user.getIdToken();

  const userDoc = await getDoc(doc(db, "users", user.uid));

  if (userDoc.exists()) {
    const userInfo = userDoc.data();
    return {
      id: user.uid,
      email: userInfo.email,
      token,
      username: userInfo.username,
      role: userInfo.role,
      favBooks: userInfo.favBooks,
    };
  } else {
    return false;
  }
});

export const logout = catchError(async () => {
  await auth.signOut();
});

export const onUserLoggedIn = async (callback) => {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
