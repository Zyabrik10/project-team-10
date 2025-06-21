import {
  initBurgerMenu,
  initLocalStorage,
  initChosenBooksList,
  initThemeSwitcher,
  initSupportAside,
  initAuth,
} from './js/init';
import toggleNoBooksAlert from './js/utils/toggleNoBooksAlert';

window.addEventListener('load', () => {
  initBurgerMenu();
  initLocalStorage();
  initChosenBooksList();
  initThemeSwitcher();
  initSupportAside();
  initAuth();
  toggleNoBooksAlert();
});
