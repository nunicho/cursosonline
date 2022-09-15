export function cantidadCaracteres(input){
    if(input.value.trim().length >= 2 ){
        
        input.className = 'form-control is-valid';
        return true;
    }else{
        
        input.className = 'form-control is-invalid';
        return false;
    }
}


export function validarPrecio(input){
    let patron = /^[0-9]{1,4}$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}


export function validarCategoría(input){
    let patron = /^([\w]{4,12})$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarImagen (input){
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    if(patron.test(input.value)){
        input.className = 'form-control is-valid';
        return true;
    }else{
        input.className = 'form-control is-invalid';
        return false;
    }
}

export function validarDescripcion(input){
    if( input.value.trim().length >= 2){
        console.log('dato valido');
        input.className = 'form-control is-valid';
        return true;
    }else{
        console.log('dato invalido');
        input.className = 'form-control is-invalid';
        return false;
    }
}
