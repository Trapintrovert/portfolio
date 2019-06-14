const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

name.addEventListener('blur', valName);
email.addEventListener('blur', valEmail);
message.addEventListener('blur', valMessage);

function valName() {
  const re = /^[a-zA-Z]{2,20}$/;
  if(!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function valEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function valMessage() {
  const re = /^[a-zA-Z]$/;
  if(!re.test(message.value)) {
    message.classList.add('is-invalid');
  } else {
    message.classList.remove('is-invalid');
  }
}
