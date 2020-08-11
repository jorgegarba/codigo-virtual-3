/**
 * Las promesas nos ayudan a esperar el resultado
 * de un proceso asincrono
 */

let miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // ambas funcionan como un return
    // resolve
    // reject
    // resolve(["02815740", "01845421", "01854216"]);
    // reject("El usuario no se ha encontrado en la base de gatos");
    resolve({
      codigo: 200,
      mensaje: "No se encontró el producto",
      contenido: "Lentes Rayban",
    });
  }, 2000);
});

miPromesa
  .then((rpta) => {
    if (rpta.codigo === 200) {
      console.log("=)");
      console.log(rpta.contenido);
    } else {
      console.log("=(");
      console.log(rpta.mensaje);
    }
  })
  .catch((error) => {
    console.log("Ups! =(");
    console.log(error);
  });
