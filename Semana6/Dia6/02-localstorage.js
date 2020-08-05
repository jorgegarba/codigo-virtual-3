let formulario = document.getElementById("formulario");
let inputCodigo = document.getElementById("inputCodigo");
let inputNombre = document.getElementById("inputNombre");
let tbody = document.getElementById("tbody");
let inputColor = document.getElementById("inputColor");
let menu = document.getElementById("menu");

inputColor.onchange = () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = inputColor.value;
  localStorage.setItem("color", inputColor.value);
};

let productos = [];

const llenarTabla = () => {
  tbody.innerHTML = "";

  // console.time("tabla");
  productos.forEach((objProd, i) => {
    let tr = document.createElement("tr");
    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;
    let tdCodigo = document.createElement("td");
    tdCodigo.innerText = objProd.codigo;
    let tdNombre = document.createElement("td");
    tdNombre.innerText = objProd.nombre;
    tr.appendChild(tdNro);
    tr.appendChild(tdCodigo);
    tr.appendChild(tdNombre);
    tbody.appendChild(tr);
  });
  // console.timeEnd("tabla");
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  let objProducto = {
    codigo: inputCodigo.value,
    nombre: inputNombre.value,
  };
  productos.push(objProducto);

  /**
   * window.localStorage.setItem("identificador_del_item","valor")
   * En la memoria localStorage del navegador(chrome), se crea
   * una variable llamada "identificador_del_item" con el valor "valor"
   * OJO: sólo se pueden guardar valores Strings
   */
  /**
   * JSON es una clase estática (análoga a Math) que tiene una serie de
   * funciones para trabajar con objetos JSON
   * ejm:
   * JSON.stringify(objeto|arreglo), retorna el parametro pasado
   * como argumento en STRING
   */
  let productosString = JSON.stringify(productos);
  window.localStorage.setItem("listaproductos", productosString);

  llenarTabla();
};

/**
 * Funcion que verifica si hay datos en el LOCALSTORAGE
 * y llena la tabla con dichos datos inciales
 */
const verificarStorage = () => {
  let productosStorage = window.localStorage.getItem("listaproductos");
  let colorStorage = localStorage.getItem("color");
  /**
   * preguntamos si habían datos con esa clave(listaproductos) en el storage
   */
  if (productosStorage) {
    let productosJSON = JSON.parse(productosStorage);
    productos = productosJSON;
    llenarTabla();
  }
  if (colorStorage) {
    document.querySelector("body").style.backgroundColor = colorStorage;
    inputColor.value = colorStorage;
  }
};
verificarStorage();

// window.onbeforeunload = (e) => {
//   e.preventDefault();
//   // borrar el localstorage antes de cerrar la página
//   // window.localStorage.removeItem("listaproductos");
//   return "asdasd";
// };

document.querySelector("body").oncontextmenu = (e) => {
  e.preventDefault();
  // aqui podrían dibujar un menu contextual propio de la aplicación
  menu.style.left = `${e.clientX}px`;
  menu.style.top = `${e.clientY}px`;
  menu.removeAttribute("hidden");
};

document.querySelector("body").onclick = (e) => {
  menu.setAttribute("hidden", "hidden");
};
