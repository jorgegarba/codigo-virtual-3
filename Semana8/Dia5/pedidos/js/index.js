import { getResourceAll, postPedidos } from "./servicios.js";
let mesasLista = document.getElementById("mesas__lista");
let cargandoMesas = document.getElementById("cargandoMesas");
let cartaCategorias = document.getElementById("carta__categorias");
let cartaPlatos = document.getElementById("carta__platos");
let comanda = document.getElementById("comanda");

let categoria_id = 0;
let global_mesa_id = 0;
let global_pedidos = [];
/**
 * objPedido
 * {
 *  mesa_id:5,
 *  platos:[
 *    {
 *      plato_id:1,
 *      cant: 3,
 *      precio: 75.00
 *    },
 *    {
 *      plato_id:5,
 *      cant: 1,
 *      precio: 10.00
 *    }
 *  ]
 * }
 */
/**
 * Funcion que agrega o resta una unidad al pedido de la mesa actual
 * Dado el identificador del plato
 * @param {*} accion "sumar|restar"
 * @param {*} id "id del plato a modificar"
 * @param {*} precio "precio unitario del plato"
 * @param {*} nombre "nombre del plato"
 */
const sumarRestarPlato = (accion, id, precio, nombre) => {
  if (global_mesa_id === 0) {
    return;
  }
  // Encontrar el pedido de la mesa global seleccionada e el arreglo global de pedidos
  let pedidoMesaActual = global_pedidos.find(
    (pedido) => pedido.mesa_id === global_mesa_id
  );

  if (pedidoMesaActual) {
    // significa que la mesa actual seleccionada, ya tenia un pedido iniciado
    // preguntar si el plato ya existe en el pedido actual
    if (pedidoMesaActual.platos.find((plato) => plato.plato_id == id)) {
      // verifricar si el plato que estoy sumando o restando, ya existia en el pedido
      pedidoMesaActual.platos = pedidoMesaActual.platos.filter((plato) => {
        if (accion === "sumar") {
          if (plato.plato_id == id) {
            plato.cant = plato.cant + 1;
            plato.precio = plato.cant * precio;
          }
        } else {
          if (plato.plato_id == id) {
            plato.cant = plato.cant - 1;
            plato.precio = plato.cant * precio;
          }
        }

        if (plato.cant > 0) {
          return plato;
        }
      });
    } else {
      if (accion === "sumar") {
        let objPlato = {
          plato_id: id,
          cant: 1,
          precio: precio,
          nombre: nombre,
        };
        pedidoMesaActual.platos.push(objPlato);
      }
    }

    console.log(global_pedidos);
  } else {
    // significa que la mesa actual iniciará su primer plato y primer pedido
    if (accion === "sumar") {
      let objPedido = {
        mesa_id: global_mesa_id,
        platos: [
          {
            plato_id: id,
            cant: 1,
            precio: precio,
            nombre: nombre,
          },
        ],
      };
      global_pedidos.push(objPedido);
    }
    console.log(global_pedidos);
  }
  dibujarComanda();
};

const pagar = async () => {
  const pedidoMesaActual = global_pedidos.find(
    (objPedido) => objPedido.mesa_id === global_mesa_id
  );
  let respuesta = await postPedidos(pedidoMesaActual);
  if (respuesta?.id) {
    Swal.fire({
      title: "Hecho!",
      icon: "success",
      text: "Pedido pagado correctamente",
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
    });
    // borrar el pedido del arreglo global de pedidos
    global_pedidos = global_pedidos.filter(
      (objPedido) => objPedido.mesa_id !== global_mesa_id
    );
    dibujarComanda();
  }
};

const dibujarComanda = () => {
  comanda.innerHTML = "";
  comanda.innerHTML = `<h4 class="comanda__mesa">${global_mesa_id}</h4>
  <p class="comanda__usuario">Carlos Jimenez</p>
  <hr />`;

  let ul = document.createElement("ul");
  ul.classList.add("comanda__lista");
  // obtniendo el objeto de tipo pedido de la mesa actual seleccionada
  let objPedidoActual = global_pedidos.find(
    (pedido) => pedido.mesa_id == global_mesa_id
  );

  /**
   * Verificar si la mesa seleccionada global actual
   * tiene platos en su pedido, porque podría tener un arreglo de 0 platos
   */
  /**
   * objPedidoActual? => significa que si el objeto no tiene la propiedad
   * 'platos', JAVASCRIPT no va a mandar un error por tener el identificador ?
   * y, si no tiene el atributo "platos" será considerado como un else
   * Sin embargo, si tiene el atributo "platos", obtendrá el tamaño del arreglo y
   * procederá con la validación.
   */
  if (objPedidoActual?.platos.length > 0) {
    objPedidoActual.platos.forEach((plato) => {
      const li = document.createElement("li");
      li.classList.add("comanda__item");
      li.innerHTML = `<p class="comanda__nombre">
                        <span><strong>${plato.nombre}</strong></span>
                        <span>Precio: S/ ${plato.precio / plato.cant}</span>
                      </p>
                      <p class="comanda__cantidad">${plato.cant}</p>
                      <p class="comanda__precio">
                        <strong>S/ ${plato.precio}</strong>
                      </p>`;
      ul.appendChild(li);
    });
    comanda.appendChild(ul);
    const btnPagar = document.createElement("button");
    btnPagar.classList.add("btn", "btn-success");
    btnPagar.innerText = "PAGAR";
    btnPagar.onclick = () => {
      Swal.fire({
        title: "¿PAGAR?",
        text: "Se registrarán los cambios en la base de datos",
        icon: "info",
        confirmButtonText: "Pagar",
        showCancelButton: true,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
          pagar();
        }
      });
    };
    comanda.appendChild(btnPagar);
  } else {
    ul.innerText = "Mesa libre";
    comanda.appendChild(ul);
  }
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
      dibujarComanda();
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
        sumarRestarPlato(
          "sumar",
          plato.plato_id,
          plato.plato_pre,
          plato.plato_nom
        );
      };

      const btnRestar = document.createElement("button");
      btnRestar.classList.add("btn", "btn-outline-primary", "btn-restar");
      btnRestar.innerText = "-1";
      btnRestar.onclick = () => {
        sumarRestarPlato(
          "restar",
          plato.plato_id,
          plato.plato_pre,
          plato.plato_nom
        );
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
