// тут треба описати вікритя та закритя вікна
// також логіку при натиснення на кнопку додати книгу або видалити

import { removeBook } from './books-action';
import { saveShoppingList, shopping_info } from './shopping-list';
import { addBook, removeBook } from './books-action';
import { fetchBook } from './fetch-func';
import { renderTheme } from './switch-theme';

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
      fetchBook(dataId)
        .then(data => {

          modal.classList.remove('is-hidden');
          body.classList.add('modal-open');
          markupModal(data);

          funcBtn(data._id, data);

          const closeModalBtn = document.querySelector('.close-btn');
          closeModalBtn.addEventListener('click', () => {
            modal.classList.add('is-hidden');
            body.classList.remove('modal-open');
          });

          backdropModal.addEventListener('click', event => {
            if (event.target === backdropModal) {
              modal.classList.add('is-hidden');
              body.classList.remove('modal-open');
            }
          });

          document.addEventListener('keydown', event => {
            if (event.key === 'Escape') {
              modal.classList.add('is-hidden');
              body.classList.remove('modal-open');
            }
          });
        })
        .catch(error => {
          console.error(error);
        });
    }

    function markupModal({
      book_image,
      author,
      title,
      description,
      buy_links,
    }) {
      backdropModal.innerHTML = `
                <div class="wrap light-theme theme-switch">
                    <div class="modal-content-wrap">
                    <img class="book-icon" src="${book_image}" alt="Book wrap" width="287" height="458"/>
                    <div class="about-book">
                        <h2 class="book-title light-theme theme-switch global-title">${title}</h2>
                        <p class="book-author light-theme theme-switch global-p">${author}</p>
                        <p class="book-descr light-theme theme-switch global-p">${description}</p>
                        <ul class="shops-list global-list">
                            <li class="shop-list-item"><a class="shop-link global-link" href="${
                              buy_links[0].url
                            }."><img class="shop-icon theme-switch light-theme" src=${require('../images/modal-window-book/icons/amazon_bk.png')} alt="amazon" width="62" height="19"/></a></li>
                            <li class="shop-list-item"><a class="shop-link global-link" href="${
                              buy_links[1].url
                            }"><img class="shop-icon" src=${require('../images/modal-window-book/icons/open-book_bk.png')} alt="apple-book" width="32" height="32"/></a></li>
                            <li class="shop-list-item"><a class="shop-link global-link" href="${
                              buy_links[4].url
                            }"><img class="shop-icon" src=${require('../images/modal-window-book/icons/book-shop_bk.png')} alt="book-shop" width="38" height="36"/></a></li>
                        </ul>
                    </div>
                    </div>
                    <button class="add-rem-btn light-theme theme-switch global-button" type="button">xxxXXXxxx</button>
                    <button class="close-btn light-theme theme-switch global-button" type="button">&times;</button>
                    <p class="congratulations global-p no-content">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
                </div>`;
      shopping_info.theme === 'light'
      ? renderTheme('light')
      : renderTheme('dark');
    }

    function funcBtn(id, book) {
      const addRemBtn = document.querySelector('.add-rem-btn');
      const congratulations = document.querySelector('.congratulations');
      addRemBtn.textContent = 'ADD TO SHOPING LIST';
      addRemBtn.addEventListener('click', function () {
        if (!shopping_info.shopping_list[id]) {
          addBook(id, book);
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
