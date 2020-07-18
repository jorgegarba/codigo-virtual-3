// Regla 1: Si la función sólo tiene una linea de ejecución
// se pueden omitir las llaves "{}"
const sumar = (a, b) => console.log(a + b);
sumar(52, 11);

// Regla 2: Si la función recibe 1 parametro solamente
// se pueden omitir los paréntesis
const cuadrado = numero => console.log(numero * numero);
cuadrado(12);

// Regla 3: Si la función sólo tiene una linea de ejecución y a su vez
// retorna un valor
// Se puede obviar la palabra reservada 'return ' y en su lugar, encerrar
// el retorno en un paréntesis
const cubo = n => (n*n*n);
console.log(cubo(5));
