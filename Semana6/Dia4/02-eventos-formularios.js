/**
 * elemento.onload
 * función que se dispara cuando se han cargado todos los elementos hijos
 * de un elemento
 */
window.onload = () => {
  let formulario = document.getElementById("formulario");
  let inputPassword = document.getElementById("inputPassword");
  let inputEmail = document.getElementById("inputEmail");
  let enlace = document.getElementById("enlace");
  let helperEmail = document.getElementById("helperEmail");

  const validarEmail = (email) => {
    let resultados = usuarios.filter((objUsuario) => {
      if (objUsuario.correo === email) {
        return objUsuario.correo;
      }
    });

    if (resultados.length > 0) {
      helperEmail.innerText = "ERRORSH! el email ya está siendo usado";
      helperEmail.classList.remove("text-success");
      helperEmail.classList.add("text-danger");
      inputEmail.setAttribute("class","input-danger");
    } else {
      helperEmail.innerText = "BIEN! el email está disponible";
      helperEmail.classList.remove("text-danger");
      helperEmail.classList.add("text-success");
      inputEmail.setAttribute("class","input-success");
    }
  };

  // const validarEmail = (email) => {
  //   let resultados = usuarios.filter(
  //     (objUsuario) => objUsuario.correo === email
  //   );

  //   helperEmail.innerText =
  //     resultados.length > 0
  //       ? "ERRORSH! el email ya está siendo usado"
  //       : "BIEN! el email está disponible";
  // };

  /**
   * Funcion que se ejecuta cuando una tecla es presionada y soltada
   * sobre un elemento objetivo
   * @param {*} e
   */
  inputEmail.onkeyup = (e) => {
    // console.log(e);
    // console.log(e.key);
    // console.log("presionando una tecla");
    validarEmail(inputEmail.value.trim());
  };
};
