const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  let inputValue = input.value;
  console.log(inputValue);
  createBoxes(inputValue);
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let boxCount = 0;
  let boxSize = 30;
  boxes.innerHTML = '';
  while (boxCount < amount) {
    let newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.classList.add('box');
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    boxes.appendChild(newBox);
    boxSize += 10;
    boxCount++;
  }
  input.value = '';
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
