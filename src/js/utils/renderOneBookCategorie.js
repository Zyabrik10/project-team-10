import cardBox from "../config/cardBox";

const booksListTitle = document.querySelector(".heading-primary");

export default function renderOneBookCategorie(data) {
    const text = data[0].list_name;
    const textArray = text.split(" ");
    
    booksListTitle.innerHTML = `<h1 class="heading-primary">${textArray.map((e, index) => {
        if (index === textArray.length - 1) return;
        return e;
    }).join(" ")} <span class="colored-heading">${
      textArray[textArray.length - 1]
    }</span></h1>`;

    const list = data.map(({ author, book_image, title, _id }) => {
        return {
            author,
            book_image,
            title,
            _id
        };
    });

    cardBox.clearImages();
    cardBox.addImages(list);
}