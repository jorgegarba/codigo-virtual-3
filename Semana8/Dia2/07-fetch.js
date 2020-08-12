const url = "https://reqres.in/api/users";
const tbody = document.getElementById("tbody");
const alertaCargando = document.getElementById("alertaCargando");
const miTabla = document.getElementById("miTabla");

// fetch(url).then((response) => {
//   response.json().then((final) => {
//     console.log(final);
//   });
// });

const getUsuarios = async () => {
  let response = await fetch(url);
  let myJson = await response.json();

  return myJson;
};

const dibujarTabla = (usuarios) => {
  usuarios.forEach((objUsu, i) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${i}</td>
										<td>${objUsu.id}</td>
										<td>${objUsu.first_name}</td>
										<td>${objUsu.last_name}</td>
										<td>${objUsu.email}</td>
										<td><img src='${objUsu.avatar}' 
												class='rounded-circle' width='50'/></td>`;
    tbody.appendChild(tr);
  });
  // muestre la tabla y ocultar el cargando
  miTabla.removeAttribute("hidden");
  alertaCargando.setAttribute("hidden", "hidden");
};

getUsuarios().then((rpta) => {
  dibujarTabla(rpta.data);
});
