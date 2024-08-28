import { user } from "../config";
import renderShoppingListAmount from "../utils/renderShoppingListAmount";


export default function initLocalStorage() {
  const { booksStorage } = user;
  
  booksStorage.init();
  renderShoppingListAmount();
}