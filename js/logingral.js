// opcion 1 entrando a localStorage

// function Ir(){
    
//     let password = JSON.parse(localStorage.getItem('contrasena'));
//     let login =JSON.parse( localStorage.getItem('usuario'));

//     if(document.form.password.value ==password && document.form.login.value == login){
//         document.form.submit();
//     }else{
//         Swal.fire('Colocó un usuario y/o contraseña incorrectos!'); 
//     }
// }

// opcion 2 sin entrar al localstorage para busar contraseña y usuario

function Ir(){
    if (document.form.login.value=='admin' && document.form.password.value=='admin' ){ 
        document.form.submit(); 
    } 
    else{ 
        Swal.fire('Colocó un usuario y/o contraseña incorrectos!'); 
    } 
    }  