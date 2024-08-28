import {user} from "../config";


const switchThemeButtons = document.querySelectorAll(".theme-input-switcher");
export default function initThemeSwitcher() {
    const { themeStorage } = user;

    themeStorage.init();
    switchThemeButtons.forEach((button) => {
        if (themeStorage.getTheme() === "dark-theme") {
            button.checked = true;
        }

        button.addEventListener("click", () => {
            if (themeStorage.getTheme() === "dark-theme") {
                themeStorage.setTheme("light-theme");
            } else {
                themeStorage.setTheme("dark-theme");
            }
        });
    });
}