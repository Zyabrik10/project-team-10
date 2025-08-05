import {
  localStorageGetItem,
  localStorageSetItem,
} from "./utils";

(() => {
  const formsInput = document.querySelectorAll(
    "#registration-modal .forms form input"
  );

  const localStorageInputValues = localStorageGetItem("user-form-input", {});

  formsInput.forEach((input) => {
    setInputValueFromLocalStorage(localStorageInputValues, input);
    setInputActive(input);

    input.addEventListener("input", () => {
      setInputActive(input);
      localStorageSetItem("user-form-input", {
        ...localStorageInputValues,
        [input.name]: input.value.trim(),
      });
      localStorageInputValues[input.name] = input.value.trim();
    });
  });
  
  function setInputActive(input) {
    if (!input.value.trim().length) {
      input.classList.remove("active");
      return;
    }
  
    input.classList.add("active");
  }
  
  function setInputValueFromLocalStorage(localStorageInputValues, input) {
    if (localStorageInputValues[input.name]) {
      input.value = localStorageInputValues[input.name];
    } else {
      localStorageSetItem("user-form-input", {
        ...localStorageInputValues,
        [input.name]: input.value.trim(),
      });
      localStorageInputValues[input.name] = input.value.trim();
    }
  }
})();