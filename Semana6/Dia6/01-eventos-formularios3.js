let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputFecha = document.getElementById("inputFecha");
let formulario = document.getElementById("formulario");

let inputTurnoM = document.getElementById("inputTurnoM");
let inputTurnoT = document.getElementById("inputTurnoT");
let inputTurnoN = document.getElementById("inputTurnoN");

let objFormulario = {
  nombre: "",
  apellido: "",
  fecha: "",
  turno: "manana",
};

const actualizarObjFormulario = (event) => {
  objFormulario[event.target.name] = event.target.value;
};

inputNombre.onkeyup = actualizarObjFormulario;
inputApellido.onkeyup = actualizarObjFormulario;
inputFecha.onchange = actualizarObjFormulario;
/**
 * al ejecutar el evento onchange de multiples radioButtons con el mismo "name"
 * sólo se ejecuta en el radio que acaba de ser seleccionado, NO EN LOS DEMÁS
 */
inputTurnoM.onchange = actualizarObjFormulario;
inputTurnoT.onchange = actualizarObjFormulario;
inputTurnoN.onchange = actualizarObjFormulario;

formulario.onsubmit = (e) => {
  e.preventDefault();
  console.log("Enviando datos al servidorsh");
  console.log(objFormulario);
};
