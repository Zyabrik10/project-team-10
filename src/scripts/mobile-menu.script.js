(()=>{
    const headerMobileMenuButton = document.querySelector('.header-mobile-menu-button');
    const mobileModal = document.querySelector('.mobile-modal');

    headerMobileMenuButton.addEventListener('click', ()=>{
        headerMobileMenuButton.classList.toggle('active');
        mobileModal.classList.toggle('active');
    });
})();