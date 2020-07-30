let tbody = document.getElementById("tbody");

const crear = (elemento) => {
  return document.createElement(elemento);
};

const dibujarTabla = () => {
  peliculas.forEach((objPelicula, i) => {
    let fila = crear("tr");

    let tdNro = crear("td");
    tdNro.innerText = i + 1;

    let tdTitulo = crear("td");
    tdTitulo.innerText = objPelicula.title;

    let tdFecha = crear("td");
    tdFecha.innerText = objPelicula.release_date;

    let tdSinopsis = crear("td");
    tdSinopsis.innerText = objPelicula.overview;

    let tdImagen = crear("td");
    let poster = crear("img");
    poster.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${objPelicula.poster_path}`
    );
    poster.setAttribute("alt", "imagen de la pelicula");
    poster.setAttribute("width", "120");

    tdImagen.appendChild(poster);

    fila.appendChild(tdNro);
    fila.appendChild(tdTitulo);
    fila.appendChild(tdFecha);
    fila.appendChild(tdSinopsis);
    fila.appendChild(tdImagen);

    tbody.appendChild(fila);
  });
};

dibujarTabla();
