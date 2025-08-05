import { signup, signin, onUserLoggedIn, logout, getUserById } from "./firebase";
import { ModalWindow } from "./classes";
import { localStorageSetItem } from './utils'

(async () => {
  const registrationModal = new ModalWindow("registration-modal");
  registrationModal.init();

  const signinForm = document.querySelector('#registration-modal .forms form[data-role="signin"]');
  const loginForm = document.querySelector('#registration-modal .forms form[data-role="login"]');
  const headerAuthButtons = document.querySelectorAll('.header-auth-buttons');
  const logoutButton = document.querySelectorAll('button[data-role="logout"]');
  const headerShoppingCartNumber = document.querySelectorAll('.header-shopping-cart-number');


  onUserLoggedIn(async (loggedInUser) => {
    if (loggedInUser) {
      const user = await getUserById(loggedInUser.uid);
      
      headerShoppingCartNumber.forEach(e => e.innerText = user.favBooks.length);

      registrationModal.hideModalWindow();
      localStorageSetItem('user-id', loggedInUser.uid);
      localStorageSetItem('user-fav-books', user.favBooks);
      
      headerAuthButtons.forEach(e => e.classList.add('active'));
    } else {
      headerAuthButtons.forEach(e => e.classList.remove('active'));
      localStorageSetItem('user-id', '');
      localStorageSetItem('user-fav-books', '');
      headerShoppingCartNumber.forEach(e => e.innerText = 0);
    }
  });

  signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newUserBuffer = {
      username: signinForm.username.value.trim(),
      email: signinForm.email.value.trim(),
      password: signinForm.password.value.trim(),
      favBooks: []
    }

    await signup(newUserBuffer);
  });

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newUserBuffer = {
      email: loginForm.email.value.trim(),
      password: loginForm.password.value.trim()
    }

    await signin(newUserBuffer);
  });

  logoutButton.forEach(button => button.addEventListener('click', () => {
    logout();
  }));
})();