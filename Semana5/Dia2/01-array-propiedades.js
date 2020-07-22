// arreglo.forEach(()=>{})
/**
 * El callback se ejecuta tantas veces como elementos
 * tenga el arreglo, el callback recibe hasta 3 elementos
 * (elemento_actual, iteracion?, copia_del_arreglo?)=>{}
 */
// ? significa que ese parámetro es opcional

// peliculas.forEach((elemento) => {
//   console.log(elemento);
// });

// for (let i = 0; i < peliculas.length; i++) {
//   console.log(peliculas[i]);
// }

let arreglo = ["Jorge", "Luis", "Karla", "Jane"];

arreglo.forEach((nombre) => {
  console.log(nombre);
  //   en cada vuelta pueden dibujar un producto
  // en forma de card en el DOM para un E-COMMERCE
});

// ------ recorriendo peliculas
peliculas.forEach((objPelicula, i) => {
  console.log(`${i} : ${objPelicula.title}`);
  // Desventaja: No se pueden retornars elementoses
  // de la función forEach
});




// --------------------------------
// filter




