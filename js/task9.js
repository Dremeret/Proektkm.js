const photoD = document.querySelector(".phDima");
const Cards = document.querySelectorAll(".teamimg div");
const strl = document.querySelector(".strl");
const strr = document.querySelector(".strr");
const name = document.querySelector(".name");
const info = document.querySelector(".inform");
const liMain = document.querySelectorAll(".Ulmain");

const liDima = document.querySelector(".liDima");
const liMax = document.querySelector(".liMax");
const li = document.querySelectorAll(".D1");
const img = document.querySelectorAll(".B2")
var number =  0;

strr.addEventListener("click", () => {
  Cards.forEach((item) => {
    let right = parseFloat(window.getComputedStyle(item).left) - 160;
    item.style.left = right + "px";
    if( number == 1){
      strr.style.opacity = '0%'
      strl.style.opacity = '100%'
      return;
    }
    if( number == 0){
      strr.style.opacity = '100%'
      strl.style.opacity = '100%'
      return;
    }
   
 
  });
});
strl.addEventListener("click", () => {
  Cards.forEach((item) => {
    let left = parseFloat(window.getComputedStyle(item).left) + 160;
    item.style.left = left + "px";
    if( number == 1){
      strl.style.opacity = '0%'
      strr.style.opacity = '100%'
      return;
    }
  });
});



strr.addEventListener("click", () => {

    if(number < 2){
        number++
        li[number-1].classList.remove("B1")
        li[number].classList.add("B1")
    }
  
});

strl.addEventListener("click", () => {
    if(number > 0){
        number -= 1
        li[number + 1].classList.remove("B1")
        li[number].classList.add("B1")
    }

});



