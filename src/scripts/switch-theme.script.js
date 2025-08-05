import { localStorageGetItem, localStorageSetItem } from "./utils";

(() => {
  const inputThemeSwitcher = document.querySelector("#theme-input-switcher");
  const prefTheme = localStorageGetItem("theme", "light-theme");

  if (prefTheme === "dark-theme") {
    inputThemeSwitcher.checked = true;
    document.documentElement.classList.add("dark-theme");
  }

  inputThemeSwitcher.addEventListener("change", function () {
    if (this.checked) {
      localStorageSetItem("theme", "dark-theme");
      document.documentElement.classList.add("dark-theme");
    } else {
      localStorageSetItem("theme", "light-theme");
      document.documentElement.classList.remove("dark-theme");
    }
  });
})();
