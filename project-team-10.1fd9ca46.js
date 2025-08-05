(()=>{
    const navButtons = document.querySelectorAll(".registration-modal-navigation .button");
    const formElement = document.querySelector("#registration-modal .forms");
    navButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            if (button.dataset.role === "signup") formElement.classList.remove("login");
            else if (button.dataset.role === "login") formElement.classList.add("login");
        });
    });
})();

//# sourceMappingURL=project-team-10.1fd9ca46.js.map
