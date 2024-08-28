import axios from "axios";

export default class API {
  constructor({ baseURL, token = "" }) {
    this.baseURL = baseURL;
    this.token = token;
  }

  async fetch({ api = "", query = {} }) {
    const searchParams = new URLSearchParams(query);

    const url = `${this.baseURL}${api}/?${searchParams}`;

    return await axios.get(url);
  }
}
