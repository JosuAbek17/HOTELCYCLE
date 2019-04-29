$(document).ready(function() {
    setReserva();
});

function setReserva() {
    var codeReserva = '';
    codeReserva += '<div class="row row-stay-form">';
    codeReserva += '      <div class="col-md-12 col-sm-12 col-lg-12 col-stay-form">';
    codeReserva += '<form class="form-inline" action="#" method="post">';
    codeReserva += '<div class="form-group mx-sm-3">';
    codeReserva += '<label for="inputCheckIn" class="sr-only">Check-In</label>';
    codeReserva += '<input type="date" class="form-control" id="checkin" placeholder="Check-In" value"Chek-In">';
    codeReserva += '</div>';
    codeReserva += '<div class="form-group mx-sm-3">';
    codeReserva += '<label for="inputCheckOut" class="sr-only">Check-Out</label>';
    codeReserva += '<input type="date" class="form-control" id="checkout" placeholder="Check-Out">';
    codeReserva += '</div>';
    codeReserva += '<div class="form-group mx-sm-3">';
    codeReserva += '<select class="form-control">';
    codeReserva += '                        <option selected value="0">Personas</option>';
    codeReserva += '                        <option value="1">1</option>';
    codeReserva += '                        <option value="2">2</option>';
    codeReserva += '                        <option value="3">4</option>';
    codeReserva += '                        <option value="1">5</option>';
    codeReserva += '                        <option value="2">6</option>';
    codeReserva += '                        <option value="3">7</option>';
    codeReserva += '                        <option value="1">8</option>';
    codeReserva += '                        <option value="2">9</option>';
    codeReserva += '                        <option value="3">10</option>';
    codeReserva += '                    </select>';
    codeReserva += '</div>';
    codeReserva += '<div class="form-group mx-sm-3">';
    codeReserva += '    <select class="form-control">';
    codeReserva += '                        <option selected value="0">Niños</option>';
    codeReserva += '                        <option value="1">1</option>';
    codeReserva += '                        <option value="2">2</option>';
    codeReserva += '                        <option value="3">4</option>';
    codeReserva += '                        <option value="1">5</option>';
    codeReserva += '                        <option value="2">6</option>';
    codeReserva += '                        <option value="3">7</option>';
    codeReserva += '                        <option value="1">8</option>';
    codeReserva += '                        <option value="2">9</option>';
    codeReserva += '                        <option value="3">10</option>';
    codeReserva += '                    </select>';
    codeReserva += '</div>';
    codeReserva += '<div class="form-group mx-sm-3">';
    codeReserva += '    <select class="form-control">';
    codeReserva += '                        <option selected value="0">Habitaciones</option>';
    codeReserva += '                        <option value="1">1</option>';
    codeReserva += '                        <option value="2">2</option>';
    codeReserva += '                        <option value="3">4</option>';
    codeReserva += '                        <option value="1">5</option>';
    codeReserva += '                        <option value="2">6</option>';
    codeReserva += '                        <option value="3">7</option>';
    codeReserva += '                        <option value="1">8</option>';
    codeReserva += '                        <option value="2">9</option>';
    codeReserva += '                        <option value="3">10</option>';
    codeReserva += '            </select>';
    codeReserva += '</div>';

    codeReserva += '<button type="submit" class="btn btn-default">COMPROBAR DISPONIBILIDAD</button>';

    codeReserva += '</form>';
    codeReserva += '</div>';
    codeReserva += '</div>';

    try {
        document.getElementsByTagName('reserva')[0].innerHTML = codeReserva;
    } catch (error) {
        msg = "Fallo, no se ha encontrado reserva." + error;
        log(msg);
    }

}