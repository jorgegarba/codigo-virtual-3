let paises = [
  { id: 1, nombre: "Perú" },
  { id: 2, nombre: "Bolivia" },
  { id: 3, nombre: "Chile" },
  { id: 4, nombre: "Argentina" },
];

let departamentos = [
  { id: 1, nombre: "Lima", paisId: 1 },
  { id: 2, nombre: "Arequipa", paisId: 1 },
  { id: 3, nombre: "Puno", paisId: 1 },
  { id: 4, nombre: "La Paz", paisId: 2 },
  { id: 5, nombre: "Cochabamba", paisId: 2 },
  { id: 6, nombre: "Santa Cruz", paisId: 2 },
];

const getPaisById = (id) => {
  let buscando = new Promise((resolve, reject) => {
    setTimeout(() => {
      let pais = paises.find((objPais) => {
        if (objPais.id === id) {
          return objPais;
        }
      });
      if (pais) {
        resolve(pais);
      } else {
        reject("No se encontro el país buscado joven");
      }
    }, 2000);
  });
  return buscando;
};

const getDepartamentosByPaisId = (id) => {
  const buscando = new Promise((resolve, reject) => {
    setTimeout(() => {
      const dptos = departamentos.filter((objDpto) => {
        if (objDpto.paisId === id) {
          return objDpto;
        }
      });
      resolve(dptos);
    }, 3000);
  });
  return buscando;
};

/**
 * funcion que retorna tanto el pais como la lista de departamentos
 * dado el id de un pais
 */
const getAllByPaisId = async (id) => {
	let paisEncontrado = await getPaisById(id);
	let departamentosFiltrados = await getDepartamentosByPaisId(id);
  return {
    paisEncontrado: paisEncontrado,
    departamentosFiltrados: departamentosFiltrados,
  };
};

getAllByPaisId(1).then((rptaFinal) => {
  console.log(rptaFinal);
});








const funcionAsincrona = async () => {
  return 100;
};

funcionAsincrona().then((valor) => {
  console.log(valor);
});
