//función validar
function validar(){
    var dni_regex = /^(\d{8})([A-Z])$/;
    var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phone_regex =  /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    var phone_regex2 =  /^\+?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;
    //recogemos los datos gracias al DOM
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var dni = document.getElementById("dni").value;
    var iban = document.getElementById("iban").value;
    var nickname = document.getElementById("nickname").value;
    var fechanac = document.getElementById("fechanac").value;



    //validación nombre
    if(nombre == 0){
        alert("El nombre esta vacio");
        return false;
    } else {
        console.log("nombre perfecto");
    }
    //validación apellidos
    if(apellidos == 0){
        alert("Los apellidos estan vacios");
    } else {
        console.log("apellidos bien");
    }
    
    //validación dni
    if(dni.match(dni_regex)){
        console.log("dni correcto");
    } else {
        alert("formato dni incorrecto");
    }
    //validacion email
    if(email.match(email_regex)){
        console.log("correo correcto");
    } else {
        alert("formato correo incorrecto");
    }
    
    //validación movil
    if(telefono.match(phone_regex, phone_regex2)){
        console.log("telefono correcto");
    }else {
        alert("error en el telefono");
    }
    
    //validación nickname
    if(nickname == 0){
        alert("Rellene su nombre de usuario");
        return false;
        
    }else {
        console.log("nickname correcto");
    }


    //validación fecha nacimiento
    if(fechanac !== 0){
        console.log("fecha de nacimiento correcta");
    }else {
        alert("Rellene su fecha de nacimiento");
    }


    //validación IBAN
    if (!iban.match(/([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/g)) {
        console.log("iban no es valido");
    } else {
        alert("iban perfecto");
    }
    document.getElementById("form").addEventListener("click", function(event){
        event.preventDefault()
        return true;
      });
}

//función para vaciar los campos al darle al boton reiniciar.
function vaciar(){
    form = document.form;
    form.nombre.value = "";
    form.apellidos.value = "";
    form.correo.value = "";
    form.dni,value = "";
    form.iban.value = "";
    form.telefono.value = "";
    form.nickname.value = "";
    form.fechanac.value = "";
}

