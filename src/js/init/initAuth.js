import { user } from "../config";
import { signin, signup } from "../utils/auth";
import _ from "lodash"; 
import setAuthUser from "../utils/user/setAuthUser";
import Notiflix from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function initAuth() {
      // user.initUser();
      const formInputs = document.querySelectorAll(
        ".auth-input-label-box > input"
      );
      formInputs.forEach((e) => {
        e.addEventListener(
          "input",
          _.throttle(async ({ currentTarget }) => {
            if (currentTarget === null) return;

            if (currentTarget.value.trim().length > 0)
              currentTarget.classList.add("active");
            else currentTarget.classList.remove("active");
          }, 100)
        );
      });

      const buttonsSignUp = document.querySelectorAll(".signup-button");
      const closeButtonSignUp = document.querySelector(".auth-close-button");
      const authModal = document.querySelector(".auth-modal");

      function closeOnKeyDown({ key }) {
        if (key === "Escape") {
          closeAuthModal();
        }
      }

      function closeAuthModal() {
        authModal.classList.remove("active");
        document.body.classList.remove("locked");

        window.removeEventListener("keydown", closeOnKeyDown);
      }

      buttonsSignUp.forEach((e) =>
        e.addEventListener("click", () => {
          authModal.classList.add("active");
          document.body.classList.add("locked");
          window.addEventListener("keydown", closeOnKeyDown);
        })
      );
      closeButtonSignUp.addEventListener("click", closeAuthModal);

      const signupForm = document.querySelector(".signup-form");
      const signinForm = document.querySelector(".signin-form");

      signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        Notify.warning("Server is under development");

        // const username = e.currentTarget.signup_username.value.trim();
        // const email = e.currentTarget.signup_email.value.trim();
        // const password = e.currentTarget.signup_password.value.trim();

        // if (username.length === 0) {
        //   alert("Provide a username");
        //   return;
        // }

        // if (email.length === 0) {
        //   alert("Provide an email");
        //   return;
        // } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        //   alert("Provide valid email");
        //   return;
        // }

        // if (password.length === 0) {
        //   alert("Provide a password");
        //   return;
        // }

        // signup(username, email, password).then((status) => {
        //   if (status) {
        //     closeAuthModal();
        //     setAuthUser();
        //   } else {
        //     console.error("Error");
        //   }
        // });
      });

      signinForm.addEventListener("submit", (e) => {
        e.preventDefault();

        Notify.warning("Server is under development");

        // const email = e.currentTarget.signin_email.value.trim();
        // const password = e.currentTarget.signin_password.value.trim();

        // if (email.length === 0) {
        //   alert("Provide an email");
        //   return;
        // } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        //   alert("Provide valid email");
        //   return;
        // }

        // if (password.length === 0) {
        //   alert("Provide a password");
        //   return;
        // }

        // signin(email, password).then(({ status }) => {
        //   if (status) {
        //     console.log("Success");
        //   }
        // });
      });
}