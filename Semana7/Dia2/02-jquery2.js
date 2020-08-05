let productos = [];

const dibujarCards = () => {
  // 1. limpiar el section#productos
	$("#productos").html("");
	
  productos.forEach((objProducto) => {
    let cardProducto = $(`<div class="productos__producto">
                                <h4>${objProducto.nombre}</h4>
                                <p><span>Codigo:</span> ${objProducto.codigo}</p>
                            </div>`);
    $("#productos").append(cardProducto);
  });
};

$("#formulario").submit(function (e) {
  e.preventDefault();
  let objProducto = {
    nombre: $("#inputNombre").val().trim(),
    codigo: $("#inputCodigo").val(),
  };
  productos.push(objProducto);
  dibujarCards();
});
