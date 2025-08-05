export default function formatTitle(title) {
    const splittedTitle = title.split(" ");

    if (splittedTitle.length === 1) return title;

    return `${splittedTitle
      .slice(0, splittedTitle.length - 1)
      .join(" ")} <span>${splittedTitle[splittedTitle.length - 1]}</span>`;
  }