import { shopping_info, saveShoppingList } from './shopping-list';

const buttonSwitchTheme = document.querySelector('.switch-theme-button');

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
    shopping_info.theme = 'dark';
    renderTheme('dark');
  } else {
    shopping_info.theme = 'light';
    renderTheme('light');
  }

  saveShoppingList();
}

buttonSwitchTheme.addEventListener('click', switchTheme);
