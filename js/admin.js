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

let cursoNuevo = true;  // si cursoNuevo es true entonces crear un Curso, caso contrario actualizar un Curso

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
      <button class="btn btn-warning" onclick="editarCurso('${itemCurso.codigo}')">
        <i class="bi bi-pencil-square"></i>
      </button>
      <button class="btn btn-danger" onclick="borrarCurso('${itemCurso.codigo}')">
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`

}

function mostrarFormulario(){
    cursoNuevo = true;  
    limpiarFormulario();
    modalFormCurso.show();
    codigo.value = uuidv4()
    }

function crearCurso(e){
    e.preventDefault();
    //AGREGAR VALIDACIONES CAMI.
    

    if (cursoNuevo) {     
    //CREAR CURSO
    const nuevoCurso = new Curso(codigo.value, nombre.value, precio.value, categoria.value, imagen.value, descripcion.value)
    console.log(nuevoCurso);
    //GUARDAR CURSO EN EL ARREGLO
    listaCursos.push(nuevoCurso);
    //guardar los datos en local storage
    guardarDatosEnLS()
    // LIMPIAR CURSO
    limpiarFormulario();
    //dibujar curso
    crearFila(nuevoCurso)
    //CERRAR LA VENTANA MODAL
    Swal.fire('El curso fue cargado correctamente!')   
    modalFormCurso.hide();

    } else {
      actualizarCurso();
    }
    
    

}

function limpiarFormulario(){
    formCurso.reset();
    codigo.className = "form-control";
    nombre.className = "form-control";
    precio.className = "form-control";
    categoria.className = "form-control";
    imagen.className = "form-control";
    descripcion.className = "form-control";
    
}


function guardarDatosEnLS(){
    localStorage.setItem("listaCursosKey", JSON.stringify(listaCursos))
}



window.borrarCurso = function (codigo) {
    Swal.fire({
      title: "Eliminar Curso",
      text: "Esta por eliminar el curso seleccionado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      
      if (result.isConfirmed) {
        let copiaListaCursos = listaCursos.filter(
          (cursos) => cursos.codigo != codigo
        ); 
        listaCursos = copiaListaCursos;
        guardarDatosEnLS();
        actualizarTabla();
        Swal.fire(
          "Curso eliminado",
          "El curso seleccionado se borro correctamente",
          "success"
        );
      }
    });
  };


  function actualizarTabla() {
    let tablaCurso = document.querySelector("#tablaCurso");
    tablaCurso.innerHTML = "";
    cargaInicial();
  }
  

  window.editarCurso = function (codigoBuscado) {
    cursoNuevo = false;
    //mostrar la ventana modal
    modalFormCurso.show();
    //buscar el curso que quiero mostrar en el formulario
    let cursoBuscado = listaCursos.find(
      (curso) => curso.codigo === codigoBuscado
    );
    //cargar el formulario con los datos
    codigo.value = cursoBuscado.codigo;
    nombre.value = cursoBuscado.nombre;
    precio.value = cursoBuscado.precio;
    categoria.value = cursoBuscado.categoria;
    imagen.value = cursoBuscado.imagen;
    descripcion.value = cursoBuscado.descripcion;
  
  };
  
  function actualizarCurso() {
    console.log("actualizando datos del curso...");
    //buscar la posicion del curso que estoy editando en el arreglo de cursos (codigo)
    // let posicionCurso = listaCursos.findIndex((curso)=> {return curso.codigo === codigo.value}); //return implicito
    let posicionCurso = listaCursos.findIndex(
      (curso) => curso.codigo === codigo.value
    ); //return implicito
  
    //actualizar todos los datos del objeto
    listaCursos[posicionCurso].nombre = nombre.value;
    listaCursos[posicionCurso].precio = precio.value;
    listaCursos[posicionCurso].categoria = categoria.value;
    listaCursos[posicionCurso].imagen = imagen.value;
    listaCursos[posicionCurso].descripcion = descripcion.value;
    
    //actualizar el localstorage
    guardarDatosEnLS();
    //actualizar la tabla
    actualizarTabla();
    //cerrar ventana modal
    modalFormCurso.hide()
    //limpie el formulario
    limpiarFormulario();
  }