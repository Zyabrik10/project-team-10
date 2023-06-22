// логіка відкриття та закриття бургер меню

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.menu-button');
  const closeMenuBtn = document.querySelector('.js-close-menu');


  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    isMenuOpen
      ? document.querySelector('body').style.overflow="auto"
      : document.querySelector('body').style.overflow="hidden";
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
})();

const shoppingPage = document.querySelector('.shopp-pages')
const linksMenu = document.querySelectorAll('.link-menu')

if (shoppingPage) {
  linksMenu[1].classList.toggle('colored-link-menu')
} else {
  linksMenu[0].classList.toggle('colored-link-menu')
}