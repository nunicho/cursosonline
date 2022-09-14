// let Personas = JSON.parse(localStorage.getItem("listaPersonasKey")) || [];

function Ir(){
    
    let password = JSON.parse(localStorage.getItem('contrasena'));
    let login =JSON.parse( localStorage.getItem('usuario'));

    if(document.form.password.value ==password && document.form.login.value == login){
        document.form.submit();
    }else{
        Swal.fire('Colocó un usuario y/o contraseña incorrectos!'); 
    }
}