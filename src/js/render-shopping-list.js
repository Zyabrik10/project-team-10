import { shopping_info } from './shopping-list';
const plug = document.querySelector('.shop_plug');
const div_card_container = document.querySelector('.js-shop_card');

if (shopping_info.shopping_list) {
  markupBookCard(shopping_info.shopping_list);
  plug.style.display = 'none';
  plug.style.display = 'block';
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
          <a class="global-link shop_card-link" href=${amazon_link}>
            <img
              src="./images/shoppin-list/icons/amazon.png"
              alt="amazon"
              height="11px"
            />
          </a>
          <a class="global-link shop_card-link" href=${apple_books_link}>
            <img
              src="./images/shoppin-list/icons/books_1.png"
              alt="books"
              height="16px"
            />
          </a>
          <a class="global-link shop_card-link" href=${bookshop_link}>
            <img
              src= required("./images/shoppin-list/icons/books_2.png")
              alt="books"
              height="16px"
            />
          </a>
        </div>
      </div>
    </div>
    `;
  });

  div_card_container.insertAdjacentHTML('beforeend', markup);
}
