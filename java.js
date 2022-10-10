function validar(){
    var form= document.form;
    var dni_regex = /^(\d{8})([A-Z])$/;
    var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phone_regex =  /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    var phone_regex2 =  /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;

    if(form.nombre.value == 0){
        alert("El nombre esta vacio");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    } else {
        console.log("nombre perfecto");
    }

    if(form.apellidos.value == 0){
        alert("Los apellidos estan vacios");
    } else {
        console.log("apellidos bien");
    }

    if(form.dni.value.match(dni_regex)){
        console.log("dni correcto");
    } else {
        alert("formato dni incorrecto");
    }

    if(form.correo.value.match(email_regex)){
        console.log("correo correcto");
    } else {
        alert("formato correo incorrecto");
    }

    if(form.telefono.value.match(phone_regex, phone_regex2)){
        console.log("telefono correcto");
    }else {
        alert("error en el telefono");
    }
    
    if(form.nickname.value !== 0){
        console.log("nickname correcto");
    }else {
        alert("Rellene su nombre de usuario");
    }

    if(form.fechanac.value !== 0){
        console.log("fecha de nacimiento correcta");
    }else {
        alert("Rellene su fecha de nacimiento");
    }
}