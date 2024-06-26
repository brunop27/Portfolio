const allBtnArrow = document.querySelectorAll('.button-arrow');
const nodeCard = document.querySelectorAll('.node-card')
const maxNodeCard = nodeCard.length;
let currentItem = 0;

allBtnArrow.forEach(controle =>{
    controle.addEventListener('click', () =>{
        const isLeft = controle.classList.contains("-left");

        if(isLeft){
            currentItem--;
        }else{
            currentItem++;
        }

        if(currentItem>= maxNodeCard){
            currentItem = 0;
        }

        if(currentItem<0){
            currentItem = maxNodeCard - 1;
        }

        nodeCard.forEach((item) => item.classList.remove("current-item"));
        nodeCard[currentItem].scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

        nodeCard[currentItem].classList.add("current-item");
    })
})