import {
  getPopulares,
  limitarCaracteres,
  buscarPeliculaPorNombre,
} from "./funciones.js";
import { URL_IMG } from "./variables.js";

const contenedorCarrusel = document.getElementById("contenedor-carrusel");
const inputBuscador = document.getElementById("input-buscador");
const resultados = document.getElementById("resultados");

inputBuscador.onkeyup = (e) => {
  if (inputBuscador.value.length < 3) {
    resultados.innerHTML = "";
    // TODO: limpiar la zona de resultados
    return;
  }
  buscarPeliculaPorNombre(inputBuscador.value).then((rpta) => {
    console.log(rpta);
    dibujarBusqueda(rpta);
  });
};

let flick = new Flickity(contenedorCarrusel, {
  freeScroll: true,
  autoPlay: 2000,
});

const dibujarBusqueda = ({ results }) => {
  resultados.innerHTML = "";
  results.forEach((objPelicula) => {
    let col = document.createElement("div");
    col.classList.add("col-md-2");
    // card.setAttribute("class","card text-left");
    col.innerHTML = `
      <div class="card">
        <img class="card-img-top" src="${URL_IMG}${objPelicula.poster_path}" 
                                  alt="imagen de la pelicula">
        <div class="card-body">
            <h4 class="card-title">${objPelicula.title}</h4>
            <p class="card-text">${limitarCaracteres(objPelicula)}</p>
        </div>
      </div>`;
    resultados.appendChild(col);
  });
};

const dibujarPopulares = ({ results }) => {
  results.forEach((objPelicula) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("text-left");
    card.classList.add("card-flickity");
    // card.setAttribute("class","card text-left");
    card.innerHTML = `
        <img class="card-img-top" src="${URL_IMG}${objPelicula.poster_path}" 
                                  alt="imagen de la pelicula">
        <div class="card-body">
            <h4 class="card-title">${objPelicula.title}</h4>
            <p class="card-text">${limitarCaracteres(objPelicula)}</p>
        </div>`;
    /**
     * append(elemento o arreglo de elementos)
     * es una función propia de flickity, no tiene nada que ver
     * con la función appendChild, pero sirve para agregar elementos
     * al carrusel (para no perder el estilo ni la funcionalidad de la
     * librería)
     */
    flick.append(card);
  });

  /**
   * seleccionar o visualizar el card que esté a la mitad
   * del carrusel
   */
  flick.select(results.length / 2);
  // flick.on("settle", function (index) {
  //   if (index == 19) {
  //     console.log("fin");
  //     // llamar nuevamnet a la API, pero a la siguiente página
  //   }
  // });
  // flick.append(arreglo);
};

getPopulares().then((rpta) => {
  console.log(rpta);
  dibujarPopulares(rpta);
});
