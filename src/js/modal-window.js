// тут треба описати вікритя та закритя вікна
// також логіку при натиснення на кнопку додати книгу або видалити

import { addBook, removeBook } from './books-action';
import { fetchBook } from './fetch-func';

export function modalWindow() {
  const cardList = document.querySelector('.tb-container');
  const backdropModal = document.querySelector('.backdrop');
  const loader = document.querySelector('.loader');

  const modal = backdropModal;

  // openModal.addEventListener("click", toggleModal);

  cardList.addEventListener('click', e => {
    e.preventDefault();
    loader.classList.remove('is-hidden');

    const linkId = e.target.closest('.global-link');
    if (linkId && linkId.hasAttribute('data-id')) {
      const dataId = e.target.closest('.global-link').getAttribute('data-id');
      console.log(dataId);
      fetchBook(dataId)
        .then(data => {
          console.log(data);
          loader.classList.add('is-hidden');
          toggleModal();
          markupModal(data);

          const closeModalBtn = document.querySelector('.close-btn');
          closeModalBtn.addEventListener('click', toggleModal);
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
                    <button class="add-rem-btn global-button" type="button">xxxXXXxxx</button>
                    <button class="close-btn global-button" type="button"><img class="shop-icon" src=${require('../images/modal-window-book/icons/x-close.png')} alt="X" width="18" height="18"/></button>
                    <p class="congratulations global-p">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
                </div>`;
    }

    function toggleModal() {
      modal.classList.toggle('is-hidden');
    }

    // const openModal = document.querySelector(".global-link");

    // markupModal(data)
  });
}
