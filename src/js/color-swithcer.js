const switcher = document.querySelector('.switcher');

switcher.addEventListener('click', function () {
  if (this.getAttribute('data-checked') === 'true') {
    this.classList.remove('active');
    this.setAttribute('data-checked', false);
  } else {
    this.classList.add('active');
    this.setAttribute('data-checked', true);
  }
});

// for_THEME DarkandWhite-LOGO
function toggleLogoImage() {
  const logoImages = document.querySelectorAll('.logo-image');

  logoImages.forEach(logoImage => {
    if (logoImage.classList.contains('light-theme')) {
      logoImage.src = require('/src/images/header/logo-light.png');
    } else if (logoImage.classList.contains('dark-theme')) {
      logoImage.src = require('/src/images/header/logo-dark.png');
    }
  });
}

window.addEventListener('load', function () {
  toggleLogoImage();

  const themeSwitch = document.querySelector('.theme-switch');
  themeSwitch.addEventListener('click', function () {
    toggleLogoImage();
  });
});

// user login BUTTON  ----> якшо цей код не потрібен просто видаліть його:)
// var userProfile = document.querySelector('.user-profile');
// поміняйте'modal' на своє --- ↓
//     var modal = document.getElementById('modal');

// userProfile.addEventListener('click', function() {
//   modal.style.display = 'block';
// });

// window.addEventListener('click', function(event) {
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
// });

// JS для перевірки залогінений чи ні користувач
// const LogInEl = document.getElementById('LogInButton');
// const firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "PROJECT_ID.firebaseapp.com",
// };

// // _____________________
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const user = auth.currentUser;

// const userProfileLoggedOut = document.getElementById('userProfileLoggedOut');
// const userProfileLoggedIn = document.getElementById('userProfileLoggedIn');

// const userLoggedIn = onAuthStateChanged(auth, (user) => {
//   if (user !== null) {
//     console.log('User logged in.');
//     LogInEl.innerHTML = 'Log Out';
//     LogInEl.addEventListener('click', logout);
//   } else {
//     console.log('No user.');
//     LogInEl.innerHTML = 'Sign Up';
//     LogInEl.addEventListener('click', signUp);
//   }
// });

// if (userLoggedIn) {
//   userProfileLoggedOut.style.display = 'none';
// } else {
//   userProfileLoggedIn.style.display = 'none';
// }
