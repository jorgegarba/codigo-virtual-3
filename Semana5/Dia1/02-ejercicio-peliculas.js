/**
 * Retorna un OBJETO PELICULA en caso encuentre la pelicula
 * que el usuario busca según el nombre
 * En caso contrario, se retorna null
 * @param {string} nombre
 */
const getPeliculasByName = (nombre) => {
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].title === nombre) {
      // return => retorna un valor de la función pero además,
      // finaliza el for automáticamente
      return data.peliculas[i];
    }
  }
  return null;
};

let peliEncontrada = getPeliculasByName("Atrapa ese email");
console.log(peliEncontrada);

// 2
/**
 * Función que retorna una lista de Peliculas que tienen
 * menos de 200 votos (en la propiedad vote_count)
 * En caso de no tener peliculas con menos de 200 votos
 * retornar un arreglo vacío
 */
const getMenosVotadas = ()=>{


}

// 3 
/**
 * Función que retorna el NÚMERO(LA CANTIDAD) DE PELÍCULAS cuyos lenguajes originales
 * NO SEAN EN INGLÉS 
 * hint: ver el campo original_language
 */
const getPeliculasExtranjeras =()=>{

}


