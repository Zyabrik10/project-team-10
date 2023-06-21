// Змінна, яка буде в собі зберігати данні про кліента
export const shopping_info = JSON.parse(
  localStorage.getItem('client-info')
) || {
  theme: 'light',
  shopping_list: {},
};

export function saveShoppingList(listBooks) {
  localStorage.setItem('client-info', JSON.stringify(listBooks));
}

// перезапис об'єкту після видалення однієї книжки
export function removeShoppingListBoock(idBoock) {
  let result = {};
  for (const key in shopping_info.shopping_list) {
    if (key !== idBoock) result[key] = shopping_info.shopping_list[key];
  }
  localStorage.clear();
  console.log('clear', shopping_info.shopping_list);
  saveShoppingList({
    theme: 'light',
    shopping_list: result,
  });
  console.log('save', shopping_info.shopping_list);
}
