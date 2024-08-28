import { user } from "./js/config";
import {
  initBurgerMenu,
  initLocalStorage,
  initChoosedBooksList,
  initThemeSwitcher,
  initSupportAside,
  initAuth,
} from "./js/init";
import toggleNoBooksAlert from "./js/utils/toggleNoBooksAlert";

window.addEventListener("load", () => {
  initBurgerMenu();
  initLocalStorage();
  initChoosedBooksList();
  initThemeSwitcher();
  initSupportAside();
  initAuth();
  toggleNoBooksAlert();
});
