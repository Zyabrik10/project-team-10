export default function catchError(fn, message = null) {
  return async function (...args) {
    try {
      return fn(...args);
    } catch (e) {
      console.error('Error:', e);
      return message;
    }
  };
}
