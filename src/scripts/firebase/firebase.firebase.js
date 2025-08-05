import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./config.firebase";
import catchError from "../utils/utils.catchError";
import { Notify } from "notiflix";

export const getUserById = catchError(async function (userId) {
  if (!userId) {
    Notify.failure("You are not logged in");
    return;
  }
  const snapShot = await getDoc(doc(db, "users", userId));
  return snapShot.data();
});

export const updateUserFavBooks = catchError(async function (
  userId,
  newFavBooks
) {
  if (!userId) {
    Notify.failure("You are not logged in");
    return;
  }
  await updateDoc(doc(db, "users", userId), {
    favBooks: newFavBooks,
  });
  return newFavBooks;
});
