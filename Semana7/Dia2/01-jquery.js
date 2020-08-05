// Capturar elementos con JQuery
// $("#btnCambiarParrafo")

// eventos en JQuery
$("#btnCambiarParrafo").click(() => {
  //modificar el texto (innerText) de un elemento
  $("#parrafo1").text("Ya es hora del break");
});

$("#btnAgregarNumero").click(() => {
  let random = (Math.random() * (47 - 0) + 0).toFixed(0);
  // Crear elementos JQuery y agregarlos a otros elementos
  let li = $(`<li>${random}</li>`);
  $("#numeros").append(li);
});

$("#btnEstilosLi").click(() => {
  //aplicar estilos css a uno o varios elementos
  $("#numeros li").css("background-color", "#444").css("color", "#eee");

  // let lis = document.querySelectorAll("#numeros li");
  // lis = Array.from(lis);
  // lis.forEach((liTmp) => {
  //   liTmp.style.backgroundColor = "#444";
  //   liTmp.style.color = "#eee";
  // });
});

$("#btnFormulario").click(() => {
  $("#formulario").addClass("formulario");
});
