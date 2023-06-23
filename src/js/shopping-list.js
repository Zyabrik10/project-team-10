// Змінна, яка буде в собі зберігати данні про кліента
export const shopping_info = JSON.parse(
  localStorage.getItem('client-info')
) || {
  theme: 'light',
  shopping_list: {},
};

export function saveShoppingList(listBooks) {
  console.log('saveShoppingList', listBooks);
  localStorage.setItem('client-info', JSON.stringify(listBooks));
}

export function removeShoppingListBoock(idBoock) {
  for (const key in shopping_info.shopping_list) {
    if (key === idBoock) delete shopping_info.shopping_list[key];
  }

  saveShoppingList(shopping_info);
}

// додаємо в localStorage
export function addBook(key_new, book) {
  shopping_info.shopping_list[key_new] = book;
  saveShoppingList(shopping_info);
}
