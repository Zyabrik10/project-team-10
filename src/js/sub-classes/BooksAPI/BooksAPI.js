import API from "../../classes/API/API";
import Notiflix from "notiflix";

export default class BooksAPI {
  constructor() {
    this.baseURL = "https://books-backend.p.goit.global/books";
    this.API = new API({ baseURL: this.baseURL });
  }

  async getAllBooksCategories() {
    try {
      const response = await this.API.fetch({ api: "/category-list" });

      return response.data;
    } catch (error) {
      Notiflix.Notify.failure("Sorry, something is wrong. Please try later.");
      console.error(error);
    }
  }

  async getBookBookbyId(bookId) {
    try {
      const response = await this.API.fetch({ api: `/${bookId}` });

      return response.data;
    } catch (error) {
      Notiflix.Notify.failure("Sorry, something is wrong. Please try later.");
      console.error(error);
      throw error;
    }
  }

  async getBooksByExactCategory(item) {
    try {
      const response = await this.API.fetch({
        api: `/category`,
        query: {
          category: item
        }
      });

      return response.data;
    } catch (error) {
      Notiflix.Notify.failure("Sorry, something is wrong. Please try later.");
    }
  }

  async getTopBooks() {
    try {
      const response = await this.API.fetch({
        api: "/top-books",
      });

      return response.data;
    } catch (error) {
      Notiflix.Notify.failure("Sorry, something is wrong. Please try later.");
      console.error(error);
    }
  }
}
