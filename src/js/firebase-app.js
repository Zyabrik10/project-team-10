import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwpmuhImdY7RHC3U0YYZIshSlCJATjNaU',
  authDomain: 'project-team-10-5792d.firebaseapp.com',
  projectId: 'project-team-10-5792d',
  storageBucket: 'project-team-10-5792d.appspot.com',
  messagingSenderId: '76240638065',
  appId: '1:76240638065:web:5518f239b638187e380bd0',
  measurementId: 'G-CCNXH403RH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const logOutEl = document.querySelector('.log-out');
// const loginSectionEl = document.querySelector('.login-section');

const user = auth.currentUser;
// const logInEl = document.querySelector('.login-section');
const logInEl = document.querySelector('.user-profile');
const logOutEl = document.querySelector('.user-profile');

const logOut = e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      Notiflix.Notify.success(`You are signing out...`);
      setTimeout(
        () => (window.location = 'http://localhost:1234/login.html'),
        3000
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
};

const signUp = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.

      Notiflix.Notify.info(`You are redirected to sign up...`);
      setTimeout(
        () => (window.location = 'http://localhost:1234/sign-up.html'),
        3000
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
};

onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('User logged in.');
    logOutEl.innerHTML = 'Log Out';
    logOutEl.addEventListener('click', logOut);
  } else {
    console.log('No user.');
    logInEl.innerHTML = 'Sign Up';
    logInEl.addEventListener('click', signUp);
  }
});
