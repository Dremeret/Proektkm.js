const field = document.querySelector(".field")
const ball = document.querySelector(".ball")


field.addEventListener('click', (event) => {
    let newPositionLeft = event.clientX - field.getBoundingClientRect().left;
    let newPositionTop = event.clientY - field.getBoundingClientRect().top;
    console.log(newPositionTop, newPositionLeft);
  
    ball.style.top = newPositionTop - 25 + 'px'
    ball.style.left = newPositionLeft - 25 + 'px';
  })