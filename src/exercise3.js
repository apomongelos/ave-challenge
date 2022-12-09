// password mayor que 16
const hasSixteenWords = (password) => password.length >= 16;
// console.log('16 letras ', hasSixteenWords('R8o7b6+er8@asdasdasdasd'));

// password mayusculas y minusculas
const hasUpperAndLowerCase = (password) =>
  password !== password.toString().toLowerCase() && password !== password.toString().toUpperCase();
// console.log(
//   'tiene mayus y minus ',
//   hasUpperAndLowerCase('E8o7b6+er8@asdasdasdasd')
// );

// password con letras consecutivas
const hasConsecutiveLetters = (password) => {
  let hasConsecutiveLetters = false;
  for (let i = 1; i < password.length; i++) {
    if (password[i].toString().toLowerCase() === password[i - 1].toString().toLowerCase()) {
      hasConsecutiveLetters = true;
      break;
    }
  }
  return hasConsecutiveLetters;
};
// console.log(
//   'tiene letras consecutivas ',
//   hasConsecutiveLetters('Ee8o7b6+er8@asdasdasdasd')
// );

// password con 4 numeros
const hasFourNumbers = (password) => {
  let numCount = 0;
  const numbers = '1234567890';
  for (let i = 0; i < password.length; i++) {
    if (numbers.includes(password[i])) {
      numCount++;
    }
  }
  return numCount >= 4;
};
// console.log('tiene 4 numeros ', hasFourNumbers('Ee8o7b+e4r@asdasdasdasd'));

// password no contenga numeros consecutivos
const hasConsecutiveNumbers = (password) => {
  let hasConsecutiveNumbers = false;
  const numbers = '1234567890';
  for (let i = 1; i < password.length; i++) {
    if (numbers.includes(password[i]) && password[i] === password[i - 1]) {
      hasConsecutiveNumbers = true;
      break;
    }
  }
  return hasConsecutiveNumbers;
};
// console.log(
//   'tiene numeros consecutivos ',
//   hasConsecutiveNumbers('Ee8o7b6+er88@asdasdasdasd')
// );

// password con dos caracteres especiales
const hasTwoSpecialCharacters = (password) => {
  let specialCharCount = 0;
  let hasRepeatedSpecialChar = false;
  let hasSpecialCharNextToEachOther = false;
  const specialChars = '!@#$%ˆ&*-_+=?';

  for (let i = 0; i < password.length; i++) {
    if (specialChars.includes(password[i])) {
      // verifica si la contraseña tiene al menos 2 caracteres especiales
      specialCharCount++;

      // verifica si la contraseña tiene caracteres especiales repetidos
      if (password[i] === password[i - 1]) {
        hasRepeatedSpecialChar = true;
      }

      // verifica si la contraseña tiene caracteres especiales juntos
      if (
        specialChars.includes(password[i - 1]) ||
        specialChars.includes(password[i + 1])
      ) {
        hasSpecialCharNextToEachOther = true;
      }
    }
  }
  // la contraseña cumple con los requerimientos de los caracteres especiales
  return (
    specialCharCount >= 2 &&
    !hasRepeatedSpecialChar &&
    !hasSpecialCharNextToEachOther
  );
};
// console.log(
//   'tiene caracteres especiales ',
//   hasTwoSpecialCharacters('Ee8o7b6er88@asdasdasdas+')
// );

// password no contenga 0
const hasZeros = (password) => password.toString().includes('0');
// console.log('tiene ceros ', hasZeros('+Ee8o7b6+er88@asdasdasdas+d'));

//password no contenga espacios
const hasWhiteSpaces = (password) => password.toString().includes(' ');
// console.log(
//   'tiene espacios en blanco ',
//   hasWhiteSpaces('+Ee8o7b6+er88@asdasdasdas+d')
// );

const isValidPassword = (password) => {
  return (
    hasSixteenWords(password) &&
    hasUpperAndLowerCase(password) &&
    !hasConsecutiveLetters(password) &&
    hasFourNumbers(password) &&
    !hasConsecutiveNumbers(password) &&
    hasTwoSpecialCharacters(password) &&
    !hasZeros(password) &&
    !hasWhiteSpaces(password)
  );
};

// console.log(isValidPassword('e8O7b6+Er@8asdasdasdasd'));
// module.exports = {
//   hasSixteenWords,
//   hasUpperAndLowerCase,
//   hasConsecutiveLetters,
//   hasFourNumbers,
//   hasConsecutiveNumbers,
//   hasTwoSpecialCharacters,
//   hasZeros,
//   hasWhiteSpaces,
//   isValidPassword,
// };
export {
  hasSixteenWords,
  hasUpperAndLowerCase,
  hasConsecutiveLetters,
  hasFourNumbers,
  hasConsecutiveNumbers,
  hasTwoSpecialCharacters,
  hasZeros,
  hasWhiteSpaces,
  isValidPassword,
};
