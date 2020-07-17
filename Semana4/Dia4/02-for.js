// Ciclo FOR
let numeros = [5, 7, 8, 6, 5, 12, 10];

console.log(numeros);

let i = 500;

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i] * numeros[i];
}

console.log(numeros);
console.log(i);
