const input = document.getElementById('validation-input');

input.addEventListener('blur', e => {
  if (e.target.value) {
    if (e.target.value.length === parseInt(input.dataset.length)) {
      input.classList.add('valid');
      input.classList.remove('invalid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  } else {
    input.classList.remove('valid', 'invalid');
  }
});
