export default class Storage {
  constructor(storageName) {
    this.storageName = storageName;
  }

  getItem() {
    return JSON.parse(localStorage.getItem(this.storageName));
  }

  setItem(value) {
    localStorage.setItem(this.storageName, JSON.stringify(value));
  }
}
