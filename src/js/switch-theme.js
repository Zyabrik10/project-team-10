import { shopping_info, saveShoppingList } from './shopping-list';

const buttonSwitchTheme = document.querySelector('.switcher');

export function renderTheme(theme) {
  const elements = document.querySelectorAll('.theme-switch');

  switch (theme) {
    case 'light':
      elements.forEach(function (el) {
        el.classList.add('light-theme');
        el.classList.remove('dark-theme');
      });
      break;
    case 'dark':
      elements.forEach(function (el) {
        el.classList.add('dark-theme');
        el.classList.remove('light-theme');
      });
      break;
  }
}

function switchTheme() {
  if (shopping_info.theme === 'light') {
    renderTheme('light');
  } else {
    renderTheme('dark');
  }
}

function switchCheck() {
  if (this.getAttribute('data-checked') === 'true') {
    shopping_info.theme = 'light';
  } else {
    shopping_info.theme = 'dark';
  }
  saveShoppingList();
  switchTheme();
}

function loadSwitchButton() {
  if (shopping_info.theme === 'light') {
    buttonSwitchTheme.classList.remove('active');
    buttonSwitchTheme.setAttribute('data-checked', false);
  } else {
    buttonSwitchTheme.classList.add('active');
    buttonSwitchTheme.setAttribute('data-checked', true);
  }
}

buttonSwitchTheme.addEventListener('click', switchCheck);
window.addEventListener('load', loadSwitchButton);
