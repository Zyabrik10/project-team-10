import { user } from '../config';
import { signin, signup, logout } from '../utils/user-firebase';
import _ from 'lodash';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function initAuth() {
  user.initUser();
  user.initFormStorage();

  const formInputs = document.querySelectorAll('.auth-input-label-box > input');
  const signupButton = document.querySelector('.auth-main-button.signup');
  const logoutButton = document.querySelector(
    '.header-user-box .logout-button'
  );
  const loginButton = document.querySelector('.auth-main-button.login');
  const formFields = user.getFormStorage();

  formInputs.forEach(e => {
    const type = e.dataset.type;
    const item = e.dataset.item;

    if (type && item) {
      e.value = formFields[type][item];

      if (formFields[type][item].trim().length > 0) {
        e.classList.add('active');
      }
    }

    e.addEventListener(
      'input',
      _.throttle(async ({ currentTarget }) => {
        if (currentTarget === null) return;

        if (currentTarget.value.trim().length > 0) {
          currentTarget.classList.add('active');
        } else {
          currentTarget.classList.remove('active');
        }

        if (type && item) {
          user.setFormStorage(type, item, currentTarget.value.trim());
        }
      }, 100)
    );
  });

  const buttonsSignUp = document.querySelectorAll('.signup-button');
  const closeButtonSignUp = document.querySelector('.auth-close-button');
  const authModal = document.querySelector('.auth-modal');
  const headerUserBox = document.querySelector('.header-user-box');

  if (
    user.user.id &&
    user.user.email &&
    user.user.token &&
    user.user.username
  ) {
    triggerAuthButtons(true);
  } else {
    triggerAuthButtons(false);
  }

  function closeOnKeyDown({ key }) {
    if (key === 'Escape') {
      closeAuthModal();
    }
  }

  function closeAuthModal() {
    authModal.classList.remove('active');
    document.body.classList.remove('locked');

    window.removeEventListener('keydown', closeOnKeyDown);
  }

  buttonsSignUp.forEach(e =>
    e.addEventListener('click', () => {
      authModal.classList.add('active');
      document.body.classList.add('locked');
      window.addEventListener('keydown', closeOnKeyDown);
    })
  );
  closeButtonSignUp.addEventListener('click', closeAuthModal);

  const signupForm = document.querySelector('.signup-form');
  const signinForm = document.querySelector('.signin-form');

  signupForm.addEventListener('submit', e => {
    e.preventDefault();

    const username = e.currentTarget.signup_username.value.trim();
    const email = e.currentTarget.signup_email.value.trim();
    const password = e.currentTarget.signup_password.value.trim();

    if (username.length === 0) {
      Notify.info('Provide a username');
      return;
    }

    if (email.length === 0) {
      Notify.info('Provide an email');
      return;
    } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      Notify.info('Provide valid email');
      return;
    }

    if (password.length === 0) {
      Notify.info('Provide a password');
      return;
    }

    signupButton.disabled = true;
    signupButton.style.cursor = 'not-allowed';

    signup(username, email, password)
      .then(_user => {
        if (_user) {
          userAuthSuccess();
          user.updateUser({
            id: _user.id,
            email: _user.email,
            token: _user.token,
            username: _user.username,
            isVerified: true,
          });
        } else {
          Notify.failure('Error authenticating');
        }

        signupButton.disabled = false;
        signupButton.style.cursor = 'pointer';
      })
      .catch(() => {
        loginButton.disabled = false;
        loginButton.style.cursor = 'pointer';
      });
  });

  signinForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = e.currentTarget.signin_email.value.trim();
    const password = e.currentTarget.signin_password.value.trim();

    if (email.length === 0) {
      Notify.warning('Provide an email');
      return;
    } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      Notify.warning('Provide valid email');
      return;
    }

    if (password.length === 0) {
      Notify.warning('Provide a password');
      return;
    }

    loginButton.disabled = true;
    loginButton.style.cursor = 'not-allowed';

    signin(email, password)
      .then(_user => {
        if (_user) {
          userAuthSuccess();
          user.updateUser({
            id: _user.id,
            email: _user.email,
            token: _user.token,
            username: _user.username,
            isVerified: true,
          });
        } else {
          Notify.failure('Error authenticating');
        }

        loginButton.disabled = false;
        loginButton.style.cursor = 'pointer';
      })
      .catch(() => {
        loginButton.disabled = false;
        loginButton.style.cursor = 'pointer';
      });
  });

  logoutButton.addEventListener('click', async () => {
    await logout();
    user.updateUser({
      id: '',
      email: '',
      token: '',
      username: '',
      isVerified: false,
    });
    triggerAuthButtons(false);
    closeAuthModal();
    Notify.info('Logged out');
  });

  function userAuthSuccess() {
    closeAuthModal();
    Notify.success('Success');
    triggerAuthButtons(true);
  }

  function triggerAuthButtons(state = false) {
    if (state) {
      headerUserBox.classList.add('logout');
      headerUserBox.classList.remove('signup');
      return;
    }

    headerUserBox.classList.add('signup');
    headerUserBox.classList.remove('logout');
  }
}
