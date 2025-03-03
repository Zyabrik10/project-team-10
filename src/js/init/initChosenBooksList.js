import ShoppingListItem from "../components/ShoppingListItem";
import { choosedBookCategories, booksAPI, user } from "../config";
import toggleNoBooksAlert from "../utils/toggleNoBooksAlert";


export default function initChosenBooksList() {
  const { booksStorage } = user;

  choosedBookCategories.init('.shopping-list-container', ShoppingListItem);

  const booksIdList = booksStorage.getBooks();

  booksIdList.map(async id => {
    const book = await booksAPI.getBookBookbyId(id);
    choosedBookCategories.render([book]);

    document.querySelectorAll('.shop_card-button').forEach(e =>
      e.addEventListener('click', ({ currentTarget }) => {
        const id = currentTarget.dataset.id;
        choosedBookCategories.categoryList
          .querySelectorAll('.shop_card')
          .forEach(e => {
            const elemntId = e.dataset.id;

            if (elemntId === id) {
              e.remove();
              booksStorage.removeBookById(id);

              if (user.booksStorage.books.length === 0) {
                toggleNoBooksAlert();
              }
            }
          });
      })
    );
  });
}
