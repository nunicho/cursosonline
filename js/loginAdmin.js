let ponerBoton = document.querySelector("#ponerBoton")

let claveNombre = admin
let usuarioNombre = admin


function Ir(){
    let usuario = document.querySelector("#usuario")
let contra = document.querySelector("#contra")
const usuario2 = usuario.value.toLowerCase ();
const contra2 = contra.value.toLowerCase ();
if (usuario2==='admin' && contra2==='admin'){ 
 ponerBoton.innerHTML = `<a class="btn btn-secondary text-white w-100 mt-4 fw-semibold shadow-sm " href="administrador.html" type="button">Entrar</a>`

} else{
    Swal.fire('Colocó un usuario y/o contraseña incorrectos!'); 
}

}
