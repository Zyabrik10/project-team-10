import { changeToggleFavButton } from './utils';

(()=>{
    const addBookButton = document.querySelector('.add-book-button');

    addBookButton.addEventListener('click', async function(){
        const bookId = this.dataset.id;
        const hasBook = this.dataset.hasBook;
        
        addBookButton.disabled = true;
        await changeToggleFavButton(this, bookId, hasBook);
        addBookButton.disabled = false;
    });
})();