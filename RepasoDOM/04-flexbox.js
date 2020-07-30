let principal = document.querySelector(".principal");

const crear = (elemento) => document.createElement(elemento);

const dibujarPeliculas = () => {
  peliculas.forEach((objPelicula) => {
    let card = crear("div");
    card.setAttribute("class", "card");

    let cardImagen = crear("div");
    cardImagen.setAttribute("class", "card__imagen");
    cardImagen.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${objPelicula.poster_path}" alt="" />
														<p class="card__photos">Fotos</p>
														<p class="card__fecha">
															4 <br />
															<span> JUL </span>
														</p>`;

    let cardInfo = crear("div");
    // cardInfo.setAttribute("class", "card__info");
    cardInfo.classList.add("card__info");
    cardInfo.innerHTML = `<h2>${objPelicula.title}</h2>
													<h3 class="card__subtitulo">La ciudad del amor</h3>
													<p class="card__descripcion">
														${objPelicula.overview}
													</p>
													<p class="card__feed">
														<small>
															<i class="fas fa-clock"></i> ${objPelicula.release_date} &nbsp; &nbsp; &nbsp;
															<i class="fas fa-comment"></i> ${objPelicula.vote_count} votos</small
														>
													</p>`;

    card.appendChild(cardImagen);
    card.appendChild(cardInfo);
    principal.appendChild(card);
  });
};

dibujarPeliculas();
