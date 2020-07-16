// WHILE

let c = 0;
console.log(`C inicial = ${c}`);
while (c < 8) {
  // codigo a ejecutar mientras que la condicion sea
  // verdadera
  console.log(`C = ${c}`);
  c = c + 1;
}

console.log(`Valor de C = ${c}`);

console.log("-----------------------------");
// tabla de multiplicar de un numero
let base = +prompt("Ingrese la base del numero a obtener la tabla");

let contador = 0;
while (contador <= 12) {
  // Por lo gral, el contador no se modifica
  // sólo se utiliza
  console.log(` ${base} x ${contador} = ${base * contador}`);
  contador = contador + 1;
}


