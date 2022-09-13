

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
      <h6> Categoría: ${curso.categoria}
      <h5 class="card-title">${curso.nombre}</h5>
        <h6 class="precio">Precio: $${curso.precio} </h6> 
        <p> ${curso.descripcion}</p>    
        <a href="#" class="btn btn-success button input agregar-favorito my-2" data-id="${curso.codigo}">Agregar a Favorito</a>
        <a href="#" class="btn btn-success button input agregar-carrito my-2" data-id="${curso.codigo}">Agregar Al Carrito</a>  
        <button class="btn btn-primary" onclick="detalleCurso('${curso.codigo}')">Ver detalle</button>
                                
      </div>
    </div>
  </aside>



`
}

function detalleCurso(codigo){
    window.location.href = window.location.origin + '/pages/detallespyton.html?codigo='+codigo;
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


/*------------------------------------------------------------ CURSOS FAVORITOS*/


const favoritos = document.querySelector('#favoritos');
const contenedorFavoritos = document.querySelector('#lista-favoritos tbody');
const vaciarFavoritosBtn = document.querySelector ('#vaciar-favoritos');
const listaCursosFavoritos=document.querySelector('#grilla');
let articulosFavoritos =[];


cargarEventListenersFavoritos();

function cargarEventListenersFavoritos(){
// cuando agregas un curso presionando "Agregar a favoritos"
    listaCursosFavoritos.addEventListener('click', agregarCursoFavoritos);


    //Elimina cursos del favoritos
    favoritos.addEventListener('click', eliminarCursoFavoritos)

    //
    vaciarFavoritosBtn.addEventListener('click', () =>{
        articulosFavoritos =[]; // reseteamos el arreglo
        limpiarHTMLFavoritos(); // Eliminamos todo el HTML
    })
}


function agregarCursoFavoritos(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-favorito')){
        const cursoSeleccionadoFavorito = e.target.parentElement.parentElement;

leerDatosCursoFavoritos(cursoSeleccionadoFavorito);
    }
 
}

//Elimina los datos de favoritos
function eliminarCursoFavoritos (e){
if(e.target.classList.contains('borrar-curso')){
    const cursoIdFavorito = e.target.getAttribute('data-id')
    // Elimina el arreglo de articuloFavorito por el data-id
    articulosFavoritos = articulosFavoritos.filter( curso => curso.id !== cursoIdFavorito);
favoritosHTML(); // Iterar sobre favorito y mostrar su HTML
}   

}

//Lee el contenido del HTML al que le dimos click y extrae la información del curo

function leerDatosCursoFavoritos(curso){
// console.log(curso)
// Crear un objeto con el contenido del curso actual
const infoCursoFavorito = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h5').textContent,
    precio: curso.querySelector('.precio').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}
// Revisa si un elemento ya existe en favorito
const existeFavorito = articulosFavoritos.some(curso => curso.id === infoCursoFavorito.id)
if (existeFavorito){
    //Actualizamos la cantidad
    const cursos = articulosFavoritos.map( curso => {
    if (curso.id === infoCurso.id){
        curso.cantidad ++;
        return curso; // retorna el objeto actualizado
    }else{
        return curso; // retorna los objetos que no son los duplicados
    }

    });
    articulosFavoritos = [...cursos];
}else{
    // Agregamos el curso a favoritos
    articulosFavoritos = [...articulosFavoritos, infoCursoFavorito]
}

// Agrega elemento al arreglo de favoritos
;
console.log(articulosFavoritos);
favoritosHTML();
}

// Muestra favoritos en el HTML

function favoritosHTML(){
    // Limpiar el HTML
    limpiarHTMLFavoritos()

    //Recorre favoritos y genera el HTML
    
    
    articulosFavoritos.forEach(curso => {
     console.log(curso)
     const { imagen, titulo, precio, cantidad, id } = curso   
     const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100"></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
    `
    // Agrega el HTML de favoritos en el tbody
    contenedorFavoritos.appendChild(row)
})
}

