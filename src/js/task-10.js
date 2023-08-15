function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector('#boxes');

  for (let i = 1; i <= amount; i += 1) {
    i = document.createElement('div');
    boxes.append(i);
  }

  return boxes;
}

console.log(createBoxes(10));

// nie nadpisuj i, zeby działało