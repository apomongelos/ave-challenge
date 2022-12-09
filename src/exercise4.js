let array = [1, 2, 9000, 1245];
// Cantidad de elementos del arreglo.
const lengthOfArray = (arr) => {
  return arr.length;
};

// Porcentaje de números pares e impares.
const oddAndEven = (arr) => {
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  console.log(
    'Porcentaje de numeros pares: ',
    (even.length / arr.length) * 100
  );
  console.log(
    'Porcentaje de numeros impares: ',
    (odd.length / arr.length) * 100
  );
};
// oddAndEven(array);

// Porcentaje de números mayores a 1000.
const numbersGreaterThanThousand = (arr) => {
  let thousands = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1000) {
      thousands.push(arr[i]);
    }
  }
  console.log(
    'Porcentaje de numeros mayores a mil',
    (thousands.length / arr.length) * 100
  );
};
// numbersGreaterThanThousand(array);

// Cuál es el mayor y menor valor.
const minAndMaxValues = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  console.log('Valor maximo', max);
  console.log('Valor minimo', min);
  return { max, min };
};
// minAndMaxValues(array);

// Asuma los siguientes indicadores: Tome en cuenta que el mayor número
// representa el 100%, indique cual es el porcentaje del número mínimo y el
// porcentaje del promedio de todos los números.
const porcentajeMinValueAndPromedio = (arr) => {
  const { min, max } = minAndMaxValues(arr);
  const prom = arr.reduce((a, b) => a + b) / arr.length;
  const porcentajeMin = (min / max) * 100;
  const porcentajePromedio = (prom / max) * 100;
  console.log('Porcentaje numero menor: ', porcentajeMin);
  console.log('Porcentaje promedio: ', porcentajePromedio);
};

porcentajeMinValueAndPromedio(array);
