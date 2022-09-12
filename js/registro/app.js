import Persona from "./classUsuario.js";

let listaPersonas = JSON.parse(localStorage.getItem("listaPersonasKey")) || [];

let codigo = document.querySelector("#id");
let nombre = document.querySelector("#nombre");
let contrasena = document.querySelector("#contrasena");
let tipo = document.querySelector('#tipo')
let formulario = document.querySelector("#formRegistro");

formulario.addEventListener("submit", crearPersona);

codigo.value = uuidv4();
tipo.value = 'Usuario'

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
  </tr>`

}
function crearPersona(e) {
  e.preventDefault();
  //AGREGAR VALIDACIONES CAMI.

  // if (personaNueva) {
  //CREAR CURSO
  const nuevaPersona = new Persona(
    codigo.value,
    nombre.value,
    contrasena.value,
    tipo.value
  );

  //GUARDAR CURSO EN EL ARREGLO
  listaPersonas.push(nuevaPersona);
  console.log(listaPersonas);
  // guardar los datos en local storage
  guardarDatosEnLS();
  // LIMPIAR formulario
  limpiarFormulario();
  // //dibujar Persona
  // crearFila(nuevoCurso)
  // //CERRAR LA VENTANA MODAL
  // Swal.fire('El curso fue cargado correctamente!')
  // modalFormCurso.hide();

  // } else {
  //   actualizarCurso();
  // }
}
// }

function guardarDatosEnLS() {
  localStorage.setItem("listaPersonasKey", JSON.stringify(listaPersonas));
}
function limpiarFormulario() {
  formRegistro.reset();
  codigo.value = uuidv4();
  codigo.className = "form-control";
  nombre.className = "form-control";
  contrasena.className = "form-control";
}
