import Storage from "../../../classes/Storage/Storage";

export default class ThemeStorage {
  constructor() {
    this.storage = new Storage("theme");
    this.theme = "light-theme";
  }

  init() {
    const theme = this.getTheme();

    if (!theme) {
      this.setTheme("light-theme");
      this.theme = "light-theme";
    } else {
      this.theme = theme;
    }

    document.documentElement.className = theme;
  }

  getTheme() {
    this.theme = this.storage.getItem();
    return this.theme;
  }

  setTheme(newTheme) {
    if (newTheme !== "light-theme" && newTheme !== "dark-theme") return;
    this.storage.setItem(newTheme);
    document.documentElement.className = newTheme;
  }
}
