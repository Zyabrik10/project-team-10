import axios from 'axios';
// import {catchError} from '../utils';
import catchError from '../utils/utils.catchError';

const baseUrl = "https://books-backend.p.goit.global/books";

export const getAllBooksCategories = catchError(async function () {
  const response = await axios.get(`${baseUrl}/category-list`);

  return response.data;
});

export const getBookById = catchError(async function (bookId) {
  const response = await axios.get(`${baseUrl}/${bookId}`);

  return response.data;
});

export const getBooksByExactCategory = catchError(async function (category) {
  const params = new URLSearchParams({category});
  const response = await axios.get(`${baseUrl}/category?${params}`);

  return response.data;
});

export const getTopBooks = catchError(async function () {
  const response = await axios.get(`${baseUrl}/top-books`);

  return response.data;
});