// Date() clase cuyos objetos trabajan con fechas
let hoy = new Date();
console.log(hoy);

/**
 * getFullYear()  retorna el año de una variable de tipo fecha
 */
let anioActual = hoy.getFullYear();
console.log("Año actual:");
console.log(anioActual);

/**
 * getMonth() retorna el mes de una viable de tipo fecha
 * OJO: enero empieza con el valor 0, Diciembre 11
 */
let mesActual = hoy.getMonth();
console.log("Mes actual:");
console.log(mesActual);

/**
 * getDate() retorna el día del calendario de una variable DATE
 */
let diaCalendarioActual = hoy.getDate();
console.log("Dia calendario actual:");
console.log(diaCalendarioActual);

let stringFecha = `${diaCalendarioActual}-${mesActual + 1}-${anioActual}`;
console.log("Fecha en String");
console.log(stringFecha);

/**
 * Función que retorna el número del día de la semana empezando desde el 0
 * como domingo
 */
let diaSemana = hoy.getDay();
console.log("Dia de la semana");
console.log(diaSemana);

let horaActual = hoy.getHours();
let minutoActual = hoy.getMinutes();
let segundoActual = hoy.getSeconds();
let milisegundoActual = hoy.getMilliseconds();

console.log(`hora Actual: ${horaActual}`);
console.log(`minuto Actual: ${minutoActual}`);
console.log(`segundo Actual: ${segundoActual}`);
console.log(`milisegundo Actual: ${milisegundoActual}`);

// Iniciar una variable de tipo fecha
// ubicado en navidad por ejemplo
// new Date(anio?,mes?,dia?,horas?,minutos?,segundos?);
let navidad2020 = new Date(2020, 11, 25);
console.log(navidad2020);


// la diferencia de las fechas en millisegundos
let navidadMenosHoy = navidad2020 - hoy;

let semanasParaNavidad = ((((navidadMenosHoy/1000)/60)/60)/24)/7;

console.log(`Semanas para navidad: ${semanasParaNavidad}`);
