let listaPersonas = JSON.parse(localStorage.getItem("listaPersonasKey")) || [];
const administrador = {
    codigo : 1,
    nombre: 'admin',
    contrasena: 'admin',
    tipo:'administrador'
  }
  crearAdmin()

  function crearAdmin(){
    let tablaPersonas = document.querySelector("#tablaPersonas");
    tablaPersonas.innerHTML += `
    <tr>
    <th scope="row">${administrador.codigo}</th>
    <td>${administrador.nombre}</td>
    <td>${administrador.contrasena}</td>
    <td>${administrador.tipo}</td>
  </tr>`
  }


cargaInicial();


function cargaInicial(){
    if (listaPersonas.length > 0) {
        listaPersonas.map((personas)=>{crearFila(personas)})
    }


function crearFila (itemPersona){

    let tablaPersonas = document.querySelector("#tablaPersonas");
    tablaPersonas.innerHTML += `
    <tr>
    <th scope="row">${itemPersona.codigo}</th>
    <td>${itemPersona.nombre}</td>
    <td>${itemPersona.contrasena}</td>
    <td>${itemPersona.tipo}</td>
  </tr>
   
`

}
}