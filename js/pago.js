$(document).ready(function() {

    setMenu();
    setBook();
    formRoom();
});

function cardFormValidate() {

    var regName = /^[a-z ,.'-]+$/i;
    var regMonth = /^01|02|03|04|05|06|07|08|09|10|11|12$/;
    var regYear = /^17|18|19|20|21|22|23|24|25|26|27|28|29|30|31$/;
    var regCVV = /^[0-9]{3,3}$/;

    var ncard = $("#card_number").val();

    if (!(/^[0-9]{16}$/).test(ncard)) {
        alert("Número de tarjeta no valido")

        return false;
    }

    var mes = $("#exp_m").val();
    if (!(regMonth.test(mes))) {
        alert("El mes no es valido")
        return false;
    }
    var ano = $("#exp_y").val();
    if (!(regYear.test(ano))) {
        alert("El año no es valido")
        return false;
    }
    var cvv = $("#cvv").val();
    if (!(regCVV.test(cvv))) {
        alert("El CVV no es correcto")
        return false;
    }
    var name = $("#card_name").val();
    if (!(regName.test(name))) {
        alert("Escribe un nombre valido")
        return false;
    }
    return true;
}