import Curso from "./classCurso.js";

let listaCursos = [];

const modalFormCurso = new bootstrap.Modal(document.querySelector("#modalCurso"));
const btnCrearCurso = document.querySelector("#btnCrearCurso");
let codigo = document.querySelector("#codigo")
let nombre = document.querySelector("#nombre")
let precio = document.querySelector("#precio")
let categoria = document.querySelector("#categoria")
let imagen = document.querySelector("#imagen")
let descripcion = document.querySelector("#descripcion")
let formCurso = document.querySelector("#formCurso")


//agregar los eventos.
btnCrearCurso.addEventListener("click", mostrarFormulario);

function mostrarFormulario(){
    modalFormCurso.show();
    codigo.value = uuidv4()
    }

