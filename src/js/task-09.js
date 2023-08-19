function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  span.textContent = color;
}


/*
Write a script that changes the background colors of the <body> element via inline style when clicking on 
button.change-color and outputs the color value to span.color.
*/