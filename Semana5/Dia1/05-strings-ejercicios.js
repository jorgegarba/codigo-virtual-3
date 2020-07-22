let frase = "anita lava la tina";

for (let i = 0; i < frase.length; i++) {
  console.log(`${i} => ${frase[i]}`);
}

console.log("----------------");

/**
 * Función que retorna la cantidad de palabras que tiene
 * una cadena de texto
 * @param {*} cadena
 */
const contadorDePalabras = (cadena) => {
  let contadorPalabras = 0;
  let cadenaArreglada = cadena.trim();

  if (cadenaArreglada === "") {
    return 0;
  }

  for (let i = 0; i < cadenaArreglada.length; i++) {
    if (cadenaArreglada[i] === " ") {
      contadorPalabras++;
    }
  }
  return contadorPalabras + 1;
};

let resultado = contadorDePalabras("los del grupo 2 son los engreidos");
console.log(`Palabras: ${resultado}`);

// ---------------------
//2
/**
 * Función que recibe una cadena de texto, le quita los espacios
 * En blanco tanto a los extremos como espacios internos y retorna
 * una nueva cadena sin los espacios en blanco
 *
 * Ejm: Puno capital folklórica del mundo
 * retorno: Punocapitalfolklóricadelmundo
 * @param {*} cadena
 */
const quitarEspacios = (cadena) => {
  let cadenaNueva = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") {
      cadenaNueva = cadenaNueva + cadena[i];
    }
  }
  return cadenaNueva;
};

let respuesta = quitarEspacios("anita lava la tina");
console.log(respuesta);

// ----------------------------
// 3
/**
 * Función que retorna true o false en caso que una cadena sea un palindromo
 * Ejm: anita lava la tina (es palindromo)
 * Ejm: oso (es palindromo)
 *
 * @param {*} cadena
 */
const esPalindromo = (cadena) => {
  let cadenaUnida = cadena.toLowerCase();
  cadenaUnida = quitarEspacios(cadenaUnida);

  let cadenaReves = "";
  for (let i = cadenaUnida.length - 1; i >= 0; i--) {
    cadenaReves = cadenaReves + cadenaUnida[i];
  }

  if (cadenaReves === cadenaUnida) {
    return true;
  }
  return false;
};

let rptaPalindromo = esPalindromo("ANITA LAVA la tina");
console.log(rptaPalindromo);
