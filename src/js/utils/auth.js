import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { user } from "../config";

const firebaseConfig = {
  apiKey: "AIzaSyD7uRBVtcoEpayssAid0qGjGs19N9f4T4M",
  authDomain: "bookshelf-b3bc0.firebaseapp.com",
  projectId: "bookshelf-b3bc0",
  storageBucket: "bookshelf-b3bc0.appspot.com",
  messagingSenderId: "157467122986",
  appId: "1:157467122986:web:76ef0022329b5fb9995253",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/*
  username: test
  email: test@gmail.com
  password: test_1
*/

export async function signup(username, email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    userCredential.user.displayName = username;
    user.updateUser({
      username,
      email,
      token: userCredential.user.accessToken,
    });

    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error(new Error(errorCode, errorMessage));

    return false;
  }
}

export async function signin(email, password) {
  console.log("signin", email, password);

  return {
    status: true,
  };
}
