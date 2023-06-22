// тут треба описати вікритя та закритя вікна
// також логіку при натиснення на кнопку додати книгу або видалити

import { removeBook } from './books-action';
import { addBook, saveShoppingList, shopping_info } from './shopping-list';
import { fetchBook } from './fetch-func';

export function modalWindow() {
  const body = document.querySelector('body');
  const cardList = document.querySelector('.tb-container');
  const backdropModal = document.querySelector('.backdrop');

  const modal = backdropModal;

  cardList.addEventListener('click', e => {
    e.preventDefault();
    const linkId = e.target.closest('.global-link');
    if (linkId && linkId.hasAttribute('data-id')) {
      const dataId = e.target.closest('.global-link').getAttribute('data-id');
      console.log(dataId);
      fetchBook(dataId)
        .then(data => {
          console.log(data);

          modal.classList.remove('is-hidden');
          body.classList.add('modal-open');
          markupModal(data);

          funcBtn(data._id, data);

          const closeModalBtn = document.querySelector('.close-btn');
          closeModalBtn.addEventListener('click', () => {
            modal.classList.add('is-hidden');
            body.classList.remove('modal-open');
          });

          backdropModal.addEventListener('click', () => {
            if (event.target === backdropModal) {
              modal.classList.add('is-hidden');
              body.classList.remove('modal-open');
            }
          });

          document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
              console.log('Esc');
              modal.classList.add('is-hidden');
              body.classList.remove('modal-open');
            }
          });
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.log('Промазав по картці, спробуй ще)))');
    }

    function markupModal({
      book_image,
      author,
      title,
      description,
      buy_links,
    }) {
      backdropModal.innerHTML = `
                <div class="wrap">
                    <div class="modal-content-wrap">
                    <img class="book-icon" src="${book_image}" alt="Book wrap" width="287" height="458"/>
                    <div class="about-book">
                        <h2 class="book-title global-title">${title}</h2>
                        <p class="book-author global-p">${author}</p>
                        <p class="book-descr global-p">${description}</p>
                        <ul class="shops-list global-list">
                            <li class="shop-list-item"><a class="shop-link global-link" href="${
                              buy_links[0].url
                            }."><img class="shop-icon" src=${require('../images/modal-window-book/icons/amazon_bk.png')} alt="amazon" width="62" height="19"/></a></li>
                            <li class="shop-list-item"><a class="shop-link global-link" href="${
                              buy_links[1].url
                            }"><img class="shop-icon" src=${require('../images/modal-window-book/icons/open-book_bk.png')} alt="apple-book" width="32" height="32"/></a></li>
                            <li class="shop-list-item"><a class="shop-link global-link" href="${
                              buy_links[4].url
                            }"><img class="shop-icon" src=${require('../images/modal-window-book/icons/book-shop_bk.png')} alt="book-shop" width="38" height="36"/></a></li>
                        </ul>
                    </div>
                    </div>
                    <button class="add-rem-btn global-button" type="button">xxxXXXxxx</button>
                    <button class="close-btn global-button" type="button">&times;</button>
                    <p class="congratulations global-p no-content">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
                </div>`;
    }

    function funcBtn(id, book) {
      const addRemBtn = document.querySelector('.add-rem-btn');
      const congratulations = document.querySelector('.congratulations');
      addRemBtn.textContent = 'ADD TO SHOPING LIST';
      addRemBtn.addEventListener('click', function () {
        if (localStorage.getItem(id) === null) {
          addBook(id, book);
          console.log('funcBtn');
          shopping_info.shopping_list;

          addRemBtn.textContent = 'REMOVE FROM THE SHOPING LIST';
          congratulations.classList.remove('no-content');
        } else {
          removeBook(id);
          addRemBtn.textContent = 'ADD TO SHOPING LIST';
          congratulations.classList.add('no-content');
        }
      });
    }
  });
}
