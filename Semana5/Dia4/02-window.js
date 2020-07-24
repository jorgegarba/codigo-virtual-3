// window => objeto que representa al navegador
// y todas sus propiedades internas
// es un objeto global

// Obtener la altura y el ancho del viewport
let alto = window.innerHeight;
let ancho = window.innerWidth;

console.log(`Alto: ${alto}`);
console.log(`Ancho: ${ancho}`);

// window.location contiene un obj con información
// de la dirección que se está visitando a través del navegador
let navegacion = window.location;
console.log(navegacion);

let url = navegacion.href;
console.log(url);

console.log(navegacion);

// window.document => objeto que tiene toda la información
// DEL DOM!!!!!!!!!!!!!
console.log(window.document);
