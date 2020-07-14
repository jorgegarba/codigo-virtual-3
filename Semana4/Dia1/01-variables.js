// Variables
// -- Las variables se declaran o se crean una sola vez
// en el documento, luego, sólo las usamos.

// Creando un variable
// variables numericas / number
let x = 69;
let otronumero = 453;
// variables de texto / string / cadena
let nombre = "Jorge";
let suma = 0;
// variables booleanas
let soltero = true;

const pi = 3.1416;
const igv = 0.18;

let precio = 1500;
let total = precio + precio * igv;

suma = x + otronumero;
// Imprimiendo información en la consola
console.log("La suma total es:");
console.log(suma);

console.log("¿Es soltero?");
console.log(soltero);

console.log("Total a pagarsh");
console.log(total);

console.log(`Total a pagarsh: ${total}`);

// +
// -
// *
// /
// %   modulo ó residuo de una operación de división entera

let residuo = 20 % 7;
console.log(residuo);

let par1 = 40 % 2;
let par2 = 900 % 2;
let par3 = 500 % 2;

console.log(`${par1} + ${par2} + ${par3}`);

console.log(`Suma ${par3 + residuo}`);

let alfanumerico = 35 + "35";
console.log(`alfanumerico => ${alfanumerico}`);
