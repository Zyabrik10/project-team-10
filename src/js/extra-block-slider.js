// Слайдер для Support Ukrain
import { support_array } from './support-data';

const supportEl = document.querySelector('ul.support-list');

const supportUkraineMarkup = support_array
  .map(({ title, url, img, id }, index) => {
    return `<li class="support-item"><span class="item-number">${addNum(
      index + 1
    )}</span>
     <a class="support-link global-link" href=${url} target="_blank">
  <img src=${img} class="support-img-${id}"  alt="${title}">
</a>
</li>
    `;
  })
  .join('');

supportEl.insertAdjacentHTML('afterbegin', supportUkraineMarkup);

function addNum(value) {
  return value.toString().padStart(2, '0');
}

// ///////////

const supportBtn = document.querySelector('.js-sup-btn');
let isScrolledToEnd = false;
supportBtn.addEventListener('click', onScrollBtn);

function onScrollBtn() {
  if (isScrolledToEnd) {
    supportEl.scrollTop = 0;
    supportBtn.classList.remove('support-button-rotate');
  } else {
    supportEl.scrollTop = supportEl.scrollHeight;
    supportBtn.classList.add('support-button-rotate');
  }

  isScrolledToEnd = !isScrolledToEnd;
}

// Get the button:
let scrollTopButton = document.querySelector('.scroll-up-button');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
}
scrollTopButton.addEventListener('click', topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  console.log('click');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
