document.querySelectorAll(".header-link").forEach(e=>{e.classList.remove("current");let t=window.location.href.split("/").at(-1),l=e.href.split("/").at(-1);""===t&&(t="index.html"),""===l&&(l="index.html"),t===l&&e.classList.add("current")});
//# sourceMappingURL=project-team-10.e56cc36d.js.map
