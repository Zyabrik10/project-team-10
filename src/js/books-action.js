// Функції для додавання до shopping_info книги да приберання
import { shopping_info, saveShoppingList } from './shopping-list';

export function addBook(
  _id,
  { author, title, description, buy_links, list_name, books_image }
) {
  console.log(' my id', _id);
  const bookInfo = {
    shopping_list: [
      {
        [_id]: {
          books_image,
          author,
          title,
          list_name,
          description,
          author,
          amazon: buy_links[0].url,
          apple_books: buy_links[1].url,
          bookshop: buy_links[4].url,
        },
      },
    ],
  };
  console.log('my book Array', bookInfo.shopping_list);

  saveShoppingList(bookInfo);
}

export function removeBook() {
  // ...your code

  saveShoppingList();
}
