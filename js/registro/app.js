import Persona from "./classUsuario.js";

let listaPersonas = JSON.parse(localStorage.getItem("listaCursosKey")) || [];

let codigo = document.querySelector("#id");
let nombre = document.querySelector("#nombre");
let contrasena = document.querySelector("#contrasena");
let formulario = document.querySelector("#formRegistro");

formulario.addEventListener("submit", crearPersona);
codigo.value = uuidv4();

function crearPersona(e) {
  e.preventDefault();
  //AGREGAR VALIDACIONES CAMI.

  // if (personaNueva) {
  //CREAR CURSO
  const nuevaPersona = new Persona(
    codigo.value,
    nombre.value,
    contrasena.value
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
