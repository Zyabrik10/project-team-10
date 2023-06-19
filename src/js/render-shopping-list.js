import { shopping_info } from './shopping-list';
const plug = document.querySelector('.shop_plug');
const div_card_container = document.querySelector('.js-shop_card');

if (shopping_info.shopping_list) {
  markupBookCard(shopping_info.shopping_list);
  plug.style.display = 'none';
} else {
  plug.style.display = 'block';
}

function markupBookCard(data) {
  let markup = '';
  const keys = Object.keys(data);
  keys.forEach(key => {
    const {
      book_image,
      title,
      list_name,
      description,
      author,
      amazon_link,
      apple_books_link,
      bookshop_link,
    } = data[key];

    markup += `
      <div class="shop_card">
      <img src=${book_image} alt=${title} />
      <div class="shop_card-div_description">
        <div class="shop_card-div_title">
          <div>
            <h2 class="global-title shop_card-title">${title}</h2>
            <h3 class="global-title shop_card-category">
              ${list_name}
            </h3>
          </div>
          <button></button>
        </div>
        <p class="global-p shop_card-description">
          ${description}
        </p>
        <div class="shop_card-empty_place"></div>
        <div class="shop_card-footer">
          <p class="global-p shop_card-author">${author}</p>
          <div class="shop_card-empty_place"></div>
          <a class="global-link shop_card-link" href=${amazon_link} target="_blank" rel="noopener noreferrer">
            <img class="shop_amazon"
              src=${require('../images/shoppin-list/icons/amazon.png')}
              alt="amazon"
            />
          </a>
          <a class="global-link shop_card-link" href=${apple_books_link} target="_blank" rel="noopener noreferrer">
            <img
              src= ${require('../images/shoppin-list/icons/book_1.png')}
              alt="books"
            />
          </a>
          <a class="global-link shop_card-link" href=${bookshop_link} target="_blank" rel="noopener noreferrer">
            <img
              src= ${require('../images/shoppin-list/icons/book_2.png')}
              alt="books"
            />
          </a>
        </div>
      </div>
    </div>
    `;
  });

  div_card_container.insertAdjacentHTML('beforeend', markup);
}
