// Destructuración de Objetos

let restaurant = {
  nombre: "El pollo real",
  tipo: "Pollería",
  aforo: 500,
  geo: {
    lat: -70,
    lng: -16,
  },
};

// Creando una variable "nombre" que es copia de restaurant.nombre
let { nombre, aforo: capacidad } = restaurant;
console.log(nombre);
console.log(capacidad);

let {
  geo: { lat: latitud, lng: longitud },
} = restaurant;
// console.log(geo);//error
console.log(latitud, longitud);

const nombreYAforo = ({ nombre, aforo }) => {
  console.log(nombre, aforo);
};
nombreYAforo(restaurant);

// forma correcta de copiar un objeto por completo
let copiaRest = { ...restaurant };
console.log(copiaRest);

const modificarAforo = (objRestaurant, nuevoAforo) => {
  return {
    ...objRestaurant,
    aforo: nuevoAforo,
  };
};

let restaurantGrande = modificarAforo(restaurant, 5000);
console.log(restaurantGrande);




/**
 * Ejemplo de destructuracion al estilo REACT!
 */
// const useState = (estadoInicial) => {
//   let inicial = estadoInicial;
//   const modificarEstado = (nuevoEstado) => {
//     inicial = nuevoEstado;
//   };

//   return [inicial, modificarEstado];
// };

// const [state, setState] = useState("Jorge");
// setState("nuevo estado");
