// Programa para hallar el mayor de 3 números :)
// NO USAR OPERADORES LOGICOS
// Asumir que los 3 número son distintos (no troll)
let nro1 = 45;
let nro2 = 1;
let nro3 = 74;

if (nro1 > nro2) {
  // nro1 es mayor que el nro2
  if (nro1 > nro3) {
    // nro1 es el mayor de los 3
    console.log(`El número mayor es nro1 => ${nro1}`);
  } else {
    // nro3 es emayor que el nro1
    console.log(`El número mayor es nro3 => ${nro3}`);
  }
} else {
  // nro2 es mayor que el nro1
  if (nro2 > nro3) {
    console.log(`El número mauyor es nro2 => ${nro2}`);
  } else {
    console.log(`EL número mayor es nro3 => ${nro3}`);
  }
}
