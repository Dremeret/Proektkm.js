const search2 = document.querySelector(".search2");
const input2 = document.querySelector(".input2")
const p2 = document.querySelector(".p2")


search2.addEventListener("click",()=>{
    const inputValue2 = input2.value;
    const  Num = Math.floor(Math.random() * 10) ;
     if(inputValue2 === Num){
        p2.textContent = 'Вітаю, ви вгадали число! '
        p2.style.color='green'
     }
     else{
        p2.textContent = 'Ви програли'
        p2.style.color='red'
    }
     }
)












