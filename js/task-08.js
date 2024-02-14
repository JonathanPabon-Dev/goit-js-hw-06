const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email;
  const password = form.elements.password;

  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('Todos los espacios deben ser rellenados');
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    console.log(data);
    form.reset();
  }
});
