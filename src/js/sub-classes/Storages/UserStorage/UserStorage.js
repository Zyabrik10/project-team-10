import { Storage } from '../../../classes';
import { getAuthedUserToken } from '../../../utils/user-firebase';
import ThemeStorage from '../ThemeStorage/ThemeStorage';

export default class UserStorage {
  constructor() {
    this.themeStorage = new ThemeStorage();
    this.storage = new Storage('user');
    this.formStorage = new Storage('formStorage');

    this.user = {
      id: '',
      token: '',
      email: '',
      username: '',
      isVerified: false,
    };
  }

  initFormStorage() {
    const formStorage = this.getFormStorage();
    if (!formStorage) {
      this.formStorage.setItem({
        signup: {
          email: '',
          username: '',
        },
        signin: {
          email: '',
        },
      });
    }
  }

  getFormStorage() {
    return this.formStorage.getItem();
  }

  setFormStorage(type, item, value) {
    const newStorage = {
      ...this.formStorage.getItem(),
      [type]: {
        ...this.formStorage.getItem()[type],
        [item]: value,
      },
    };
    this.formStorage.setItem(newStorage);
  }

  getUser() {
    return this.storage.getItem();
  }

  async initUser() {
    const user = this.getUser();

    if (!user) {
      this.storage.setItem(this.user);
      return;
    }

    this.user = user;

    if ((await getAuthedUserToken()) === this.user.token) {
      this.isVerified = true;
      this.saveUser();
    } else {
      this.isVerified = false;
    }
  }

  saveUser() {
    this.storage.setItem(this.user);
  }

  updateUser(newUser) {
    const { email, username, token, id, isVerified } = newUser;
    if (email !== undefined) this.user.email = email;
    if (username !== undefined) this.user.username = username;
    if (token !== undefined) this.user.token = token;
    if (id !== undefined) this.user.id = id;
    if (isVerified !== undefined) this.isVerified = isVerified;

    this.saveUser();
  }
}
