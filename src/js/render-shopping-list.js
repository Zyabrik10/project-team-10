import {
  shopping_info,
  removeShoppingListBoock,
  saveShoppingList,
  addBook,
} from './shopping-list';
const plug = document.querySelector('.shop_plug');
const div_card_container = document.querySelector('.js-shop_card');
let number_of_books = Object.keys(shopping_info.shopping_list).length;
console.log('number of books ', number_of_books);
// addBook();

div_card_container.addEventListener('click', onClickDel);

// ----------------------------------------------------------------
// let key = '76658fdhdgj8626a0dc';
// let book = {
//   book_image:
//     'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
//   title: 'SWEET ENOUGH',
//   list_name: 'Advice How-To and Miscellaneous',
//   description: '',
//   author: 'Alison Roman',
//   amazon:
//     'https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2?tag=NYTBSREV-20.',
//   apple_books:
//     'https://books.apple.com/us/audiobook/demon-copperhead/id1603896460?at=10lIEQ',
//   bookshop:
//     'https://bookshop.org/books?affiliate=3546&keywords=DEMON+COPPERHEAD',
// };

// addBook(key, book);
// ----------------------------------------------------------------

// ДЛЯ ПЕРЕВІРКИ,   прибрати після реліза модалки із кнопкою ADD
// const books = {
//   theme: 'light',
//   shopping_list: {
//     '143282b1e85766588626a0dc': {
//       book_image:
//         'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
//       title: 'SWEET ENOUGH',
//       list_name: 'Advice How-To and Miscellaneous',
//       description: '',
//       author: 'Alison Roman',
//       amazon:
//         'https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2?tag=NYTBSREV-20.',
//       apple_books:
//         'https://books.apple.com/us/audiobook/demon-copperhead/id1603896460?at=10lIEQ',
//       bookshop:
//         'https://bookshop.org/books?affiliate=3546&keywords=DEMON+COPPERHEAD',
//     },
//     '243282b1e85766588626a0dc': {
//       book_image:
//         'https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg',
//       title: 'SWEET ENOUGH',
//       list_name: 'Advice How-To and Miscellaneous',
//       description: '',
//       author: 'Alison Roman',
//       amazon:
//         'https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs-ebook/dp/B00VE4Y0Z2?tag=NYTBSREV-20.',
//       apple_books:
//         'https://books.apple.com/us/audiobook/demon-copperhead/id1603896460?at=10lIEQ',
//       bookshop:
//         'https://bookshop.org/books?affiliate=3546&keywords=DEMON+COPPERHEAD',
//     },
//   },
// };

// після загрузки карток - закоментувати  !!!
// saveShoppingList(books);
// ----------------------------

markupBookCard(shopping_info.shopping_list);

// перевірка, чи є щось в LocalStorage
function ofShoppingList() {
  if (number_of_books) {
    plug.style.display = 'none';
    return false;
  } else {
    plug.style.display = 'block';
    return true;
  }
}

// розмітка кардки однієї книги
function markupBookCard(data) {
  if (ofShoppingList()) return;
  let markup = '';
  div_card_container.innerHTML = markup;
  const keys = Object.keys(data);
  keys.forEach(key => {
    let {
      book_image,
      title,
      list_name,
      description,
      author,
      amazon,
      apple_books,
      bookshop,
    } = data[key];

    if (!book_image.trim())
      book_image = require('../images/shoppin-list/no_book.png');

    markup += `
      <div class="shop_card theme-switch light-theme dark-theme" id="${key}">
      <img src=${book_image} alt=${title} />
      <div class="shop_card-div_description">
        <div class="shop_card-div_title">
          <div>
            <h2 class="global-title shop_card-title theme-switch light-theme dark-theme">${title}</h2>
            <h3 class="global-title shop_card-category">
              ${list_name}
            </h3>
          </div>
          <button data-id=${key}></button>
        </div>
        <p class="global-p shop_card-description theme-switch light-theme dark-theme">
          ${description}
        </p>
        <div class="shop_card-empty_place"></div>
        <div class="shop_card-footer">
          <p class="global-p shop_card-author">${author}</p>
          <div class="shop_card-empty_place"></div>
          <a class="global-link shop_card-link" href=${amazon} target="_blank" rel="noopener noreferrer">
            <img class="shop_amazon--black theme-switch light-theme dark-theme"
              src=${require('../images/shoppin-list/icons/amazon_black.png')}
              alt="amazon"
            />
            <img class="shop_amazon--wite theme-switch light-theme dark-theme"
              src=${require('../images/shoppin-list/icons/amazon_wite.png')}
              alt="amazon"
            />
          </a>
          <a class="global-link shop_card-link" href=${apple_books} target="_blank" rel="noopener noreferrer">
            <img
              src= ${require('../images/shoppin-list/icons/book_1.png')}
              alt="books"
              />
           </a>
          <a class="global-link shop_card-link" href=${bookshop} target="_blank" rel="noopener noreferrer">
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

// видалення по натисненню кнопки dell
function onClickDel(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  removeShoppingListBoock(event.target.dataset.id);

  const cardDel = document.getElementById(`${event.target.dataset.id}`);
  cardDel.remove();
  if (!--number_of_books) {
    plug.style.display = 'block';
    // localStorage.clear();
    shopping_info;
  }
}
