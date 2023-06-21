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
var logoImage = document.querySelector('.logo-image');

function changeLogoImage(theme) {
  if (theme === '.light') {
    logoImage.src = './images/header/logo-light.png';
  } else if (theme === '.dark') {
    logoImage.src = './images/header/logo-dark.png';
  }
}
    changeLogoImage('.dark');

    // user login BUTTON  ----> якшо цей код не потрібен просто видаліть його:)
    var userProfile = document.querySelector('.user-profile');
var modal = document.getElementById('modal'); // поміняйте'modal' на своє

userProfile.addEventListener('click', function() {
  modal.style.display = 'block'; 
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});








