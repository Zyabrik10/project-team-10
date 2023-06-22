// Функції для додавання до shopping_info книги да приберання
import { shopping_info, saveShoppingList } from './shopping-list';

export function addBook(key_new, book) {
  shopping_info.shopping_list[key_new] = book;
  saveShoppingList(shopping_info);
}

export function removeBook(idBook) {
  for (const key in shopping_info.shopping_list) {
    if (key === idBook) delete shopping_info.shopping_list[key];
  }

  saveShoppingList(shopping_info);
}
