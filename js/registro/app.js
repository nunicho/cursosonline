import Persona from "./classUsuario.js";

let listaPersonas = JSON.parse(localStorage.getItem('listaPersonasKey')) || []






































function guardarDatosEnLS(){
    localStorage.setItem("listaPersonasKey", JSON.stringify(listaPersonas))
}
guardarDatosEnLS()