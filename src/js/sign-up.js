import { initializeApp } from 'firebase/app';
import Notiflix from 'notiflix';
import throttle from 'lodash.throttle';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { getDatabase, set, ref } from 'firebase/database';

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
const database = getDatabase(app);
const user = auth.currentUser;

// Inforamtion for the sign-up
const formData = {};
const formEl = document.querySelector('.login-form');
const emailInputEl = document.querySelector("input[name='email']");
const passwordInputEl = document.querySelector("input[name='password']");
const usernameInputEl = document.querySelector("input[name='username']");
const gettingFormData = JSON.parse(localStorage.getItem('login-form'));

const updateFormData = () => {
  if (gettingFormData !== null) {
    emailInputEl.value =
      gettingFormData.email.length > 0 ? gettingFormData.email : '';
    passwordInputEl.value =
      gettingFormData.message.length > 0 ? gettingFormData.message : '';
    formData['email'] = emailInputEl.value;
    formData['password'] = passwordInputEl.value;
    formData['username'] = usernameInputEl.value;
    localStorage.setItem('login-form', JSON.stringify(formData));
  }
};
const onInput = e => {
  formData[e.target.name.trim()] = e.target.value.trim();
  localStorage.setItem('login-form', JSON.stringify(formData));

  if (formData.email === undefined) {
    formData.email = '';
  }
  if (formData.username === undefined) {
    formData.username = '';
  }
};
const onSubmit = e => {
  e.preventDefault();
  localStorage.removeItem('login-form');

  formEl.reset();
  const { password, username, email } = formData;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in

      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username,
        email,
      });
      Notiflix.Notify.success(
        `${username}, you  successfully signed up and loginnig in now...!`
      );
      setTimeout(
        () => (window.location = 'http://localhost:1234/index.html'),
        3000
      );
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notiflix.Notify.failure(errorMessage);
    });
};

document.addEventListener('DOMContentLoaded', throttle(updateFormData, 500));
if (!formEl) {
  return;
} else {
  formEl.addEventListener('input', throttle(onInput, 500));
  formEl.addEventListener('submit', onSubmit);
}
