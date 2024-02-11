// const dino = document.querySelector(".Dino")
// const cactus = document.querySelector(".cactus")
// const stopButton = document.getElementById("stopButton");
// document.addEventListener("click", function(event){
//     jump();
//     console.log("вы прыгнули")
// })

// function jump () {
//    if (dino.classList != "jump") {
//     dino.classList.add("jump")
//    }


//    setTimeout( function(){
//     dino.classList.remove("jump")
//    }, 3000)
// }


// let isAlive = setInterval ( function(){
//     let DinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

//     if (cactusLeft < 490 && cactusLeft > 440 - 40 && DinoTop >= 600) {
//         alert("Game Over")
        
//     }
// }, 10)


const dino = document.querySelector(".Dino")
const cactus = document.querySelector(".cactus")
const stopButton = document.getElementById("stopButton");

let isCactusMoving = true;

document.addEventListener("click", function(event){
    jump();
    console.log("вы прыгнули")
})

stopButton.addEventListener("click", function () {
    if (isCactusMoving) {
        stopCactus();
        isCactusMoving = false;
        alert("Игра остановлена");
    } else {
        startCactus();
        isCactusMoving = true;
        alert("Игра продолжена");
    }
});

function jump () {
   if (dino.classList != "jump") {
    dino.classList.add("jump")
   }


   setTimeout( function(){
    dino.classList.remove("jump")
   }, 3000)
}

function stopCactus() {
    cactus.style.animation = "none"; 
}

function startCactus(){
    cactus.style.animation = "cacTusMov 3s infinite linear";
}


let isAlive = setInterval ( function(){
    let DinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 490 && cactusLeft > 440 - 40 && DinoTop >= 600) {
        alert("Game Over")
        
    }
}, 10)