// Elimina los cursos del tbody

function limpiarHTMLFavoritos(){
   // Forma lenta
   //  contenedorFavoritos.innerHTML = ''
   while(contenedorFavoritos.firstChild){
    contenedorFavoritos.removeChild(contenedorFavoritos.firstChild)
   }
}

/*------------------------------------------------------------ BARRA BUSCADORA*/

const cursoBuscado = JSON.parse(localStorage.getItem('listaCursosKey')) || [];


const buscador= document.querySelector('#buscador');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#grilla')


const filtrar = (e)=>{
    //e.preventDefault()
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
        <h6> Categoría: ${curso.categoria}
        <h5 class="card-title">${curso.nombre}</h5>
          <h6 class="precio">Precio: $${curso.precio} </h6> 
          <p> ${curso.descripcion}</p>
          <a href="#" class="btn btn-success button input agregar-favorito my-2" data-id="${curso.codigo}">Agregar a Favorito</a>    
          <a href="#" class="btn btn-success button input agregar-carrito my-2" data-id="${curso.codigo}">Agregar Al Carrito</a>  
          <button class="btn btn-primary" onclick="detalleCurso('${curso.codigo}')">Ver detalle</button>
                     
          </div>
        </div>
      </aside>
    
    
    
         `
    }
}
if(resultado.innerHTML === ''){
    resultado.innerHTML += `<p><b>Lo sentimos, no hemos encontrado resultados para</b></p>
    <p class="fs-5"><i><b> "${texto}"</b></i><p>
    <p class="my-0"> <b> Modifica tu búsqueda. Aquí tienes algunas ideas: </b> <p>
    <ul>
    <li>Asegúrate de que todas las palabras están escritas correctamente.</li>
    <li>Prueba con términos de búsqueda diferentes.</li>
    <li>Prueba con términos de búsqueda más generales.</li>
    </ul>
     `
}
}


boton.addEventListener('click', filtrar)
buscador.addEventListener('keyup', filtrar)


filtrar();

/*------------------------------------------------------------ BARRA BUSCADORA CATEGORIAS*/
//Variables
const marca = document.querySelector('#marca')
const cursoCategoria = JSON.parse(localStorage.getItem('listaCursosKey')) || [];


//Generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
}

//contenedor para los resultados
const resultadoCategoria = document.querySelector('#grilla')

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarCursos(cursos);

})

//Event listener para los select de búsqueda 
marca.addEventListener('change', e =>{
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})

// Funciones
function mostrarCursos (cursos){
cursos.forEach (curso =>{
 const cursoHTML = document.createElement ('aside')
 cursoHTML.textContent = `
 <aside class="col-12 col-md-4 col-lg-3 mb-3">
 <div class="card" >
 <img src="${curso.imagen}"  alt="${curso.nombre}">
 <div class="card-body">
 <h6> Categoría: ${curso.categoria}
 <h5 class="card-title">${curso.nombre}</h5>
   <h6 class="precio">Precio: $${curso.precio} </h6> 
   <p> ${curso.descripcion}</p>
   <a href="#" class="btn btn-success button input agregar-favorito my-2" data-id="${curso.codigo}">Agregar a Favorito</a>    
   <a href="#" class="btn btn-success button input agregar-carrito my-2" data-id="${curso.codigo}">Agregar Al Carrito</a>      
   <button class="btn btn-primary" onclick="detalleCurso('${curso.codigo}')">Ver detalle</button>        
   </div>
 </div>
</aside>
 
 `
 resultadoCategoria.appendChild(cursoHTML)

})

}

// Función que filtra en base a la búsqueda

function filtrarAuto (){
const resultadoFiltrado = cursoCategoria.filter(filtrarMarca)
mostrarCursos(resultadoFiltrado)
}

function filtrarMarca (curso){
const {marca} = datosBusqueda
    if(marca){
    return curso.marca === marca;
}
return curso;
}