const burgerModal = document.querySelector(".burger-modal-backdrop");

export default function toggleBurgerMenu() {
    burgerModal.classList.toggle("active");
    document.body.classList.toggle("locked");
}