// La clase Math
// es una clase ESTÁTICA
// CLASE ESTÁTICA: Clase de la cual no se crean variables
// que nos provee de funciones matematicas

// Ejm: Math.sqrt(numero)
let raizDe25 = Math.sqrt(25);
console.log(raizDe25);

//  Math.floor(numero_decimal)
// Redondea un numero al proximo entero inferior
// Ejm Math.floor(5.99999999) = 5
console.log(Math.floor(12.999999));

// Math.ceil(numero_decimal)
// Redondea un numero al proximo entero superior
// Ejm: Math.ceil(0.2);
console.log(Math.ceil(0.2));

// Math.round(numero_decimal)
// Redondea un número respetando las formas normales de redondeo
// Ejm: Math.round(3.2) = 3
// Ejm: Math.round(3.6) = 4

console.log(Math.round(2.5));

// Math.random() => genera un numero aleatorio
// entre 0 y 1

let aleatorio = Math.random();
console.log(aleatorio);

// Math.random() * (max-min) + min
// genera un número aleatorio entre 'min' y 'max'

let aleatorioQuinceYCien = Math.random() * (100 - 15) + 15;
console.log(aleatorioQuinceYCien);

// numero.toFixed(numero_de_decimales)
console.log(aleatorioQuinceYCien.toFixed(2));

let precio = 99.57;
console.log(precio.toFixed(1));

// Considerar la acción de un cajero automático para retirar dinero
// de forma que los billetes estén bien distribuidos
// 500 SOLES = 2 billetes de 200 y 1 de 100
// 190 soles = 1=>100 1=>50 2=>20
// intenten sacar módulos %100 %10 
// considerando que la máxima cantidad es: 9000