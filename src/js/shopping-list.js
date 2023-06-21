// Змінна, яка буде в собі зберігати данні про кліента
export const shopping_info = JSON.parse(localStorage.getItem('client-info'));

export function saveShoppingList(shopping_info) {
  const shoppingB = JSON.parse(localStorage.getItem('client-info'));
  const arrayFromLocalSotrage = shoppingB;
  const arrayToBeAdded = shopping_info.shopping_list;
  console.log('first time', arrayToBeAdded);
  const arrayOfBooks = [ ...arrayFromLocalSotrage, ...arrayToBeAdded ];
  console.log('arrayOfBooks', arrayOfBooks);

  localStorage.setItem('client-info', JSON.stringify(arrayOfBooks));
  console.log('localGetItem', JSON.parse(localStorage.getItem('client-info')));
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
