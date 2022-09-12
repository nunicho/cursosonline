import Persona from "./classUsuario.js";

let listaPersonas = JSON.parse(localStorage.getItem("listaPersonasKey")) || [];

let codigo = document.querySelector("#id");
let nombre = document.querySelector("#nombre");
let contrasena = document.querySelector("#contrasena");
let tipo = document.querySelector("#tipo");
let formulario = document.querySelector("#formRegistro");

formulario.addEventListener("submit", crearPersona);

codigo.value = uuidv4();
tipo.value = "Usuario";

function crearPersona(e) {
  e.preventDefault();
  //AGREGAR VALIDACIONES CAMI.


  //CREAR persona
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
}

function guardarDatosEnLS() {
  localStorage.setItem("listaPersonasKey", JSON.stringify(listaPersonas));
}
function limpiarFormulario() {
  formRegistro.reset();
  codigo.value = uuidv4();
  codigo.className = "form-control text-dark";
  nombre.className = "form-control";
  contrasena.className = "form-control";
  tipo.className = "form-control text-dark";
}
