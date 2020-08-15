import { getResourceAll } from "./servicios.js";
let mesasLista = document.getElementById("mesas__lista");
let cargandoMesas = document.getElementById("cargandoMesas");
let cartaCategorias = document.getElementById("carta__categorias");
let cartaPlatos = document.getElementById("carta__platos");
let categoria_id = 0;
let global_mesa_id = 0;

/**
 * Funcion que agrega o resta una unidad al pedido de la mesa actual
 * Dado el identificador del plato
 * @param {*} accion "sumar|restar"
 * @param {*} id "id del plato a modificar"
 */
const sumarRestarPlato = (accion, id) => {
  if (global_mesa_id === 0) {
    return;
  }
  //TODO: -----
};

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
    mesaLi.onclick = () => {
      let mesasBotones = document.querySelectorAll(
        ".mesas__lista .mesas__mesa"
      );
      let mesasBotonesArreglo = Array.from(mesasBotones);
      mesasBotonesArreglo.forEach((li) => {
        li.classList.remove("active");
      });
      global_mesa_id = mesa.mesa_id;
      mesaLi.classList.add("active");
    };
    fragment.appendChild(mesaLi);
  });
  mesasLista.appendChild(fragment);
  mesasLista.removeAttribute("hidden");
  cargandoMesas.setAttribute("hidden", true);
};

const dibujarPlatosPorCategoria = (platos, id) => {
  cartaPlatos.innerHTML = "";
  const fragment = new DocumentFragment();
  platos.forEach((plato) => {
    if (plato.categoria_id == id) {
      const card = document.createElement("div");
      card.classList.add("carta__plato");
      card.innerHTML = `
          <img
            src="${plato.plato_img}"
            alt="imagen de ${plato.plato_nom}"
          />
          <h4 class="carta__titulo">${plato.plato_nom}</h4>
          <span class="carta__precio">S/ ${plato.plato_pre.toFixed(2)}</span>
        `;
      const btnContenedor = document.createElement("div");
      btnContenedor.classList.add("carta__botones");

      const btnSumar = document.createElement("button");
      btnSumar.classList.add("btn", "btn-outline-primary", "btn-sumar");
      btnSumar.innerText = "+1";
      btnSumar.onclick = () => {
        sumarRestarPlato("sumar", plato.plato_id);
      };

      const btnRestar = document.createElement("button");
      btnRestar.classList.add("btn", "btn-outline-primary", "btn-restar");
      btnRestar.innerText = "-1";
      btnRestar.onclick = () => {
        sumarRestarPlato("restar", plato.plato_id);
      };

      btnContenedor.appendChild(btnRestar);
      btnContenedor.appendChild(btnSumar);

      card.appendChild(btnContenedor);

      fragment.appendChild(card);
    }
  });
  cartaPlatos.appendChild(fragment);
};

const dibujarCategorias = (categorias) => {
  const fragment = new DocumentFragment();
  categorias.forEach((cat) => {
    const button = document.createElement("button");
    button.classList.add("btn", "btn-outline-primary");
    button.innerText = cat.categoria_nom;
    button.onclick = () => {
      // botones es una colección de botones, pero no necesariamente un arreglo
      // una colección no es un arreglo de elementos
      let botones = document.querySelectorAll(".carta__categorias button");
      // Array.from(botones) convierte en un arreglo genuino a una colección de objetos
      let botonesArreglo = Array.from(botones);
      botonesArreglo.forEach((btn) => {
        btn.classList.remove("active");
      });
      button.classList.add("active");
      getAllPlatos(cat.categoria_id);
    };
    fragment.appendChild(button);
  });
  cartaCategorias.appendChild(fragment);
};

const getAllPlatos = (id) => {
  getResourceAll("platos").then((platos) => {
    dibujarPlatosPorCategoria(platos, id);
  });
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
