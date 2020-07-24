/**
 * Los nombres de las clases deben iniciar con una Mayúscula
 */
class Restaurant {
  aforo;
  nroMesas;
  direccion;
  categoria;
  telefonos;
  nombre;
  delivery;
  /**
   * Para la 'tipificacion':
   * Será tipo "A" si el aforo es mayor a 500 personas
   * Será tipo "B" si es aforo es mayor a 300 personas
   * Será tipo "C" si el aforo es menor igual a 300 personas
   */
  tipificacion;

  /**
   * Funcion que se ejecuta automaticamente al momento de crear un objeto
   */
  constructor(
    _aforo = 0,
    _nroMesas = 0,
    _direccion = "Sin Dirección",
    _categoria = "Sin Categoria",
    _telefonos = [],
    _nombre = "Sin Nombre",
    _delivery = false
  ) {
    // this : acceder al scope interno de la clase.
    // this: se usa para acceder a los atributos y métodos de la clase.
    this.aforo = _aforo;
    this.nroMesas = _nroMesas;
    this.direccion = _direccion;
    this.categoria = _categoria;
    this.telefonos = _telefonos;
    this.nombre = _nombre;
    this.delivery = _delivery;

    if (this.aforo > 500) {
      this.tipificacion = "A";
    } else if (this.aforo > 300) {
      this.tipificacion = "B";
    } else {
      this.tipificacion = "C";
    }
  }

  imprimirTelefonos() {
    console.log(`Teléfonos del restaurant: ${this.nombre}`);
    for (let i = 0; i < this.telefonos.length; i++) {
      console.log(`📞 ${this.telefonos[i]}`);
    }
  }

  imprimirTelefonos2() {
    for (const tel of this.telefonos) {
      console.log(`Telefono: ${tel}`);
    }
  }

  toString() {
    return this.nombre;
  }

}

// Instanciando una clase : Creando un objeto a partir de una clase
let objTanta = new Restaurant(
  800,
  200,
  "Vallecito",
  "Comida Criolla",
  ["974204853", "974854512"],
  "Tanta",
  true
);

let objAstrid = new Restaurant();

// Modificando los atributos de un objeto
// objAstrid.aforo = 1000;

console.log(objTanta);
console.log(objAstrid);

objTanta.imprimirTelefonos();
objTanta.imprimirTelefonos2();








// // esto es una clase a la antigua en JS
// function Curso(){
//   var retorno = {
//     nombre:"sin nombre",
//     horas:0,
//     profe:"nadie"
//   }
//   return retorno;
// }

// let cursoAlgoritmos = new Curso();