/**
 * EJERCICIO
 * Recorrer el arreglo "covid" para poblar la tabla
 * y agregar filas y columnas con la información que sugieren
 * las cabeceras de la tabla
 * No se debe obedecer a ningún click, el proceso debe ser ni bien cargue
 * la página
 */

let tbody = document.getElementById("tbody");

const llenarTabla = () => {
  /**
   * 1. iterar el arreglo covid
   * 2. en cada vuelta crear una fila y 5 columnas
   * 3. agregar las columnas a la fila
   * 4. al final de cada vuelta, agregar la fila al tbody
   */
  covid.forEach((objPais, i) => {
    let fila = document.createElement("tr");

    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;

    let tdPais = document.createElement("td");
    tdPais.innerText = objPais.country;

    let tdInfectados = document.createElement("td");
    tdInfectados.innerText = objPais.cases;

    let tdFallecidos = document.createElement("td");
    tdFallecidos.innerText = objPais.deaths;

    let tdRecuperados = document.createElement("td");
    tdRecuperados.innerText = objPais.recovered;

    let tdAcciones = document.createElement("td");
    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar";
    btnEliminar.onclick = () => {
      let rpta = confirm(`¿Estás seguro de eliminar ${objPais.country}?`);
      if (rpta) {
        fila.setAttribute("hidden", "hidden");
      }
    };

    tdAcciones.appendChild(btnEliminar);

    fila.appendChild(tdNro);
    fila.appendChild(tdPais);
    fila.appendChild(tdInfectados);
    fila.appendChild(tdFallecidos);
    fila.appendChild(tdRecuperados);
    fila.appendChild(tdAcciones);

    tbody.appendChild(fila);
  });
};

llenarTabla();
