//1
/**
 * Función que retorna el número de casos de personas
 * infectadas en el total en el mundo
 */
const getTotalDeCasosEnElMundo = () => {};

//2
/**
 * Función que retorna un objeto completo de cifras
 * de un pais dado su nombre, en caso no encuentre el pais
 * RETORNAR NULL
 * @param {*} pais
 */
const getCifrasByNamePais = (pais) => {};

//3
/**
 * Función que retorna el porcentaje de casos de personas
 * recuperadas frente al total de casos en un pais
 *
 * Para ello se debe proporcionar el nombre del país.
 * Para buscar un país, se debe hacer uso de la función del
 * ejercicio 2 (OBLIGATORIO)
 * @param {*} pais
 */
const getPorcentajeDeRecuperadosByNamePais = (pais) => {};

//4

/**
 * Función que retorna un arreglo de todos los países con el siguiente
 * objeto como estructura
 * [{
 *  pais:"nombre del pais",
 *  pruebasRealizadas:50000,
 *  pruebasPositivas:25000,
 *  porcentajePruebas:50
 * }]
 * implica que cada país debe mostrar el porcentaje de casos positivos
 * frente al total de pruebas realizadas
 */
const generarArrayPorcentajeDePruebasPositivas = () => {
  let arregloResultado = [];

  for (let i = 0; i < covid.length; i++) {
    let porcentaje = (covid[i].cases * 100) / covid[i].totalTests;
    let objTemporalPais = {
      pais: covid[i].country,
      pruebasRealizadas: covid[i].totalTests,
      pruebasPositivas: covid[i].cases,
      porcentajePruebas: porcentaje,
    };
    arregloResultado.push(objTemporalPais);
  }
  return arregloResultado;
};

let resultado = generarArrayPorcentajeDePruebasPositivas();
console.log(resultado);
