// BREAK Y CONTINUE

// continue; en un scope de una estructura repetitiva,
// salta u obvia todas las sentencias de la iteración en la que
// nos encontremos y continuamos con la siguiente iteración

// break; en un scope de una estructura repetitiva, finaliza
// todos los ciclos o iteraciones que restan por hacer
// sin importar en qué iteración nos encontremos

let nombres = ["jorge", "teresa", "javier", "leonor", "daniel", "francisca"];
let edades = [20, 15, 75, 68, 45, 25];

// Que el usuario busque un nombre, y cuando el algoritmo lo encuentre
// se imprima su edad y la posición en la que se encuentra

let buscar = prompt("Ingrese el nombre a buscar en la base de gatos 😹");
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
  console.log(`i = ${i}`);

  if (nombres[i] === buscar) {
    console.log(`Encontrado ${buscar}`);
    console.log(`Edad: ${edades[i]}`);
    encontrado = true;
    break;
  }
}

// if(!encontrado)
// if(encontrado===false)

if (encontrado !== true) {
  console.log("No se ha encontrado al usuario");
}

// --------------------------- uso del continue
// De los arreglos anteriores, imprimir la edad y nombre
// de las personas menores de 60 años.

for (let i = 0; i < edades.length; i++) {
  if (edades[i] > 60) {
    continue;
  }
  console.log(`${nombres[i]} tiene ${edades[i]} años`);
}