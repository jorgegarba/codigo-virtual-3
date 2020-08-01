let selectPais = document.getElementById("selectPais");
let selectDepartamento = document.getElementById("selectDepartamento");

const poblarPaises = () => {
  let options = "<option value=0>--- Seleccione un País ---</option>";

  paises.forEach((objPais) => {
    options += `<option value="${objPais.id}">${objPais.nombre}</option>`;
  });

  selectPais.innerHTML = options;
};

poblarPaises();

const llenarDepartamentosByIdPais = (idPaisSeleccionado) => {
  let depasTemporales = departamentos.filter(
    (objDepartamento) => objDepartamento.paisId === idPaisSeleccionado
  );

  if (depasTemporales.length === 0) {
    selectDepartamento.innerHTML = "";
    selectDepartamento.setAttribute("disabled", "disabled");
    return;
  }

  let options = "<option value=0>---Seleccione---</option>";
  depasTemporales.forEach((objDepa) => {
    options += `<option value="${objDepa.id}">${objDepa.nombre}</option>`;
  });
  selectDepartamento.innerHTML = options;
  selectDepartamento.removeAttribute("disabled");
};

/**
 * elemento.onchange evento que se ejecuta cada vez que el valor de un elemento
 * cambia (en el caso del select, cada vez que un nuevo option es seleccionado)
 * @param {*} e
 */
selectPais.onchange = (e) => {
  console.log(e);
  let idPaisSeleccionado = +selectPais.value;
  llenarDepartamentosByIdPais(idPaisSeleccionado);
};
