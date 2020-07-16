// Switch

console.log(` Elegir Opcion: 
1. Login
2. Ver Facturas
3. Ver Reportes`);

let rpta = +prompt("Ingresar Opcion;");

switch (rpta) {
  case 1:
    console.log("Usted eligió iniciar sesión");
    // break es una sentencia que sirve para romper la ejecución
    // del código restante en la estructura
    break;
  case 2:
    console.log("Usted desea ver las facturas");
    break;
  case 3:
    console.log("Usted desea ver reportes");
    break;
  default:
    console.log("Por favorcito, ingrese una opción válida");
}
console.log("Fin del programa");
