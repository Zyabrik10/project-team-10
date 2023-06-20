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
