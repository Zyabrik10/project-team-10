// Змінна, яка буде в собі зберігати данні про кліента
import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';
import { getDatabase, ref, child, get } from 'firebase/database';
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
const dbRef = ref(getDatabase());
const userNameEl = document.querySelector('.user-name');
// const userEmailEl = document.querySelector('.user-email'); робоча строка
const signUpEl = document.querySelector('#userProfileLoggedOut');
const logOutEl = document.querySelector('#userProfileLoggedIn');
const userLogged = document.querySelector('#userProfileLoggedInk');
const shoppingListEl = document.querySelector('.shopping-cart');
let numberOfBooks = JSON.parse(localStorage.getItem('number_of_books'))
  ? JSON.parse(localStorage.getItem('number_of_books'))
  : null;
let userEmail = JSON.parse(localStorage.getItem('_userEmail'))
  ? JSON.parse(localStorage.getItem('_userEmail'))
  : null;

shoppingListEl.innerHTML = numberOfBooks ? numberOfBooks : '';

const logOut = e => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      localStorage.setItem('_userEmail', JSON.stringify('notLoggedInUser'));
      shoppingListEl.innerHTML = '';

      Notiflix.Notify.success(`You are signing out...`);
      setTimeout(
        () =>
          (window.location =
            'https://millenialia.github.io/project-team-10-added-features/login.html'),
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
            'https://millenialia.github.io/project-team-10-added-features/sign-up.html'),
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
    const userId = user.uid;
    get(child(dbRef, `users/${userId}`))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log('username', snapshot.val().username);
          localStorage.setItem(
            'username',
            JSON.stringify(snapshot.val().username)
          );
          userNameEl.innerHTML = snapshot.val().username;
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });
    userEmail = auth.currentUser.email;
    const objOfBooks = JSON.parse(localStorage.getItem(userEmail));
    if (objOfBooks === null) {
      shoppingListEl.innerHTML = '';
    } else {
      const number_of_books = Object.keys(objOfBooks.shopping_list).length;
      shoppingListEl.innerHTML = number_of_books ? number_of_books : '';
    }

    if (!objOfBooks) {
      localStorage.setItem('number_of_books', JSON.stringify(null));
      shoppingListEl.innerHTML = '';
    }
    signUpEl.style.display = 'none';
    // userEmailEl.innerHTML = userEmail; робоча строка
    signUpEl.classList.remove('is-active');
    userLogged.classList.add('is-active');
    logOutEl.addEventListener('click', logOut);
  } else {
    console.log('No user.');
    localStorage.setItem('_userEmail', JSON.stringify('notLoggedInUser'));
    const notLoggedIn = JSON.parse(localStorage.getItem('notLoggedInUser'));
    let number_of_books = null;
    if (notLoggedIn === null) {
      number_of_books = '';
    } else {
      number_of_books = Object.keys(notLoggedIn.shopping_list).length;
    }
    shoppingListEl.innerHTML = number_of_books ? number_of_books : '';
    logOutEl.style.display = 'none';
    userLogged.classList.remove('is-active');
    signUpEl.classList.add('is-active');
    signUpEl.addEventListener('click', signUp);
  }
});
export const shopping_info = JSON.parse(localStorage.getItem(userEmail)) || {
  theme: 'light',
  shopping_list: {},
};

export function saveShoppingList(listBooks) {
  console.log('user', userEmail);
  const number_of_books = Object.keys(listBooks.shopping_list).length;
  shoppingListEl.innerHTML = number_of_books ? number_of_books : '';
  localStorage.setItem('number_of_books', JSON.stringify(number_of_books));
  console.log('number of books ', number_of_books);
  localStorage.setItem(userEmail, JSON.stringify(listBooks));
}

export function removeShoppingListBoock(idBoock) {
  console.log(shopping_info);
  for (const key in shopping_info.shopping_list) {
    if (key === idBoock) delete shopping_info.shopping_list[key];
  }

  saveShoppingList(shopping_info);
}

// додаємо в localStorage
export function addBook(key_new, book) {
  shopping_info.shopping_list[key_new] = book;
  saveShoppingList(shopping_info);
}
