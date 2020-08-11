/**
 * Destructurar arreglos
 */

let nombres = ["Anita", "Lucio", "María", "Omar", "Fernanda"];
let [a, b, c, d, e] = nombres;
console.log(e); //Fernanda
console.log(b); //Lucio

let [ani, , , , fer] = nombres;
console.log(fer); //Fernanda
console.log(ani); //Anita

// operador rest => ...
let [...nombresTemporal] = nombres;
console.log(nombresTemporal);

let [ele1, ele2, ...resto] = nombres;
console.log(ele1);
console.log(ele2);
console.log(resto);
//console.log(...resto);

let nombresCopia = ["Juan", ...nombres];
console.log(nombresCopia);
console.log(nombres);

const dosPrimeros = ([a, b]) => {
  console.log(a);
  console.log(b);
};

dosPrimeros(nombres);
