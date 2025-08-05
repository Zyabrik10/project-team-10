import { throttle } from "./utils";

(()=>{
    const supportListElement = document.querySelector('.support-list');
    const asideSupportButton = document.querySelector('.aside-support-button');
    let prevScrollY = 0;
    let direction = 0;

    supportListElement.addEventListener('scroll', throttle(function(){
        if (this.scrollTop > prevScrollY){ // scroll to bottom
            asideSupportButton.classList.add('active');
            direction = 1;
        }else{ // scroll to top
            asideSupportButton.classList.remove('active');
            direction = 0;
        }

        prevScrollY = this.scrollTop;
    }, 100));

    asideSupportButton.addEventListener('click', ()=>{        
        if (direction === 1){
            supportListElement.scrollTo(0, 0);
        }else{
            supportListElement.scrollTo(0, supportListElement.scrollHeight - supportListElement.scrollTop);
        }
    });
})();