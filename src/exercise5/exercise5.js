import * as passwordModule from '../exercise3.js';

let pass = document.querySelector('#password');

pass.addEventListener('input', (e) => {
  // Validar que la contraseña tiene al menos 16 caracteres
  if (passwordModule.hasSixteenWords(e.target.value)) {
    document.getElementById('password-length').style.color = 'green';
  } else {
    document.getElementById('password-length').style.color = 'red';
  }

  // Validar que la contraseña contiene al menos una letra minúscula y una mayúscula
  if (passwordModule.hasUpperAndLowerCase(e.target.value)) {
    document.getElementById('password-case').style.color = 'green';
  } else {
    document.getElementById('password-case').style.color = 'red';
  }
  // Validar que la contraseña no contiene 2 letras iguales consecutivas
  if (passwordModule.hasConsecutiveLetters(e.target.value)) {
    document.getElementById('password-letters').style.color = 'red';
  } else {
    document.getElementById('password-letters').style.color = 'green';
  }

  // Validar que la contraseña contiene al menos 4 números
  if (passwordModule.hasFourNumbers(e.target.value)) {
    document.getElementById('password-numbers').style.color = 'green';
  } else {
    document.getElementById('password-numbers').style.color = 'red';
  }

  // Validar que la contraseña no contiene 2 números iguales consecutivos
  if (passwordModule.hasConsecutiveNumbers(e.target.value)) {
    document.getElementById('password-consecutive-numbers').style.color = 'red';
  } else {
    document.getElementById('password-consecutive-numbers').style.color =
      'green';
  }

  // Validar que la contraseña contiene al menos 2 caracteres especiales, pero ninguno se repite
  if (passwordModule.hasTwoSpecialCharacters(e.target.value)) {
    document.getElementById('password-special-characters').style.color =
      'green';
  } else {
    document.getElementById('password-special-characters').style.color = 'red';
  }

  // Validar que la contraseña no contiene el número 0
  if (passwordModule.hasZeros(e.target.value)) {
    document.getElementById('password-zero').style.color = 'red';
  } else {
    document.getElementById('password-zero').style.color = 'green';
  }
  // Validar que la contraseña no contiene espacios en blanco
  if (passwordModule.hasWhiteSpaces(e.target.value)) {
    document.getElementById('password-spaces').style.color = 'red';
  } else {
    document.getElementById('password-spaces').style.color = 'green';
  }
});

document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (passwordModule.isValidPassword(e.target[0].value)) {
    alert('Contraseña valida');
  } else {
    alert('Contraseña no valida');
  }
});
