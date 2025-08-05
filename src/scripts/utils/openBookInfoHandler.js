import { getBookById } from "../apis";
import { hasFavBook } from "../utils";

export default async function openBookInfoHandler({ currentTarget }, modal) {
  const bookId = currentTarget.dataset.id;
  const { book_image, title, author, description, buy_links } = await getBookById(bookId);
  const hasBook = hasFavBook(bookId);

  const bookCover = modal.mw.querySelector(".book-cover");
  const titleElement = modal.mw.querySelector(".title");
  const authorElement = modal.mw.querySelector(".author");
  const bookDescriptionElement = modal.mw.querySelector(".book-description");
  const shopListElement = modal.mw.querySelector(".book-modal-shops-list");
  const addBookButton = modal.mw.querySelector(".add-book-button");
  const congElement = modal.mw.querySelector(".cong");

  if (book_image){
    bookCover.src = book_image;
  }else{
    bookCover.innerHTML = '<p>No Image</p>';
  }

  titleElement.innerText = title || 'No title';
  authorElement.innerText = author || 'No author';
  bookDescriptionElement.innerText = description || 'No description';

  addBookButton.dataset.id = bookId;
  addBookButton.dataset.hasBook = hasBook;
  addBookButton.innerText = hasBook ? 'remove from shopping list' : 'add to shopping list';

  hasBook ? congElement.classList.add('active') : congElement.classList.remove('active');

  shopListElement.innerHTML = `
            ${buy_links
              .map(({ name, url }) => {
                let imageSrc = "";

                switch (name) {
                  case "Amazon":
                    imageSrc = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="16px" viewBox="0 0 35.418 35.418" xml:space="preserve"><g><path d="M20.948,9.891c-0.857,0.068-1.847,0.136-2.837,0.269c-1.516,0.195-3.032,0.461-4.284,1.053c-2.439,0.994-4.088,3.105-4.088,6.209c0,3.898,2.506,5.875,5.669,5.875c1.057,0,1.913-0.129,2.703-0.328c1.255-0.396,2.31-1.123,3.562-2.441c0.727,0.99,0.923,1.453,2.177,2.509c0.329,0.133,0.658,0.133,0.922-0.066c0.791-0.659,2.174-1.848,2.901-2.508c0.328-0.267,0.263-0.66,0.066-0.992c-0.727-0.924-1.45-1.718-1.45-3.498v-5.943c0-2.513,0.195-4.822-1.647-6.537c-1.518-1.391-3.891-1.916-5.735-1.916c-0.264,0-0.527,0-0.792,0c-3.362,0.197-6.921,1.647-7.714,5.811c-0.13,0.525,0.267,0.726,0.53,0.793l3.691,0.464c0.396-0.07,0.593-0.398,0.658-0.73c0.333-1.449,1.518-2.176,2.836-2.309c0.067,0,0.133,0,0.265,0c0.79,0,1.646,0.332,2.109,0.987c0.523,0.795,0.461,1.853,0.461,2.775L20.948,9.891L20.948,9.891z M20.223,17.749c-0.461,0.925-1.253,1.519-2.11,1.718c-0.131,0-0.327,0.068-0.526,0.068c-1.45,0-2.31-1.123-2.31-2.775c0-2.11,1.254-3.104,2.836-3.565c0.857-0.197,1.847-0.265,2.836-0.265v0.793C20.948,15.243,21.01,16.43,20.223,17.749z M35.418,26.918v0.215c-0.035,1.291-0.716,3.768-2.328,5.131c-0.322,0.25-0.645,0.107-0.503-0.254c0.469-1.145,1.541-3.803,1.04-4.412c-0.355-0.465-1.826-0.43-3.079-0.322c-0.572,0.072-1.075,0.105-1.469,0.183c-0.357,0.033-0.431-0.287-0.071-0.537c0.466-0.323,0.969-0.573,1.541-0.756c2.039-0.608,4.406-0.25,4.729,0.146C35.348,26.414,35.418,26.629,35.418,26.918zM32.016,29.428c-0.466,0.357-0.965,0.682-1.468,0.973c-3.761,2.261-8.631,3.441-12.856,3.441c-6.807,0-12.895-2.512-17.514-6.709c-0.396-0.324-0.073-0.789,0.393-0.539C5.549,29.5,11.709,31.26,18.084,31.26c4.013,0,8.342-0.754,12.463-2.371c0.285-0.104,0.608-0.252,0.895-0.356C32.087,28.242,32.661,28.965,32.016,29.428z"/></g></svg>`;
                    break;
                  case "Apple Books":
                    imageSrc = "<p>IBooks</p>";
                    break;
                }

                return `<li>
                <a class="link" href="${url}" target="_blank" rel="noopener noreferrer">
                   ${imageSrc}
                </a>
            </li>
            `;
              })
              .join("")}
    `;
}
