let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let btnToggle = document.getElementById("btnToggle");
let linkDark = document.getElementById("linkDark");
let cuadrado = document.getElementById("cuadrado");
let cuadrado2 = document.getElementById("cuadrado2");
let cuadrado3 = document.getElementById("cuadrado3");

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

/**
 * elemento.onmousemove
 * evento que se desencadena cuando el mouse se mueve por encima del elemento
 */

cuadrado2.onmousemove = (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  if (e.ctrlKey) {
    let bolita = document.createElement("div");
    bolita.style.left = x + "px";
    bolita.style.top = y + "px";
    bolita.style.display = "block";
    bolita.classList.add("bolita");
    cuadrado2.appendChild(bolita);
  }
};

/**
 * elemento.onmouseover
 * evento que se ejecuta cuando el mouse pasa por encima del elemento
 * A diferencia de mousemove, el evento sólo se dispara UNA VEZ, cuando el mouse
 * ingresa al elemento.
 * SIMILAR A HOVER (CSS)
 */

cuadrado3.onmouseover = (e) => {
  console.log(e);
  cuadrado3.classList.add("sombra");
};

cuadrado3.onmouseleave = (e) => {
  console.log(e);
  cuadrado3.classList.remove("sombra");
};
