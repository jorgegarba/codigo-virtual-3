import { getPopulares, limitarCaracteres } from "./funciones.js";
import { URL_IMG } from "./variables.js";

const contenedorCarrusel = document.getElementById("contenedor-carrusel");
let flick = new Flickity(contenedorCarrusel, {
  freeScroll: true,
});

const dibujarPopulares = ({ results }) => {
  results.forEach((objPelicula) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("text-left");
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
