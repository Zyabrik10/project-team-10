const switcher = document.querySelector('.switcher');
const menuButton = document.querySelector('.menu-button');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

switcher.addEventListener('click', function() {
  switcher.classList.toggle('active');
});

menuButton.addEventListener('click', function() {
  modal.style.display = 'block';
});

modalClose.addEventListener('click', function() {
  modal.style.display = 'none';
});

modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
