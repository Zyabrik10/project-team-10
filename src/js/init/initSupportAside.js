const supportButton = document.querySelector(".support-button");
const supportList = document.querySelector(".support-list");

let isScrolledToEnd = false;

function onScrollBtn() {
  if (isScrolledToEnd) {
    supportList.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    supportList.scrollTo({ top: supportList.scrollHeight, behavior: "smooth" });
  }
  supportButton.classList.toggle("rotate");
  isScrolledToEnd = !isScrolledToEnd;
}


function onListScroll() {
  const isEndOfList =
    supportList.scrollTop ===
    supportList.scrollHeight - supportList.clientHeight;
    supportButton.classList.toggle("rotate", isEndOfList);
    isScrolledToEnd = isEndOfList;
}


export default function initSupportAside() {
    supportButton.addEventListener("click", onScrollBtn);
    supportList.addEventListener("scroll", onListScroll);
}