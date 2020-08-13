import { getPopulares } from "./funciones.js";

const contenedorCarrusel = document.getElementById("contenedor-carrusel");

const dibujarPopulares = ({ results }) => {
  results.forEach((objPelicula) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("text-left");
    card.classList.add("carousel-cell");
    card.innerHTML = `
        <img class="card-img-top" src="" alt="">
        <div class="card-body">
            <h4 class="card-title">${objPelicula.title}</h4>
            <p class="card-text">${objPelicula.overview}</p>
        </div>
    `;
    contenedorCarrusel.appendChild(card);
  });
  const flickity = new Flickity(contenedorCarrusel, {
    freeScroll: true,
  });
};

getPopulares().then((rpta) => {
  console.log(rpta);
  dibujarPopulares(rpta);
});
