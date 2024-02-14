const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let list = document.getElementById('ingredients');
let contain = '';
for (let ingredient of ingredients) {
  let li = document.createElement('li');
  li.textContent = ingredient;

  contain += `${li.outerHTML}`;
}
list.innerHTML = contain;
