
console.log(window.location.search)

const parametroCodigo = new URLSearchParams(window.location.search)
console.log(parametroCodigo.get('codigo'))


let listaCursos = JSON.parse(localStorage.getItem('listaCursosKey'))
let cursoBuscado = listaCursos.find((curso)=>{return curso.codigo === parametroCodigo.get('codigo')})
console.log(cursoBuscado)

let detalle = document.querySelector('#seccionDetalle')
 detalle.innerHTML=`
<div class="card mb-3">
<div class="row">
  
    <div class="card-body col-12 col-md-12 col-lg-12 text-center">
      <div>
        <h5>${cursoBuscado.codigo}</h5>
        <h3 class="card-title text-center">${cursoBuscado.nombre}</h3>
        <h4>$${cursoBuscado.precio}</h4>
      </div>
      <div class="col-12 col-md-12 col-lg-12 text-center">
        <img
        src="${cursoBuscado.imagen}"
          class="w-50"
          alt="${cursoBuscado.categoria}"
        />
      </div>
      <div class="my-4 col-12 col-md-12 col-lg-12">
        <p class="card-text">
          Categoria:
          <span class="badge rounded-pill bg-dark">${cursoBuscado.categoria}</span>
        </p>
      </div>
      <div class=" col-12 col-md-12 col-lg-12 ">
        <p class="card-text">
         ${cursoBuscado.descripcion}
        </p>
      </div>
    </div>
  
</div>
</div>` 