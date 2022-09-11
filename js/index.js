

let listaCursos = JSON.parse(localStorage.getItem('listaCursosKey')) || [];


//dibujar columnas
listaCursos.map((curso)=>{ crearColumna(curso)})


function crearColumna(curso){
    let grilla = document.querySelector('#grilla');

    grilla.innerHTML += `

    <aside class="col-12 col-md-4 col-lg-3 mb-3">
    <div class="card" >
    <img src="${curso.imagen}"  alt="${curso.nombre}">
      <div class="card-body">
        
      <h5 class="card-title">${curso.nombre}</h5>
        <h6 class="precio">${curso.precio} </h6> 
        <p> ${curso.descripcion}</p>    
        <a href="#" class="btn btn-success button input agregar-carrito my-2" data-id="${curso.codigo}">Agregar Al Carrito</a>  
        <a href="pages/detallespyton.html" class="btn btn-primary">ver detalle</a>
                 
      </div>
    </div>
  </aside>



`
}

/*------------------------------------------------------------ CARRITO DE COMPRAS*/




const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector ('#vaciar-carrito');
const grilla=document.querySelector('#grilla');
let articulosCarrito =[];


cargarEventListeners();

function cargarEventListeners(){
// cuando agregas un curso presionando "Agregar al Carrito"
    grilla.addEventListener('click', agregarCurso);


    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    //
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito =[]; // reseteamos el arreglo
        limpiarHTML(); // Eliminamos todo el HTML
    })
}


function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

leerDatosCurso(cursoSeleccionado);
    }
 
}

//Elimina los datos del carrito
function eliminarCurso (e){
if(e.target.classList.contains('borrar-curso')){
    const cursoId = e.target.getAttribute('data-id')
    // Elimina el arreglo de articuloCarrito por el data-id
    articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
}   

}

//Lee el contenido del HTML al que le dimos click y extrae la información del curo

function leerDatosCurso(curso){
// console.log(curso)
// Crear un objeto con el contenido del curso actual
const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h5').textContent,
    precio: curso.querySelector('.precio').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}
// Revisa si un elemento ya existe en el carrito
const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
if (existe){
    //Actualizamos la cantidad
    const cursos = articulosCarrito.map( curso => {
    if (curso.id === infoCurso.id){
    //curso.cantidad ++;
        return curso; // retorna el objeto actualizado
    }else{
        return curso; // retorna los objetos que no son los duplicados
    }

    });
    articulosCarrito = [...cursos];
}else{
    // Agregamos el curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
}

// Agrega elemento al arreglo de carrito
;
console.log(articulosCarrito);
carritoHTML();
}

// Muestra el carrito de compras en el HTML

function carritoHTML(){
    // Limpiar el HTML
    limpiarHTML()

    //Recorre el carrito y genera el HTML
    
    
    articulosCarrito.forEach(curso => {
     console.log(curso)
     const { imagen, titulo, precio, cantidad, id } = curso   
     const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="50" class="rounded-circle"></td>
        <td>${titulo}</td>
        <td>$${precio}</td>
        
        <td>
        <a href="#" class="borrar-curso bg-danger border-dark  text-white ms-1" data-id="${id}"> X </a>
        </td>
    `
    // Agrega el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row)
})
}

// Elimina los cursos del tbody

function limpiarHTML(){
   // Forma lenta
   //  contenedorCarrito.innerHTML = ''
   while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
   }
}


/*------------------------------------------------------------ BARRA BUSCADORA*/

const cursoBuscado = JSON.parse(localStorage.getItem('listaCursosKey')) || [];


const buscador= document.querySelector('#buscador');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#grilla')

console.log(listaCursos)

const filtrar = ()=>{
// console.log(buscador.value);
resultado.innerHTML = '';
const texto = buscador.value.toLowerCase ();

for(let curso of listaCursos){
    let nombre = curso.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
        resultado.innerHTML += `
        <aside class="col-12 col-md-4 col-lg-3 mb-3">
        <div class="card" >
        <img src="${curso.imagen}"  alt="${curso.nombre}">
          <div class="card-body">
            
          <h5 class="card-title">${curso.nombre}</h5>
            <h6 class="precio">${curso.precio} </h6> 
            <p> ${curso.descripcion}</p>    
            <a href="#" class="btn btn-success button input agregar-carrito my-2" data-id="${curso.codigo}">Agregar Al Carrito</a>  
            <a href="pages/detallespyton.html" class="btn btn-primary">ver detalle</a>
                     
          </div>
        </div>
      </aside>
    
    
    
         `
    }
}
if(resultado.innerHTML === ''){
    resultado.innerHTML += `<p>Producto no encontrado...</p>
     `
}
}

boton.addEventListener('click', filtrar)
buscador.addEventListener('keyup', filtrar)

filtrar();

/*

const cursoBuscado = JSON.parse(localStorage.getItem('listaCursosKey')) || [];


const buscador= document.querySelector('#buscador');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#grilla')

console.log(listaCursos)

const filtrar = ()=>{
// console.log(buscador.value);
resultado.innerHTML = '';
const texto = buscador.value.toLowerCase ();

for(let curso of listaCursos){
    let nombre = curso.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
        resultado.innerHTML += `
        <p>${curso.nombre} - Valor: ${curso.precio}</p>
         `
    }
}
if(resultado.innerHTML === ''){
    resultado.innerHTML += `<p>Producto no encontrado...</p>
     `
}
}

boton.addEventListener('click', filtrar)
buscador.addEventListener('keyup', filtrar)

filtrar();


*/