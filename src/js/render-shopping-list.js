import { shopping_info, saveShoppingList } from './shopping-list';
const plug = document.querySelector('.shop_plug');

if (!shopping_info.shopping_list) {
  console.log('Щьось тут є');
  console.log(shopping_info.shopping_list);
  plug.style.display = 'block';
} else {
  console.log('нічього');
  plug.style.display = 'none';
}
