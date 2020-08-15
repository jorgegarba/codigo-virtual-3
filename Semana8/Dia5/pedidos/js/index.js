import { getResourceAll } from "./servicios.js";
let mesasLista = document.getElementById("mesas__lista");
let cargandoMesas = document.getElementById("cargandoMesas");
let cartaCategorias = document.getElementById("carta__categorias");

const dibujarMesas = (mesas) => {
  /**
   * fragment es un elemento HTML que nos servirá como acumulador de elementos
   * con el objetivo de no hacer renderizar n veces el DOM con cada appendChild()
   */
  const fragment = new DocumentFragment();
  mesas.forEach((mesa) => {
    const mesaLi = document.createElement("li");
    mesaLi.classList.add("mesas__mesa");
    mesaLi.innerHTML = `
                        <span class="mesas__titulo">Mesa</span>
                        <span class="mesas__numero">${mesa.mesa_nro}</span>
                        `;
    fragment.appendChild(mesaLi);
  });
  mesasLista.appendChild(fragment);
  cargandoMesas.setAttribute("hidden", "hidden");
};

const dibujarCategorias = (categorias) => {
  const fragment = new DocumentFragment();
  categorias.forEach((cat) => {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-outline-primary");
    button.innerText = cat.categoria_nom;
    fragment.appendChild(button);
  });
  cartaCategorias.appendChild(fragment);
};

const getAllMesas = () => {
  getResourceAll("mesas").then((mesas) => {
    dibujarMesas(mesas);
  });
};

const getAllCategorias = () => {
  getResourceAll("categorias").then((categorias) => {
    dibujarCategorias(categorias);
  });
};

getAllMesas();
getAllCategorias();
