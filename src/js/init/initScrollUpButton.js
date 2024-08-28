import _ from "lodash";
const scrollUpButton = document.querySelector(".scroll-up");

export default function initScrollUpButton() {
  window.addEventListener(
    "scroll",
      _.throttle(async () => {
      if (window.scrollY + innerHeight >= innerHeight * 1.5) {
        scrollUpButton.classList.add("active");
      } else {
        scrollUpButton.classList.remove("active");
      }
    }, 500)
  );
}
