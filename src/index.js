import cardBox from "./js/config/cardBox";
import {
  initBurgerMenu,
  initLocalStorage,
  initAsideBooksCategories,
  initAllBooks,
  initSupportAside,
  initThemeSwitcher,
  initScrollUpButton,
  initAuth,
} from "./js/init";

window.addEventListener("load", () => {
  cardBox.init(".spec-books-container");

  initBurgerMenu();
  initScrollUpButton();
  initLocalStorage();
  initAsideBooksCategories();
  initAllBooks();
  initSupportAside();
  initThemeSwitcher();
  initAuth();
});
