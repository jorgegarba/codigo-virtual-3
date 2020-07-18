// Se pueden crear funciones dentro de otras funciones

const areaCirculo = (radio) => {
  const PI = 3.1416;

  const cuadrado = (numero) => {
    return numero * numero;
  };

  return PI * cuadrado(radio);
};

let rpta = areaCirculo(13);
console.log(rpta);




