// Змінна, яка буде в собі зберігати данні про кліента
export const shopping_info = JSON.parse(
  localStorage.getItem('client-info')
) || {
  theme: 'light',
  shopping_list: {
    '643282b1e85766588626a0dc': {
      book_image:
        'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
      title: 'SWEET ENOUGH',
      list_name: 'Advice How-To and Miscellaneous',
      description: '',
      author: 'Alison Roman',
    },
  },
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
