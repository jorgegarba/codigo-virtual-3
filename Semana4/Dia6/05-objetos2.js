let objTienda = {
  nombre: "Capricho",
  categoria: "postres",
  descripcion: "Tienda de postres arequipeños",
  sucursales: [
    {
      nombre: "Capricho Mercaderes",
      telefono: "974254652",
    },
    {
      nombre: "Capricho Lambramani",
      telefono: "974254111",
    },
    {
      nombre: "Capricho EEUU",
      telefono: "974220011",
    },
  ],
};

console.log(`------ CAPRICHO -----`);
console.log(`Nombre: ${objTienda.nombre}`);
console.log(`Categoria: ${objTienda.categoria}`);
console.log(`Descripcion: ${objTienda.descripcion}`);
console.log(`Sucursales:`);

for (let i = 0; i < objTienda.sucursales.length; i++) {
  console.log(`----------------`);
  console.log(`Sucursal ${i + 1}`);
  console.log(`Nombre: ${objTienda.sucursales[i].nombre}`);
  console.log(`Telefono: ${objTienda.sucursales[i].telefono}`);
  console.log(`----------------`);
}
