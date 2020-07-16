// Arreglos
let numeros = [15, 16, 1.5, 9, -9, 16];
let vacio = [];
let nombres = ["Jorgito", "Pedrito", "Sandrita", "Danielito"];
// imprimir todo el arreglo
console.log(numeros);
// imprimir un elemento del arreglo dada la posición
console.log(`Posición 4 = ${numeros[4]}`);
numeros[0] = 720;
console.log(numeros);
console.log(`Cantidad de elementos del arreglo`);
console.log(numeros.length);

let totalElementos = numeros.length;
// Imprimir el último elemento de un arreglo
console.log(numeros[5]);
console.log(numeros[totalElementos - 1]);

// Agregar elementos a un arreglo
numeros.push(212);
console.log(numeros);

console.log(nombres);