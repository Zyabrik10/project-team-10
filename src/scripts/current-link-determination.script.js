(() => {
  const headerLinks = document.querySelectorAll(".header-link");

  headerLinks.forEach((link) => {
    link.classList.remove("current");

    let currentPage = window.location.href.split("/").at(-1);
    let linkPage = link.href.split("/").at(-1);

    if (currentPage === "") currentPage = "index.html";
    if (linkPage === "") linkPage = "index.html";

    if (currentPage === linkPage) {
      link.classList.add("current");
    }
  });
})();
