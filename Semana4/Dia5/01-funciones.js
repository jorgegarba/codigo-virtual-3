// Funciones
// 1. Funciones que no retornan valor ni reciben parametros
// declarando una función
function imprimirFecha() {
  // como crear una variable que guarda la fecha del ordenador
  let fecha = new Date();
  console.log(fecha);
}

// 2. Funcinoes que retornar valor y no reciben parametros
function retornarFecha() {
  let fecha = new Date();
  return fecha;
}

// 3. Funciones que reciben parametros y retornan valor
/**
 * Funcion que recibe dos numeros y calcula
 * el binomio cuadrado perfecto de ambos
 * @param {number} a primer numero
 * @param {number} b segundo numero
 * @return {number} El resultado del binomio
 */
function retornarBinomio(a, b) {
  let rpta = a * a + 2 * a * b + b * b;
  return rpta;
}

// 4. Funciones que no retornan valor y que reciben parametros
function imprimirPares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i]);
    }
  }
}

// llamando o invocando a una funcion
imprimirFecha();

// invocando a una funcion que retornar valor
let nuevaFecha = retornarFecha();
console.log(nuevaFecha);

// invocando a la funcion 3
let resultadoBinomio = retornarBinomio(8, 5);
console.log(resultadoBinomio);

// invocando a la función 4
let arreglo = [4, 20, 1, 0, 5, 63, 98];
imprimirPares(arreglo);

