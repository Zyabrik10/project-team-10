export default class Categories {
  init(listSelector, murkup) {
    this.categoryList = document.querySelector(listSelector);
    this.murkup = murkup;
  }

  render(list) {
    const markup = list
      .map((obj, index) => {
        return this.murkup({ ...obj, index });
      })
      .join('');
    
    this.categoryList.insertAdjacentHTML('beforeend', markup);
  }
}
