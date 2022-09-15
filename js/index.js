

let listaCursos = JSON.parse(localStorage.getItem('listaCursosKey')) || [];


listaCursos.map((curso)=>{ crearColumna(curso)})


function crearColumna(curso){
    let grilla = document.querySelector('#grilla');

    grilla.innerHTML += `

    <aside class="col-12 col-md-4 col-lg-3 mb-3">
    <div class="card" >
    <img src="${curso.imagen}"  alt="${curso.nombre}">
      <div class="card-body">
      <h6 class="tituloGrilla"> Categoría: ${curso.categoria}
      <h5 class="card-title tituloGrilla">${curso.nombre}</h5>
        <h6 class="precio">Precio: $${curso.precio} </h6> 
        <p> ${curso.descripcion}</p>
        <a href="#" class="btn btn-success button input agregar-carrito my-2" data-id="${curso.codigo}">&#128722</a>
        <a href="#" class="btn btn-success button input agregar-favorito my-2" data-id="${curso.codigo}">&#9733;</a>        
        <button class="btn btn-primary" onclick="detalleCurso('${curso.codigo}')">Ver detalle</button>
                                
      </div>
    </div>
  </aside>



`
}

function detalleCurso(codigo){
    window.location.href = window.location.origin +'/pages/detalles.html?codigo='+codigo;
}






const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector ('#vaciar-carrito');
const grilla = document.querySelector('#grilla');
let articulosCarrito =[];


cargarEventListeners();

function cargarEventListeners(){

    grilla.addEventListener('click', agregarCurso);



    carrito.addEventListener('click', eliminarCurso)

    //
    vaciarCarritoBtn.addEventListener('click', () =>{
        articulosCarrito =[]; 
        limpiarHTML(); 
    })
}


function agregarCurso(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

leerDatosCurso(cursoSeleccionado);
    }
 
}


function eliminarCurso (e){
if(e.target.classList.contains('borrar-curso')){
    const cursoId = e.target.getAttribute('data-id')
   
    articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
carritoHTML();
}   

}



function leerDatosCurso(curso){

const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h5').textContent,
    precio: curso.querySelector('.precio').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}

const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
if (existe){
 
    const cursos = articulosCarrito.map( curso => {
    if (curso.id === infoCurso.id){

        return curso; 
    }else{
        return curso; 
    }

    });
    articulosCarrito = [...cursos];
}else{
    articulosCarrito = [...articulosCarrito, infoCurso]
}


;
console.log(articulosCarrito);
carritoHTML();
}



function carritoHTML(){

    limpiarHTML()


    
    
    articulosCarrito.forEach(curso => {
     console.log(curso)
     const { imagen, titulo, precio, cantidad, id } = curso   
     const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100" class="rounded border border-primary"></td>
        <td class="carritoFavorito">${titulo}</td>
        <td>${precio}</td>
        
        <td>
        <a href="#" class="borrar-curso bg-danger border-dark  text-white ms-1" data-id="${id}"> X </a>
        </td>
    `

    contenedorCarrito.appendChild(row)
})
}



function limpiarHTML(){


   while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
   }
}




const favoritos = document.querySelector('#favoritos');
const contenedorFavoritos = document.querySelector('#lista-favoritos tbody');
const vaciarFavoritosBtn = document.querySelector ('#vaciar-favoritos');
const listaCursosFavoritos=document.querySelector('#grilla');
let articulosFavoritos =[];


cargarEventListenersFavoritos();

function cargarEventListenersFavoritos(){

    listaCursosFavoritos.addEventListener('click', agregarCursoFavoritos);



    favoritos.addEventListener('click', eliminarCursoFavoritos)


    vaciarFavoritosBtn.addEventListener('click', () =>{
        articulosFavoritos =[]; 
        limpiarHTMLFavoritos(); 
    })
}


function agregarCursoFavoritos(e){
    e.preventDefault()
    if(e.target.classList.contains('agregar-favorito')){
        const cursoSeleccionadoFavorito = e.target.parentElement.parentElement;

leerDatosCursoFavoritos(cursoSeleccionadoFavorito);
    }
 
}


function eliminarCursoFavoritos (e){
if(e.target.classList.contains('borrar-curso')){
    const cursoIdFavorito = e.target.getAttribute('data-id')
    
    articulosFavoritos = articulosFavoritos.filter( curso => curso.id !== cursoIdFavorito);
favoritosHTML(); 
}   

}



function leerDatosCursoFavoritos(curso){
const infoCursoFavorito = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h5').textContent,
    precio: curso.querySelector('.precio').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}

const existeFavorito = articulosFavoritos.some(curso => curso.id === infoCursoFavorito.id)
if (existeFavorito){
    const cursos = articulosFavoritos.map( curso => {
    if (curso.id === infoCurso.id){
        return curso; 
    }else{
        return curso;
    }

    });
    articulosFavoritos = [...cursos];
}else{

    articulosFavoritos = [...articulosFavoritos, infoCursoFavorito]
}


console.log(articulosFavoritos);
favoritosHTML();
}



function favoritosHTML(){
 
    limpiarHTMLFavoritos()

    
    
    
    articulosFavoritos.forEach(curso => {
     console.log(curso)
     const { imagen, titulo, precio, cantidad, id } = curso   
     const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen}" width="100" class="rounded border border-primary"></td>
        <td class="carritoFavorito">${titulo}</td>
        <td>${precio}</td>
        <td>
        <a href="#" class="borrar-curso bg-danger border-dark  text-white ms-1" data-id="${id}"> X </a>
        </td>
    `
    
    contenedorFavoritos.appendChild(row)
})
}



