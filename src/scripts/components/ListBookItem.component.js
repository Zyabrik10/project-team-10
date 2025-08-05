export default function ListBookItem({ _id, book_image, title, author }) {
  const a = document.createElement("a");
  a.classList.add("book-item");
  a.href = "#";
  a.dataset.id = _id;
  a.dataset.modalId = "book-info";

  const div = document.createElement("div");

  const img = document.createElement("img");
  img.src = book_image;
  img.alt = title;
  img.loading = "lazy";
  img.width = 185;

  const p = document.createElement("p");
  p.classList.add("quick-view");
  p.innerText = "Quick view";

  div.appendChild(img);
  div.appendChild(p);

  const h4 = document.createElement("h4");
  h4.innerText = title;

  const p2 = document.createElement("p");
  p2.classList.add('author');
  p2.innerText = author;

  a.appendChild(div);
  a.appendChild(h4);
  a.appendChild(p2);
  return a;
}
