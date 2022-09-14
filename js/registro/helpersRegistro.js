export function cantidadCaracteres(input){
    if(input.value.trim().length >= 3 ){
        
        input.className = 'form-control is-valid';
        return true;
    }else{
        
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarContrasena(input){
    if( input.value.trim().length >= 3){
        console.log('dato valido');
        input.className = 'form-control is-valid';
        return true;
    }else{
        console.log('dato invalido');
        input.className = 'form-control is-invalid';
        return false;
    }
}