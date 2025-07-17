import ShoppingListItem from "../components/ShoppingListItem";
import { chosenBookCategories, booksAPI, booksStorage, user } from '../config';
import toggleNoBooksAlert from '../utils/toggleNoBooksAlert';

export default async function initChosenBooksList() {
  chosenBookCategories.init('.shopping-list-container', ShoppingListItem);
  const books = await booksStorage.getBooks();

  books.map(async ({userId, bookId}) => {
    if (userId !== user.user.id) return;

    const book = await booksAPI.getBookBookById(bookId);
    chosenBookCategories.render([book]);

    document.querySelectorAll('.shop_card-button').forEach(e =>
      e.addEventListener('click', ({ currentTarget }) => {
        const id = currentTarget.dataset.id;
        chosenBookCategories.categoryList
          .querySelectorAll('.shop_card')
          .forEach(e => {
            const elementId = e.dataset.id;

            if (elementId === id) {
              e.remove();
              booksStorage.removeBookById(id);

              if (booksStorage.books.length === 0) {
                toggleNoBooksAlert();
              }
            }
          });
      })
    );
  });
}
