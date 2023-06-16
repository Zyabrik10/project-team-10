import { shopping_info, saveShoppingList } from './shopping-list';

const buttonSwitchTheme = document.querySelector('button.switch-theme');

export function renderTheme(elements) {
  if (
    (elements[0].classList.contains('.dark-theme') &&
      shopping_info.theme === 'dark') ||
    (elements[0].classList.contains('.light-theme') &&
      shopping_info.theme === 'light')
  )
    return;

  if (shopping_info.theme === 'light') {
    elements.forEach(el => {
      el.classList.remove('light');
      el.classList.add('dark');
    });
  } else if (shopping_info.theme === 'dark') {
    elements.forEach(el => {
      el.classList.remove('dark');
      el.classList.add('light');
    });
  }
}

function switchTheme() {
  const light_elemets = document.querySelectorAll('.light-theme');
  const dark_elemets = document.querySelectorAll('.dark-theme');

  if (light_elemets.length > 0) shopping_info.theme = 'dark';
  else if (dark_elemets.length > 0) shopping_info.theme = 'light';

  saveShoppingList();
  renderTheme();
}

buttonSwitchTheme.addEventListener('click', switchTheme);
