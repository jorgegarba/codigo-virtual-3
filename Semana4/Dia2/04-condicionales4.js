// Dado que el usuario ingresa un año Ejm 1998
// Calcular si el año es bisiesto or not!

let anio = +prompt("Ingrese el año a evaluar");

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
  console.log(`El año ${anio} SI es bisiesto`);
} else {
  console.log(`El año ${anio} NO es bisiesto`);
}


// CODIGO DE DANIEL equisDE
// let anio =  +prompt("Ingresa año")
// if (anio % 400===0){
//     console.log("BIciesto");
// } else if (anio%4===0 && anio % 100 !== 0){
//     console.log("BIciesto");
// }else{
//     console.log("No BIciesto");
// }

