$(document).ready(function() {
    setComida();
    formRoom();
});

function openTable() {
    openBook();
    formTable();
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}



function setComida() {
    var codeComida = '';
    codeComida += '<div class="row row-cont">';
    codeComida += '      <div class="col-md-12 col-sm-12 col-lg-12 col-cont">';
    codeComida += '<form class="form-inline" action="reservaR.html" method="post" onsubmit="return validarTable2()">';
    codeComida += '<div class="form-group">';
    codeComida += '<select id="personast2" class="form-control" required>';
    codeComida += '                        <option selected value="0">Personas</option>';
    codeComida += '                        <option value="1">1</option>';
    codeComida += '                        <option value="2">2</option>';
    codeComida += '                        <option value="3">4</option>';
    codeComida += '                        <option value="4">5</option>';
    codeComida += '                        <option value="5">6</option>';
    codeComida += '                        <option value="6">7</option>';
    codeComida += '                        <option value="7">8</option>';
    codeComida += '                        <option value="8">9</option>';
    codeComida += '                        <option value="9">10</option>';
    codeComida += '                    </select>';
    codeComida += '</div>';
    codeComida += '<div class="form-group">';
    codeComida += '<label for="inputCheckIn" class="sr-only">Check-In</label>';
    codeComida += '<input type="date" class="form-control" id="checkint2" placeholder="Check-In" value"Chek-In" required>';
    codeComida += '</div>';
    codeComida += '<div class="form-group">';
    codeComida += '<select id="tablehour2" class="form-control" required>';
    codeComida += '                        <option selected value="0">Hora</option>';
    codeComida += '                        <option value="1">14:00</option>';
    codeComida += '                        <option value="2">14:15</option>';
    codeComida += '                        <option value="3">14:30</option>';
    codeComida += '                        <option value="4">14:45</option>';
    codeComida += '                        <option value="5">15:00</option>';
    codeComida += '                        <option value="6">15:15</option>';
    codeComida += '                        <option value="7">15:30</option>';
    codeComida += '                        <option value="8">15:45</option>';
    codeComida += '                        <option value="9">16:00</option>';
    codeComida += '                        <option value="10">16:15</option>';
    codeComida += '                        <option value="11">16:30</option>';
    codeComida += '                        <option value="12">16:45</option>';
    codeComida += '                        <option value="13">17:00</option>';
    codeComida += '                        <option value="14">17:15</option>';
    codeComida += '                        <option value="15">17:30</option>';
    codeComida += '                        <option value="16">17:45</option>';
    codeComida += '                        <option value="17">18:00</option>';
    codeComida += '                        <option value="18">18:15</option>';
    codeComida += '                        <option value="18">18:30</option>';
    codeComida += '                        <option value="20">18:45</option>';
    codeComida += '                        <option value="21">19:00</option>';
    codeComida += '                        <option value="22">19:15</option>';
    codeComida += '                        <option value="23">19:30</option>';
    codeComida += '                        <option value="24">19:45</option>';
    codeComida += '                        <option value="25">20:00</option>';
    codeComida += '                        <option value="26">20:15</option>';
    codeComida += '                        <option value="27">20:30</option>';
    codeComida += '                        <option value="28">20:45</option>';
    codeComida += '                        <option value="29">21:00</option>';
    codeComida += '                        <option value="30">21:15</option>';
    codeComida += '                        <option value="31">21:30</option>';
    codeComida += '                        <option value="32">21:45</option>';
    codeComida += '                        <option value="33">22:00</option>';
    codeComida += '                        <option value="34">22:15</option>';
    codeComida += '                        <option value="35">22:30</option>';
    codeComida += '                        <option value="36">22:45</option>';
    codeComida += '                        <option value="37">23:00</option>';
    codeComida += '                        <option value="38">23:15</option>';
    codeComida += '                        <option value="39">23:30</option>';
    codeComida += '                    </select>';
    codeComida += '</div>';

    codeComida += '<button type="submit" class="btn btn-default">RESERVA MESA</button>';
    codeComida += '</form>';
    codeComida += '</div>';
    codeComida += '</div>';

    try {
        document.getElementsByTagName('comida')[0].innerHTML = codeComida;
    } catch (error) {
        msg = "Fallo, no se ha encontrado contacto: " + error;
        log(msg)
    }
};