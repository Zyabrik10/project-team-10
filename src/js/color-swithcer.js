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

// for_THEME DarkandWhite
// function toggleLogoImage(theme) {
//   const logoImages = document.querySelectorAll('.logo-image');
//   const logoImageSrc = theme === 'dark' ? '../src/images/header/logo-dark.png' : '../src/images/header/logo-light.png';

//   logoImages.forEach((logoImage) => {
//     logoImage.src = logoImageSrc;
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const currentTheme = 'dark'; // Поточна тема (може бути 'light' або 'dark')
//   toggleLogoImage(currentTheme);
// });

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

  //JS для перевірки залогінений чи ні користувач

// const userProfileLoggedOut = document.getElementById('userProfileLoggedOut');
// const userProfileLoggedIn = document.getElementById('userProfileLoggedIn');

// const userLoggedIn = onAuthStateChanged (auth, user => {
//   if (user !== null) {  
//   console.log('User logged in.');
//   LogInEl.innerHTML = 'Log Out'; 
//   LogInEl.addEventListener('click', logout);
  
//   } else {
//   console.log('No user.');
//   LogInEl.innerHTML = 'Sign Up';
//   LogInEl.addEventListener('click', signUp);}
//   });

// if (userLoggedIn) {
//   userProfileLoggedOut.style.display = 'none';
// } else {
//   userProfileLoggedIn.style.display = 'none'; 
// }










