// Змінна, яка буде в собі зберігати данні про кліента
export const shopping_info = JSON.parse(
  localStorage.getItem('client-info')
) || {
  theme: 'light',
  shopping_list: {},
};

export function saveShoppingList() {
  localStorage.setItem('client-info', JSON.stringify(shopping_info));
}

export function removeShoppingListBoock(idBoock) {
  let result = {};
  for (const key in shopping_info.shopping_list) {
    if (key !== idBoock) result[key] = shopping_info.shopping_list[key];
  }
  localStorage.clear();
  saveShoppingList({
    theme: 'light',
    shopping_list: result,
  });
}
