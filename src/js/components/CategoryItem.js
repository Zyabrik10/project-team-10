export default function CategoryItem({ list_name }) {
  return `
  <li class="category-item" data-name="${list_name}">
    <button class="category-link" data-name="${list_name}" type="button">${list_name}</button>
  </li>
`;
}
