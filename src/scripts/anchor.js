import {throttle} from './utils';

(() => {
  const anchorElement = document.querySelector(".anchor");
  window.addEventListener("scroll", throttle(() => {
    if (scrollY >= innerHeight / 3) {
      anchorElement.classList.add("active");
    } else {
      anchorElement.classList.remove("active");
    }
  }, 100));
})();
