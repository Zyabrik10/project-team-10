import { Storage } from "../../../classes";
import setAuthUser from "../../../utils/user/setAuthUser";
import setUnAuthUser from "../../../utils/user/setUnAuthUser";
import BooksStorage from "../BooksStorage/BooksStorage";
import ThemeStorage from "../ThemeStorage/ThemeStorage";

export default class UserStorage {
    constructor() {
        this.themeStorage = new ThemeStorage();
        this.booksStorage = new BooksStorage();
        this.storage = new Storage("user");

        this.user = {
            token: "",
            email: "",
            username:""
        }
    }

    getUser() {
        const user = this.storage.getItem();
        return user;
    }

    async initUser() {
        const user = this.getUser();
        if (!user) {
            this.storage.setItem(this.user);
            this.user = user;
            setAuthUser();
        } else {
            setUnAuthUser();
        }

    }

    saveUser() {
        this.storage.setItem(this.user);
    }

    updateUser(newUser) {
        const {email, username, token} = newUser;
        if (email) this.user.email = email;
        if (username) this.user.username = username;
        if (token) this.user.token = token;

        this.saveUser();
    }
}