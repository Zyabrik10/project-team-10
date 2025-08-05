import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function catchError(fn, message = null) {
  return async function (...args) {
    try {
      return fn(...args);
    } catch (e) {
      Notify.failure(e);
      console.error('Error:', e);
      return message;
    }
  };
}