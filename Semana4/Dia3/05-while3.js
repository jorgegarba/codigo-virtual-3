// Dado un arreglo de numeros,
// hallar la cantidad de números positivos,
// hallar la cantidad de números negativos,
// hallar la cantidad de números iguales a 0

let numeros = [0, 25, -9, -8, 0, 0, 28, 7464, -958, 9, -9, 0];

let positivos = 0;
let negativos = 0;

let contador = 0;
while (contador < numeros.length) {
  if (numeros[contador] > 0) {
    // numero positivo
    positivos++;
  } else if (numeros[contador] < 0) {
    // numero negativo
    negativos++;
  }
  contador += 1;
}

console.log(`Positivos ${positivos}`);
console.log(`Negativos ${negativos}`);
console.log(`Ceros ${numeros.length - (positivos + negativos)}`);
