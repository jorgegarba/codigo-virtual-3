/**
 * setTimeout
 */
let resultado = [];
const traerDatos = () => {
  console.log("Conectándose a la base de gatos");
  console.log("Los datos llegaron del servidor =)");
  resultado = [5000, 8500, 10000];
};

console.log("LOG 1");

//funcion asincrona
setTimeout(traerDatos, 2000);

console.log("LOG 2");
console.log(resultado);
console.log("LOG 3");

/**
 * promesas
 */

/**
 * async await
 */

/**
 * fetch (ajax)
 */

/**
 * importaciones y exportaciones
 * aprenda a importar desde la China
 */
