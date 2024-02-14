const body = document.querySelector('body');
const color = document.querySelector(`.color`);
const button = document.querySelector(`.change-color`);

button.addEventListener('click', () => {
  let newColor = getRandomHexColor();
  color.textContent = newColor;
  body.style.backgroundColor = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
