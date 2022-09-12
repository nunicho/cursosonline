let listaPersonas = JSON.parse(localStorage.getItem("listaPersonasKey")) || [];

cargaInicial();

function cargaInicial(){
    if (listaPersonas.length > 0) {
        listaPersonas.map((personas)=>{crearFila(personas)})
    }
}


function crearFila (itemPersona){
    console.log(itemPersona)
    let tablaPersonas = document.querySelector("#tablaPersonas");
    tablaPersonas.innerHTML += `<tr>
    <th scope="row">${itemPersona.codigo}</th>
    <td>${itemPersona.nombre}</td>
    <td>${itemPersona.contrasena}</td>
    <td>${itemPersona.tipo}</td>
  </tr>`

}