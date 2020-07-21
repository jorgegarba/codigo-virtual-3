let frase = "Agua que no has de BEBER, jala la cadena y Déjala Correr";
let cantidadLetras = frase.length;
console.log(`Cantidad de caracteres: ${cantidadLetras}`);

/**
 * string.toLowerCase()
 * retorna una copia de la cadena de texto, convertida a minúsculas
 */

let minusculas = frase.toLowerCase();
console.log(minusculas);

/**
 * string.toUpperCase()
 * retorna una copia de la cadena de texto, convertida a mayúsculas
 */

let mayusculas = frase.toUpperCase();
console.log(mayusculas);

/**
 * string.substr(posición_inicial, cantidad_de_caracteres_desde_posición_inicial)
 * Retorna una subcadena dada una posición iniical y una cantidad de carateres
 * a partir de dicha posición inical.
 */

let subcadena = frase.substr(8, 4);
console.log(subcadena);

/**
 * string.substring(posición_inicial, posición_final)
 * retorna una subcadena dada una posición inicial y una posición final
 * ATENTION: la última posición no es considerada dentro de la subcadena de respuesta
 */

let subcadenaInicioFin = frase.substring(8, 15);
console.log(subcadenaInicioFin);

/**
 * string.includes("subcadena_buscada")
 * Retorna true si la "subcadena_buscada" existe en el string
 * Retorna false si no existe
 */

let existeBEBER = frase.includes("BEBER");
console.log(`¿BEBER está incluída?: ${existeBEBER}`);

/**
 * string.indexOf("subcadena")
 * Retorna la posición inicial de la "subcadena buscada"
 * si "subcadena" no existe, se retorna -1
 */

let posicionPalabraCadena = frase.indexOf("cadena");
console.log(posicionPalabraCadena);

let posicionPalabraCadenas = frase.indexOf("cadenas");
console.log(posicionPalabraCadenas);

/**
 * string.trim()
 * retorna una copia de la cadena
 * SIN LOS ESPACIOS EN BLANCO a los extremos de dicha cadena
 * Si la cadena tiene espacios intermedios, no los borra
 */

let fraseConEspacios = "    ups!              ";
console.log(fraseConEspacios);
console.log(fraseConEspacios.trim());
