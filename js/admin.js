import Curso from "./classCurso.js";

let listaCursos = JSON.parse(localStorage.getItem("listaCursosKey")) || [];

const modalFormCurso = new bootstrap.Modal(document.querySelector("#modalCurso"));
const btnCrearCurso = document.querySelector("#btnCrearCurso");
let codigo = document.querySelector("#codigo")
let nombre = document.querySelector("#nombre")
let precio = document.querySelector("#precio")
let categoria = document.querySelector("#categoria")
let imagen = document.querySelector("#imagen")
let descripcion = document.querySelector("#descripcion")
let formCurso = document.querySelector("#formCurso")



btnCrearCurso.addEventListener("click", mostrarFormulario);

formCurso.addEventListener("submit", crearCurso)

cargaInicial();

function cargaInicial(){
    if (listaCursos.length > 0) {
        listaCursos.map((curso)=>{crearFila(curso)})
    }
}

function crearFila (itemCurso){
    let tablaCurso = document.querySelector("#tablaCurso");
    tablaCurso.innerHTML += `<tr>
    <th scope="row">${itemCurso.codigo}</th>
    <td>${itemCurso.nombre}</td>
    <td>${itemCurso.precio}</td>
    <td>${itemCurso.categoria}</td>
    <td>${itemCurso.imagen}</td>
    <td>${itemCurso.descripcion}</td>
    <td>
      <button class="btn btn-warning" onclick="editarPelicula('${itemCurso.codigo}')">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn btn-danger" onclick="borrarPelicula('${itemCurso.codigo}')">
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`

}

function mostrarFormulario(){
    modalFormCurso.show();
    codigo.value = uuidv4()
    }

function crearCurso(e){
    e.preventDefault();
    //AGREGAR VALIDACIONES CAMI.
    
    //CREAR CURSO
    
    const nuevoCurso = new Curso(codigo.value, nombre.value, precio.value, categoria.value, imagen.value, descripcion.value)
   
    console.log(nuevoCurso);
    
    //GUARDAR CURSO EN EL ARREGLO
   
    listaCursos.push(nuevoCurso);
   
    //guardar los datos en local storage
   
    guardarDatosEnLS()
   
    // LIMPIAR CURSO
  
    limpiarFormulario();
  
    //CERRAR LA VENTANA MODAL
   
    modalFormCurso.hide();
}

function limpiarFormulario(){
    formCurso.reset();
    //resetear la claser de bootstrap form-control
}

function guardarDatosEnLS(){
    localStorage.setItem("listaCursosKey", JSON.stringify(listaCursos))
}