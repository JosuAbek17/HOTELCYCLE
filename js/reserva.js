$(document).ready(function() {
    formRoom();
});



function validar() {

    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
        'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'
    ];


    //Validar nombre
    var nombre = $("#nombre").val();
    if (nombre.length == 0) {
        alert("Tiene que escribir su nombre")
        document.form.nombre.focus()
        return false;
    }

    //Validar apellido
    var apellidos = $("#apellidos").val();
    if (apellidos.length == 0) {
        alert("Tiene que escribir sus apellidos")
        document.form.apellidos.focus()
        return false;
    }

    //Validar DNI; 8 numeros y 1 letra
    var dni = $("#dni").val();
    if (!(/^\d{8}[A-Z]$/.test(dni))) {
        alert("DNI no válido")
        document.form.dni.focus()
        return false;
    }
    //Validar DNI; caracter no valido
    if (dni.charAt(8) != letras[(dni.substring(0, 8)) % 23]) {
        alert("Letra no válida")
        document.form.dni.focus()
        return false;
    }


    //Validar email
    if ((regexp.test(document.form.email.value) == 0) || (document.form.email.value.length = 0)) {
        alert("Introduzca una dirección de email válida");
        document.form.email.focus();
        return false;
    }

    //Validar telefono
    if (!(/^\d{9}$/.test(document.form.tlf.value))) {
        alert("Número de teléfono no válido")
        document.form.tel.focus()
        return false;
    }
}