// Un objeto es un elemento que abstrae caracteristicas
// o atributos en común o que guardan relación

// ¿Como se crea?
let objPersona = {
  nombre: "Jorge",
  apellido: "Garnica",
  edad: 28,
  peso: 72,
  casado: false,
  cazado: true,
};

// Forma 1 de acceder a los atributos
console.log(objPersona.nombre);
// Forma 2 de acceder a los atributos
console.log(objPersona["apellido"]);

// Forma 1 de modificar un atributo
objPersona.casado = true;
objPersona.peso = 70;

console.log(objPersona);

// Forma 1 de crear nuevos atributos a un objeto
objPersona.platosFavoritos = ["Cebiche", "Pastel de Papa", "Rocoto Relleno"];
console.log(objPersona);

for (let i = 0; i < objPersona.platosFavoritos.length; i++) {
  console.log(objPersona.platosFavoritos[i]);
}

// --------------------------------------- //

let productos = [
  {
    nombre: "TV Samsung 50",
    precio: 8000.0,
    codigo: "10101",
    coloresDisponibles: ["Azul", "Plomo", "Blanco", "Negro"],
  },
  {
    nombre: "TV Samsung 42",
    precio: 7000.0,
    codigo: "10102",
    coloresDisponibles: ["Azul", "Plomo"],
  },
  {
    nombre: "TV Samsung 39",
    precio: 6000.0,
    codigo: "10103",
    coloresDisponibles: ["Azul"],
  },
  {
    nombre: "TV Samsung 25",
    precio: 5000.0,
    codigo: "10104",
    coloresDisponibles: [],
  },
];

for (let i = 0; i < productos.length; i++) {
  console.log(`---Producto ${i + 1}---`);
  console.log(`Nombre: ${productos[i].nombre}`);
  console.log(`Precio: ${productos[i].precio}`);
  console.log(`Codigo: ${productos[i].codigo}`);
  console.log(`Colores Disponibles:`);
  for (let j = 0; j < productos[i].coloresDisponibles.length; j++) {
    console.log(productos[i].coloresDisponibles[j]);
  }
}
