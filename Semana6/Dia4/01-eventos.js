let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let btnToggle = document.getElementById("btnToggle");
let linkDark = document.getElementById("linkDark");
let cuadrado = document.getElementById("cuadrado");

btnLight.onclick = () => {
  console.log("click en light");
  /**
   * elemento.getAttribute("nombre_del_atributo")
   * Retorna el valor de un atributo de un elemento
   */
  // let href = linkDark.getAttribute("href");
  linkDark.setAttribute("href", "");
};
btnDark.addEventListener("click", () => {
  linkDark.setAttribute("href", "./01-eventos-dark.css");
});
btnToggle.onclick = (e) => {
  console.log(e);

  let href = linkDark.getAttribute("href");
  if (href.length > 0) {
    // está en dark
    linkDark.setAttribute("href", "");
  } else {
    linkDark.setAttribute("href", "./01-eventos-dark.css");
  }
};

cuadrado.onclick = (e) => {
	console.log(e);
	console.log(`Tipo de evento => ${e.type}`);
	console.log("Elemento objetivo del evento:");
	console.log(e.target);
	console.log(`Valores de X e Y con respecto al VIEWPORT`);
	console.log(`X => ${e.clientX} - Y => ${e.clientY}`);
	console.log(`Valores de X e Y con respecto al MISMO ELEMENTO`);
	console.log(`X => ${e.offsetX} - Y => ${e.offsetY}`);
};
