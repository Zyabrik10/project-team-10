import toggleBurgerMenu from "../utils/toggleBurgerMenu";

export default function initBurgerMenu() {
  const burgerMenuButtons = document.querySelectorAll(
    ".header-burger-menu-button"
  );

  burgerMenuButtons.forEach((element) =>
    element.addEventListener("click", toggleBurgerMenu)
  );
}