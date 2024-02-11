let nameUser = document.querySelector("..modal-atart");
let closeB = document.querySelector("icon-close")
let modalS = document.querySelector("modal-subscribe")
let btnM = document.querySelector("btn-modal")
let inputM =document.querySelector(".input-modal")
let span = document.querySelector("spanUser")
nameUser.addEventListener("click" ,  () => {
    const inputValuem = inputM.value
    span.textContent = `${inputValuem}`;

})

closeB.addEventListener("click", ()=>{
    modalS.style.opacity= "0%"
}
)

// nameSoxranit.onclick = function () {
//   newNameUser.innerText = submitlol.value;
//   closeModal();
// }

//закрытие модального окна по кнопке

let modal = document.getElementById('modal-start');

let btnClose = document.getElementById('closeSave');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

btnClose.onclick = function() {
    modal.style.display = 'none';
    modal.innerText= btnClose.value;
}


//код на закрытие 2 модального окна 
let modal2 =  document.getElementById("subscribe"); 

let Btn = document.getElementById("close"); 

Btn.onclick = function(){
     Btn.style.display="block";
     modal2.style.display="none";
}


// код на открытие 2 модального окна

let modalBtn2 = document.getElementById("subs");

function openModal2(){
  modal2.style.display = "block";
}

modalBtn2.onclick = function (event) {
  event.preventDefault();

  let userEmail = document.querySelector(".userEmail").value;

  if (userEmail.includes('@') && userEmail.includes('.')) {
    openModal2();
  } else {
  }
}