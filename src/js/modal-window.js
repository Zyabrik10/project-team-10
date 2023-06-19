// тут треба описати вікритя та закритя вікна
// також логіку при натиснення на кнопку додати книгу або видалити

import { addBook, removeBook } from './books-action';
import { fetchBook } from './fetch-func';

export function modalWindow() {
    
        const cardList = document.querySelector(".tb-container");

         cardList.addEventListener("click", (e) => {
             e.preventDefault()
             const linkId = e.target.closest(".global-link")
             if (linkId && linkId.hasAttribute("data-id")) {
                 const dataId = e.target.closest(".global-link").getAttribute("data-id");
                 console.log(dataId)   
                 fetchBook(dataId)
                    .then((data) => {
                        console.log(data);                    
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                 
                 } else {console.log("Промазав по картці, спробуй ще)))")}
            
            
             
            


            function openCloseModal() {
        
            }

            // (() => {
               
            //   const refsOne = {
            //     openModal: document.querySelector(".global-link"), // додаємо селектор картки з описом книги
            //     closeModalBtn: document.querySelector(".clotheBtn"), // додаємо селектор кнопки закриття модалки
            //     modal: document.querySelector(".backdrop"), // додаємо селектор бекдропу
            //   };
            
            //   refsOne.openModal.addEventListener("click", toggleModal);
            //   refsOne.closeModalBtn.addEventListener("click", toggleModal);
            
            //   function toggleModal() {
            //     refsOne.modal.classList.toggle("is-hidden");
            //   }
            // })();
               
            


        })

}
