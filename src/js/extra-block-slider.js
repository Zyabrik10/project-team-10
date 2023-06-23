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
supportEl.addEventListener('scroll', onListScroll);
function onScrollBtn() {
  if (isScrolledToEnd) {
    supportEl.scrollTo({ top: 0,behavior:'smooth',});
    // supportBtn.classList.remove('support-button-rotate');
  } else {
    supportEl.scrollTo({ top: supportEl.scrollHeight, behavior: 'smooth' });
    // supportBtn.classList.add('support-button-rotate');
  }
  supportBtn.classList.toggle('support-button-rotate');
  isScrolledToEnd = !isScrolledToEnd;
};
function onListScroll() {
  const isEndOfList = supportEl.scrollTop === supportEl.scrollHeight - supportEl.clientHeight;
    supportBtn.classList.toggle('support-button-rotate', isEndOfList);
}