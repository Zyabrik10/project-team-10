// import { initializeApp } from 'firebase/app';
// import Notiflix from 'notiflix';

// import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDwpmuhImdY7RHC3U0YYZIshSlCJATjNaU',
//   authDomain: 'project-team-10-5792d.firebaseapp.com',
//   projectId: 'project-team-10-5792d',
//   storageBucket: 'project-team-10-5792d.appspot.com',
//   messagingSenderId: '76240638065',
//   appId: '1:76240638065:web:5518f239b638187e380bd0',
//   measurementId: 'G-CCNXH403RH',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// // const logOutEl = document.querySelector('.log-out');
// const loginSectionEl = document.querySelector('.login-section');

// const user = auth.currentUser;
// // const logInEl = document.querySelector('.login-section');
// const signUpEl = document.querySelector('#userProfileLoggedOut');
// const logOutEl = document.querySelector('#userProfileLoggedIn');

// const logOut = e => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       Notiflix.Notify.success(`You are signing out...`);
//       setTimeout(
//         () =>
//           (window.location =
//             'https://zyabrik10.github.io/project-team-10/login.html'),
//         3000
//       );
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       Notiflix.Notify.failure(errorMessage);
//     });
// };

// const signUp = () => {
//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       Notiflix.Notify.info(`You are redirected to sign up...`);
//       setTimeout(
//         () =>
//           (window.location =
//             'https://zyabrik10.github.io/project-team-10/sign-up.html'),
//         3000
//       );
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       Notiflix.Notify.failure(errorMessage);
//     });
// };

// onAuthStateChanged(auth, user => {
//   if (user !== null) {
//     console.log('User logged in.');
//     signUpEl.style.display = 'none';
//     logOutEl.addEventListener('click', logOut);
//   } else {
//     console.log('No user.');
//     // logOutEl.style.display = 'none';
//     signUpEl.innerHTML = 'Sign Up';
//     signUpEl.addEventListener('click', signUp);
//   }
// });

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


const userProfileLoggedInButton = document.getElementById("userProfileLoggedInk");
const logoutModal = document.getElementById("logoutModal");
const logoutButton = document.getElementById("userProfileLoggedIn");

let isLogoutModalOpen = false;

userProfileLoggedInButton.addEventListener("click", toggleLogoutModal);
logoutButton.addEventListener("click", logout);

function toggleLogoutModal() {
  if (isLogoutModalOpen) {
    closeLogoutModal();
  } else {
    openLogoutModal();
  }
}

function openLogoutModal() {
  logoutModal.style.display = "block";
  isLogoutModalOpen = true;
}

function closeLogoutModal() {
  logoutModal.style.display = "none";
  isLogoutModalOpen = false;
}

function logout() {
  // якщо треба, якщо ні просто видаліть цю функцію
}






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

// const userProfileLoggedOut = document.getElementById('userProfileLoggedOut');
// const userProfileLoggedIn = document.getElementById('userProfileLoggedIn');

// const userLoggedIn = onAuthStateChanged (auth, user => {
//   if (user !== null) {
//   console.log('User logged in.');
//   LogInEl.innerHTML = 'Log Out';
//   LogInEl.addEventListener('click', logout);

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
