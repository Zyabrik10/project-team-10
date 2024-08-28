export default function ShoppingListItem({
  _id,
  book_image,
  title,
  list_name,
  description,
  author,
  buy_links,
}) {
  if (!book_image) book_image =
    "https://static.vecteezy.com/system/resources/thumbnails/002/219/582/small/illustration-of-book-icon-free-vector.jpg";
  return `    
    <div class="shop_card" data-id="${_id}">
      <img class="shop_card-img" src="${book_image}" alt="">
      <div class="shop_card-div_description">
        <div class="shop_card-div_title">
          <div>
            <h2 class="shop_card-title">${title}</h2>
            <h3 class="shop_card-category">${list_name}</h3>
          </div>
          <button class="shop_card-button" data-id="${_id}" type="button"></button>
        </div>
        <p class="shop_card-description">${description}</p>
        <div class="shop_card-empty_place"></div>
        <div class="shop_card-footer">
          <p class="shop_card-author">${author}</p>
          <div class="shop_card-empty_place"></div>
          <a class="global-link shop_card-link" href="${
            buy_links[0].url
          }" target="_blank" rel="noopener noreferrer">
            <img class="shop_amazon--black" src="${require("../../images/modal-window-book/icons/amazon_bk.png")}" alt="amazon">
          </a>
          <a class="shop_card-link" href="${
            buy_links[1].url
          }" target="_blank" rel="noopener noreferrer">
          <img src="${require("../../images/modal-window-book/icons/open-book_bk.png")}" alt="books">
          </a>
        </div>
      </div>
    </div>
    `;
}
