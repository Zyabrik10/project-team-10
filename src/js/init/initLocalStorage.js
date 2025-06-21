import { booksStorage } from '../config';
import renderShoppingListAmount from '../utils/renderShoppingListAmount';

export default function initLocalStorage() {
  booksStorage.init();
  renderShoppingListAmount();
}
