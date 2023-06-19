import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

// import { getDatabase } from 'firebase/database';

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
const logOutEl = document.querySelector('.log-out');
const user = auth.currentUser;

//need to be deleted later
onAuthStateChanged(auth, user => {
  if (user !== null) {
    console.log('User logged in!');
  } else {
    console.log('No user.');
  }
});

logOutEl.addEventListener('click', e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      Notiflix.Notify.success(`User is signing out...`);
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
});
