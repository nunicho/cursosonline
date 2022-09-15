

function Ir(){
    if (document.form.login.value=='admin' && document.form.password.value=='admin' ){ 
        document.form.submit(); 
    } 
    else{ 
        Swal.fire('Colocó un usuario y/o contraseña incorrectos!'); 
    } 
    }  