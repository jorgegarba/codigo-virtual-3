// Condicionales



let edad = +prompt("Ingrese su edad joven");
let indiceMasaCorporal = 0;
// let rpta = edad > 17;
// comparadores ariméticos

// > mayor
// < menor
// <= menor o igual
// >= mayor o igual
// !== diferente
// === igual

if (edad > 17) {
  let peso = +prompt("¿Cuanto pesa joven (Kgs.)?");
  let altura = +prompt("¿Cuánto mide joven (mts.)?");
	indiceMasaCorporal = peso / (altura * altura);
	debugger;
  if (indiceMasaCorporal > 30) {
    console.log(`No, no hay pase laboral #quedateEnCasa 😥`);
    console.log(`Está usted en riesgo por exceso de comidita 🐷`);
  } else {
    console.log(`Sí hay pase laboral 🎉`);
  }
  console.log(`Su indice de masa corporal (IMC) es: ${indiceMasaCorporal}`);
} else {
  console.log(`No, no hay pase laboral #quedateEnCasa`);
  console.log(`Es usted muy moco 😢`);
}

console.log("Fin del programa, hasta pronto! 😷");
