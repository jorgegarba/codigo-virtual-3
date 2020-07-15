// Condicionales

let edad = +prompt("Ingrese su edad joven");
let peso = +prompt("¿Cuanto pesa joven (Kgs.)?");
let altura = +prompt("¿Cuánto mide joven (mts.)?");

let indiceMasaCorporal = 0;
// let rpta = edad > 17;
// comparadores ariméticos

// > mayor
// < menor
// <= menor o igual
// >= mayor o igual
// !== diferente
// === igual

// comparadores logicos

// Y    :   &&
// O    :   ||
// not  :   !

indiceMasaCorporal = peso / (altura * altura);

if (edad > 17 && indiceMasaCorporal <= 30) {
  console.log(`Sí hay pase laboral 🎉`);
} else {
  console.log(`No, no hay pase laboral #quedateEnCasa`);
  console.log(`Es usted muy moco 😢 o el IMC excede el valor de 30`);
}
console.log(`Su indice de masa corporal (IMC) es: ${indiceMasaCorporal}`);
console.log("Fin del programa, hasta pronto! 😷");
