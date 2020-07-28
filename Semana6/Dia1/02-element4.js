let list = document.getElementById("lista");
let btnGenerar = document.getElementById("btnGenerar");

btnGenerar.onclick = () => {
  /**
   * document.createElement("etiqueta_del_elemento")
   * retorna un elemento HTML que aún no está en el DOM
   * imaginemos que dicho elemento está en el limbo
   */
  let liTemporal = document.createElement("li");
  liTemporal.innerText = Math.random() * (45 - 1) + 1;
  console.log(liTemporal);
};
