export default function Modal() {
  return `
 <div class="book-modal-wrapper">
      <div class="book-modal-content">
        <button class="book-modal-close-button" type="button">&times;</button>
        <div class="book-modal-content-box">
          <img class="book-modal-book-icon" src="" alt="Book wrap" width="287" height="458" />
          <div class="book-modal-book-about">
            <div class="book-modal-book-title-author">
              <h2 class="book-modal-book-title"></h2>
              <p class="book-modal-book-author"></p>
            </div>
            <p class="book-modal-book-description"></p>
            <ul class="book-modal-shops-list">
              <li>
                <a class="book-modal-shop-link" href="">
                  <img class="book-modal-shop-icon" src=${require('../../images/modal-window-book/icons/amazon_bk.png')} alt="amazon" width="62" height="19"/>
                </a>
              </li>
              <li>
                <a class="book-modal-shop-link" href="">
                  <img class="book-modal-shop-icon" src=${require('../../images/modal-window-book/icons/open-book_bk.png')} alt="apple-book" width="32" height="32"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button class="book-modal-add-button" type="button">ADD TO SHOPING LIST</button>
        <p class="book-modal-text-congratulation">
          Сongratulations! You have added the book to the shopping list. 
          To delete, press the button “Remove from the shopping list”.
        </p>
      </div>
    </div>
  `;
}
