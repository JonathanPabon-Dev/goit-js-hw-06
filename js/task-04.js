const valueDisplay = document.getElementById('value');

const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueDisplay.textContent = counterValue;
});
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueDisplay.textContent = counterValue;
});
