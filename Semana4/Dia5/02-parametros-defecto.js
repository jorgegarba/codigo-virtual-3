// FUNCIONES CON PARAMETROS POR DEFECTO

function trinomioCuadrado(a, b, c) {
  // if (typeof a === "number") {
  //   if (typeof b === "number") {
  //     if (typeof c === "number") {
  //       // la operacion
  //     } else {
  //       console.log("el numero C no fue correactmente ingresado");
  //     }
  //   } else {
  //     console.log("el numero B no fue correactmente ingresado");
  //   }
  // } else {
  //   console.log("el numero A no fue correactmente ingresado");
  // }

  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    // La formula es de mentiritas 😁
    let rpta = a * a * a + b * b * b + c * c * c;
    return rpta;
  } else {
    console.error("Los datos proporcionados no son correctos");
    return 0;
  }
}

let resultado = trinomioCuadrado(2, 4, 8);
console.log(resultado);

/**
 * Funcion que recibe un arreglo de nombres y un nombre a buscar.
 * Si el algoritmo encuentra el nombre buscado dentro del arreglo,
 * retorna true, en caso contrario retorna false
 * @param {array} nombres
 * @param {string} busqueda
 * @return {boolean}
 */
function buscarNombre(nombres = [], busqueda = "") {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === busqueda) {
      // la sentencia return en una función, no sólo retorna un valor
      // sino que también hace que la función deje de ejecutarse en esa
      // sentencia, no importa si está dentro un for, while, if, etc
      return true;
    }
  }
  // ¿que significa que el ciclo for acabe?
  return false;
}

let nombres = ["martin", "jaime", "anita", "paola", "daniel"];
let resultadoBusqueda = buscarNombre();
console.log(resultadoBusqueda);

// TODO: explicar NaN

// function buscarNombre(arregloNombres, busqueda, posicionInicial = 0) {
//   for (let i = posicionInicial; i < arregloNombres.length; i++) {

// 	}
// }

// let nombres = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

// opcion 1:
// el algoritmo buscará el nombre desde la posición proporcioada
// buscarNombre(nombres, "f", 80);

// opcion 2:
// el algoruitmo buscará el nombre dese la posición 0
// buscarNombre(nombres, "f");

// Funcion isNaN

// es una función que devuelve TRUE si el valor que tiene dentro -NO ES UN NUMERO-
// es una función que devuleve FALSE si el valor que tiene dentro -ES UN NUMERO-

// NotANumber

console.log(isNaN(5));
console.log(isNaN("TEXTO"));

