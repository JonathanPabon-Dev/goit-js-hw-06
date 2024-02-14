const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', e => {
  outputName.textContent = e.target.value.trim() !== '' ? e.target.value : 'Anonymous';
});
