// Змінна, яка буде в собі зберігати данні про кліента
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
const loginSectionEl = document.querySelector('.login-section');

const user = auth.currentUser;
// const logInEl = document.querySelector('.login-section');
const signUpEl = document.querySelector('#userProfileLoggedOut');
const logOutEl = document.querySelector('#userProfileLoggedIn');

const logOut = e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      Notiflix.Notify.success(`You are signing out...`);
      setTimeout(
        () =>
          (window.location =
            'https://zyabrik10.github.io/project-team-10/login.html'),
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
        () =>
          (window.location =
            'https://zyabrik10.github.io/project-team-10/sign-up.html'),
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
    signUpEl.style.display = 'none';
    logOutEl.addEventListener('click', logOut);
  } else {
    console.log('No user.');
    logOutEl.style.display = 'none';
    signUpEl.innerHTML = 'Sign Up';
    signUpEl.addEventListener('click', signUp);
  }
});

export const shopping_info = JSON.parse(
  localStorage.getItem('client-info')
) || {
  theme: 'light',
  shopping_list: {
    '643282b1e85766588626a0dc': {
      book_image:
        'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
      title: 'SWEET ENOUGH',
      list_name: 'Advice How-To and Miscellaneous',
      description: '',
      author: 'Alison Roman',
    },
  },
};

export function saveShoppingList() {
  localStorage.setItem('client-info', JSON.stringify(shopping_info));
}

export function removeShoppingListBoock(idBoock) {
  let result = {};
  for (const key in shopping_info.shopping_list) {
    if (key !== idBoock) result[key] = shopping_info.shopping_list[key];
  }
  localStorage.clear();
  saveShoppingList({
    theme: 'light',
    shopping_list: result,
  });
}