function limpiarHTMLFavoritos(){

   while(contenedorFavoritos.firstChild){
    contenedorFavoritos.removeChild(contenedorFavoritos.firstChild)
   }
}



const cursoBuscado = JSON.parse(localStorage.getItem('listaCursosKey')) || [];

const buscador = document.querySelector('#buscador');
const busquedaEstado = document.querySelector('#grilla') 
let busquedaEstadoPrevio = busquedaEstado.innerHTML
const busquedaPorTexto = busquedaEstado 



const filtrar = (e)=>{

busquedaPorTexto.innerHTML = '';
const texto = buscador.value.toLowerCase ();
if(texto!==""){
for(let curso of cursoBuscado){
    let nombre = curso.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
        busquedaPorTexto.innerHTML += `
        <h2> ¡Tenemos un curso para vos! </h2>
        <aside class="col-12 col-md-4 col-lg-3 mb-3">
        <div class="card" >
        <img src="${curso.imagen}"  alt="${curso.nombre}">
        <div class="card-body">
        <h6 class="tituloGrilla"> Categoría: ${curso.categoria}
        <h5 class="card-title tituloGrilla">${curso.nombre}</h5>
          <h6 class="precio">Precio: $${curso.precio} </h6> 
          <p> ${curso.descripcion}</p>
          <a href="#" class="btn btn-success button input agregar-carrito my-2" data-id="${curso.codigo}">&#128722</a>  
          <a href="#" class="btn btn-success button input agregar-favorito my-2" data-id="${curso.codigo}">&#9733;</a>   
          <button class="btn btn-primary" onclick="detalleCurso('${curso.codigo}')">Ver detalle</button>
                     
          </div>
        </div>
      </aside>
    
    
    
         `
    }
}
if(busquedaPorTexto.innerHTML === ''){
    busquedaPorTexto.innerHTML += `<p><b>Lo sentimos, no hemos encontrado resultados para</b></p>
    <p class="fs-5"><i><b> "${texto}"</b></i><p>
    <p class="my-0"> <b> Modifica tu búsqueda. Aquí tienes algunas ideas: </b> <p>
    <ul>
    <li>Asegúrate de que todas las palabras están escritas correctamente.</li>
    <li>Prueba con términos de búsqueda diferentes.</li>
    <li>Prueba con términos de búsqueda más generales.</li>
    </ul>
     `
}
}else{

busquedaPorTexto.innerHTML = busquedaEstadoPrevio
}
}


buscador.addEventListener('keyup', filtrar)


filtrar();



const listaCursosCategorias = JSON.parse(localStorage.getItem('listaCursosKey')) || [];

const buscadorCategorias = document.querySelector('#categorias');
const botonCategorias = document.querySelector('#botonCategorias');
let estado = document.querySelector('#grilla')
let estadoPrevio = estado.innerHTML
let resultado = estado

const filtrarCategorias = (e)=>{
  e.preventDefault()
resultado.innerHTML = '';
const textoCategorias = buscadorCategorias.value;
if(textoCategorias!==""){
for(let cursoCategoria of listaCursosCategorias){
    let Categoria = cursoCategoria.categoria;
    if(Categoria.indexOf(textoCategorias) !== -1){
         resultado.innerHTML += `
        <aside class="col-12 col-md-4 col-lg-3 mb-3">
        <div class="card" >
        <img src="${cursoCategoria.imagen}"  alt="${cursoCategoria.nombre}">
        <div class="card-body">
        <h6 class="tituloGrilla"> Categoría: ${cursoCategoria.categoria}
        <h5 class="card-title tituloGrilla">${cursoCategoria.nombre}</h5>
          <h6 class="precio">Precio: $${cursoCategoria.precio} </h6> 
          <p> ${cursoCategoria.descripcion}</p> 
          <a href="#" class="btn btn-success button input agregar-carrito my-2" data-id="${cursoCategoria.codigo}">&#128722</a>  
          <a href="#" class="btn btn-success button input agregar-favorito my-2" data-id="${cursoCategoria.codigo}">&#9733;</a>
         <button class="btn btn-primary" onclick="detalleCurso('${cursoCategoria.codigo}')">Ver detalle</button>
                     
          </div>
        </div>
        
      </aside>
    
    
    
         `
    }
}
if(resultado.innerHTML === ''){
    resultado.innerHTML += `<p><b>Lo sentimos, no tenemos la categoría</b></p>
    <p class="fs-5"><i><b> "${textoCategorias}"</b></i><p>
    <p class="my-0"> <b> Modifica tu búsqueda. Aquí tienes algunas ideas: </b> <p>
    <ul>
    <li>Asegúrate de que todas las palabras están escritas correctamente.</li>
    <li>Prueba con términos de búsqueda diferentes.</li>
    <li>Prueba con términos de búsqueda más generales.</li>
    </ul>
     `
}
}else{
    resultado.innerHTML = estadoPrevio;
}
}


botonCategorias.addEventListener('click', filtrarCategorias)
buscadorCategorias.addEventListener('keyup', filtrarCategorias)


filtrarCategorias();

