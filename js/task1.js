
const search = document.querySelector(".search");
const input = document.querySelector(".input")
const p = document.querySelector(".p1")


search.addEventListener("click", () => {
    const inputValue = input.value;
    if(inputValue % 4 === 0){
        // console.log('  ви народилися  в високосний рік');
        p.textContent = 'ви народилися  в високосний рік'
         p.style.color='green'
    }
    else{
        // console.log(' ви народилися  не в високосний рік');
        p.textContent = 'ви народилися не  в високосний рік'
        p.style.color='red'
    }
}  );






