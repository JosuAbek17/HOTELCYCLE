$(document).ready(function() {
    setHeader();
    setFooter();
    setLogo();
    setMenu();
    setBook();
    setInstagram();
    setReserva();
    formRoom();




});


$(document).on("scroll", function() {
    if ($(document).scrollTop() > 200) {
        $("header").addClass("small");
        $(".header").css("background-color", "#10253d");
        $(".header a").css("color", "#faecd3");
        $(".logotit").hide();
        $(".fav2").show();

    } else {
        $("header").removeClass("small");
        $(".header").css("background-color", "#10253d");
        $(".header a").css("color", "#faecd3");
        $(".logotit").show();
        $(".fav2").hide();

    }
});


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function openBook() {
    document.getElementById("myBook").style.width = "100%";
}

function closeBook() {
    document.getElementById("myBook").style.width = "0%";
}

function setMenu() {
    var codeMenu = '';
    codeMenu += '<div id="myNav" class="overlay">';
    codeMenu += '<div class="row row-book">';
    codeMenu += '    <div class="col-md-8 offset-md-2 col-book">';
    codeMenu += '        <img src="img/hey-claro.png" alt="#">';
    codeMenu += '    </div>';
    codeMenu += '    <div class="col-md-2 col-book">';
    codeMenu += '        <span style="font-size:14px;cursor:pointer;letter-spacing: 2px; color: white; " onclick="closeNav()">CLOSE</span>';
    codeMenu += '    </div>';
    codeMenu += '</div>';
    codeMenu += '<div class="overlay-content">';
    codeMenu += '<div class="row row-menu">';
    codeMenu += '    <div class="col-md-2 offset-md-1"><a href="stay.html">Stay</a><p class="row-menu-sub" href="#">Standar</p><p class="row-menu-sub" href="#">Deluxe</p></div>';
    codeMenu += '    <div class="col-md-2 "><a href="f&d.html">Eat & Drink</a><p class="row-menu-sub" href="#">Standar</p><p class="row-menu-sub" href="#">Deluxe</p></div>';
    codeMenu += '    <div class="col-md-2 offset-md-1"><a href="servicio.html">Servicios</a><p class="row-menu-sub" href="#">Activity</p><p class="row-menu-sub" href="#">Shop</p><p class="row-menu-sub" href="#">Aqua Cyclce</p><p class="row-menu-sub" href="#">Gym</p></div>';
    codeMenu += '    <div class="col-md-2 offset-md-2 col-menu"><p class="menu-cont" href="nosotros.html">Phone</p><p class="row-menu-sub2" href="#">Deluxe</p><p class="menu-cont" href="nosotros.html">Adress</p><p class="row-menu-sub2" href="#">Muelle de Arriluze, 20, 48992 Getxo, Bizkaia</p></div>';
    // codeMenu += '    <div class="col-md-2 col-menu"><a href="contacto.html">Contacto</a></div>';
    codeMenu += '   <div class="col-md-2 offset-md-1"><a href="nosotros.html">Nosotros</a></div>';
    codeMenu += '   <div class="col-md-2"><a href="contacto.html">Contacto</a></div>';
    codeMenu += '</div>';
    codeMenu += '</div>';
    codeMenu += '</div>';


    try {
        document.getElementsByTagName('menu')[0].innerHTML = codeMenu;
    } catch (error) {
        msg = "Fallo, no se ha encontrado menu." + error;
        log(msg);
    }
}

function formRoom() {
    $(".row-table-form").hide();
    $(".row-book-form").show();
    $(".pb").css("color", "#ff0458");
    $(".pt").css("color", "white");
    $(".st").hide();
    $(".sb").show();
}

function formTable() {
    $(".row-table-form").show();
    $(".row-book-form").hide();
    $(".pt").css("color", "#ff0458");
    $(".pb").css("color", "white");
    $(".st").show();
    $(".sb").hide();
}

function setBook() {
    var codeBook = '';
    codeBook += '<div id="myBook" class="overlay2">';
    codeBook += '<div class="row row-book">';
    codeBook += '    <div class="col-md-8 offset-md-2 col-book">';
    codeBook += '        <a class="col-book-logo" href="index.html"><img src="img/hey-claro.png" alt="#"></a>';
    codeBook += '    </div>';
    codeBook += '    <div class="col-md-2 col-book">';
    codeBook += '        <span style="font-size:14px;cursor:pointer;letter-spacing: 2px; color: white; " onclick="closeBook()">CLOSE</span>';
    codeBook += '    </div>';
    codeBook += '</div>';
    codeBook += '<div class="overlay-content2">';
    codeBook += '<div class="row row-book2">';
    codeBook += '    <div class="col-md-6 col-book2 animated fadeIn fast">';
    codeBook += '        <p class="pb" onclick="formRoom()"><span class="sb">-</span> Book a Room</p>';
    codeBook += '        <p class="pt" onclick="formTable()"><span class="st">-</span> Book a Table</p>';
    codeBook += '    </div>';
    codeBook += '    <div class="col-md-6">';
    codeBook += '        <div class="row row-book-form animated fadeIn fast">';
    codeBook += '            <div class="col-md-12 col-sm-12 col-lg-12 col-book-form">';
    codeBook += '                <form action="#" method="post">';
    codeBook += '                    <div class="form-group mx-sm-3">';
    codeBook += '                        <label for="inputCheckIn" class="sr-only">Check-In</label>';
    codeBook += '                        <input type="date" class="form-control" id="checkin" placeholder="Check-In" value="Chek-In">';
    codeBook += '                    </div>';
    codeBook += '                    <div class="form-group mx-sm-3">';
    codeBook += '                        <label for="inputCheckOut" class="sr-only">Check-Out</label>';
    codeBook += '                        <input type="date" class="form-control" id="checkout" placeholder="Check-Out">';
    codeBook += '                    </div>';
    codeBook += '                    <div class="form-group mx-sm-3">';
    codeBook += '                        <select class="form-control">';
    codeBook += '                                <option selected value="0">Personas</option>';
    codeBook += '                                <option value="1">1</option>';
    codeBook += '                                <option value="2">2</option>';
    codeBook += '                                <option value="3">4</option>';
    codeBook += '                                <option value="1">5</option>';
    codeBook += '                                <option value="2">6</option>';
    codeBook += '                                <option value="3">7</option>';
    codeBook += '                                <option value="1">8</option>';
    codeBook += '                                <option value="2">9</option>';
    codeBook += '                                <option value="3">10</option>';
    codeBook += '                            </select>';
    codeBook += '                    </div>';
    codeBook += '                    <div class="form-group mx-sm-3">';
    codeBook += '                        <select class="form-control">';
    codeBook += '                                <option selected value="0">Niños</option>';
    codeBook += '                                <option value="1">1</option>';
    codeBook += '                                <option value="2">2</option>';
    codeBook += '                                <option value="3">4</option>';
    codeBook += '                                <option value="1">5</option>';
    codeBook += '                                <option value="2">6</option>';
    codeBook += '                                <option value="3">7</option>';
    codeBook += '                                <option value="1">8</option>';
    codeBook += '                                <option value="2">9</option>';
    codeBook += '                                <option value="3">10</option>';
    codeBook += '                            </select>';
    codeBook += '                    </div>';
    codeBook += '                    <div class="form-group mx-sm-3">';
    codeBook += '                        <select class="form-control">';
    codeBook += '                                <option selected value="0">Habitaciones</option>';
    codeBook += '                                <option value="1">1</option>';
    codeBook += '                                <option value="2">2</option>';
    codeBook += '                                <option value="3">4</option>';
    codeBook += '                                <option value="1">5</option>';
    codeBook += '                                <option value="2">6</option>';
    codeBook += '                                <option value="3">7</option>';
    codeBook += '                                <option value="1">8</option>';
    codeBook += '                                <option value="2">9</option>';
    codeBook += '                                <option value="3">10</option>';
    codeBook += '                        </select>';
    codeBook += '                    </div>';
    codeBook += '                    <button type="submit" class="btn btn-default">COMPROBAR DISPONIBILIDAD</button>';
    codeBook += '                </form>';
    codeBook += '            </div>';
    codeBook += '        </div>';
    codeBook += '<div class="row row-table-form animated fadeIn fast">';
    codeBook += '      <div class="col-md-12 col-sm-12 col-lg-12 col-table-form">';
    codeBook += '<form action="#" method="post">';
    codeBook += '<div class="form-group">';
    codeBook += '<select class="form-control">';
    codeBook += '                        <option selected value="0">Personas</option>';
    codeBook += '                        <option value="1">1</option>';
    codeBook += '                        <option value="2">2</option>';
    codeBook += '                        <option value="3">4</option>';
    codeBook += '                        <option value="4">5</option>';
    codeBook += '                        <option value="5">6</option>';
    codeBook += '                        <option value="6">7</option>';
    codeBook += '                        <option value="7">8</option>';
    codeBook += '                        <option value="8">9</option>';
    codeBook += '                        <option value="9">10</option>';
    codeBook += '                    </select>';
    codeBook += '</div>';
    codeBook += '<div class="form-group">';
    codeBook += '<label for="inputCheckIn" class="sr-only">Check-In</label>';
    codeBook += '<input type="date" class="form-control" id="checkin" placeholder="Check-In" value"Chek-In">';
    codeBook += '</div>';
    codeBook += '<div class="form-group">';
    codeBook += '<select class="form-control">';
    codeBook += '                        <option selected value="0">Hora</option>';
    codeBook += '                        <option value="1">14:00</option>';
    codeBook += '                        <option value="2">14:15</option>';
    codeBook += '                        <option value="3">14:30</option>';
    codeBook += '                        <option value="4">14:45</option>';
    codeBook += '                        <option value="5">15:00</option>';
    codeBook += '                        <option value="6">15:15</option>';
    codeBook += '                        <option value="7">15:30</option>';
    codeBook += '                        <option value="8">15:45</option>';
    codeBook += '                        <option value="9">16:00</option>';
    codeBook += '                        <option value="10">16:15</option>';
    codeBook += '                        <option value="11">16:30</option>';
    codeBook += '                        <option value="12">16:45</option>';
    codeBook += '                        <option value="13">17:00</option>';
    codeBook += '                        <option value="14">17:15</option>';
    codeBook += '                        <option value="15">17:30</option>';
    codeBook += '                        <option value="16">17:45</option>';
    codeBook += '                        <option value="17">18:00</option>';
    codeBook += '                        <option value="18">18:15</option>';
    codeBook += '                        <option value="18">18:30</option>';
    codeBook += '                        <option value="20">18:45</option>';
    codeBook += '                        <option value="21">19:00</option>';
    codeBook += '                        <option value="22">19:15</option>';
    codeBook += '                        <option value="23">19:30</option>';
    codeBook += '                        <option value="24">19:45</option>';
    codeBook += '                        <option value="25">20:00</option>';
    codeBook += '                        <option value="26">20:15</option>';
    codeBook += '                        <option value="27">20:30</option>';
    codeBook += '                        <option value="28">20:45</option>';
    codeBook += '                        <option value="29">21:00</option>';
    codeBook += '                        <option value="30">21:15</option>';
    codeBook += '                        <option value="31">21:30</option>';
    codeBook += '                        <option value="32">21:45</option>';
    codeBook += '                        <option value="33">22:00</option>';
    codeBook += '                        <option value="34">22:15</option>';
    codeBook += '                        <option value="35">22:30</option>';
    codeBook += '                        <option value="36">22:45</option>';
    codeBook += '                        <option value="37">23:00</option>';
    codeBook += '                        <option value="38">23:15</option>';
    codeBook += '                        <option value="39">23:30</option>';
    codeBook += '                    </select>';
    codeBook += '</div>';

    codeBook += '<button type="submit" class="btn btn-default">RESERVA MESA</button>';
    codeBook += '</form>';
    codeBook += '</div>';
    codeBook += '</div>';
    codeBook += '    </div>';
    codeBook += '   </div>';
    codeBook += '</div>';
    codeBook += '</div>';


    try {
        document.getElementsByTagName('book')[0].innerHTML = codeBook;
    } catch (error) {
        msg = "Fallo, no se ha encontrado book." + error;
        log(msg);
    }
}

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

function setLogo() {
    var codeLogo = '';
    codeLogo += ' <div class="favicon">';
    codeLogo += '   <a href="index.html"><img src="../img/fav2.png" alt="Home"></a>';
    codeLogo += ' </div>';

    try {
        document.getElementsByTagName('favicon')[0].innerHTML = codeLogo;
    } catch (error) {
        msg = "Fallo, no se ha encontrado favicon." + error;
        log(msg);
    }
}




function setHeader() {

    var codeHeader = '';
    codeHeader += '    <div class="row nav-row">';
    codeHeader += ' <nav class="navbar">';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col-menu">';
    codeHeader += '     <span style="color:white;font-size:14px;cursor:pointer;letter-spacing: 2px;" onclick="openNav()">&#9776; MENU</span>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-8 col-sm-8 nav-col-logo">';
    codeHeader += '                 <a class="nav-a logotit" href="index.html"><img class="logotit" src="../img/hey-claro.png" alt="logo"></a>';
    codeHeader += ' <a class="nav-a fav2" href="index.html#"><img class="fav2" src="../img/fav2.png" alt="logo"></a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col-otro">';
    codeHeader += '       <span style="color:white;font-size:14px;cursor:pointer;letter-spacing: 2px;" onclick="openBook()">BOOK NOW</span>';
    codeHeader += '    </div>';
    codeHeader += '</nav>';
    codeHeader += '    </div>';


    try {
        document.getElementsByTagName('header')[0].innerHTML = codeHeader;
    } catch (error) {
        msg = "Fallo, no se ha encontrado header: " + error;
        log(msg)
    }
}

function setFooter() {
    var codeFooter = '';
    codeFooter += '<div class="row foot-row">';
    codeFooter += '<div class="col-md-12 col-sm-12 foot-col">';
    codeFooter += '<p>Muelle de Arriluze, 20, 48992 Getxo, Bizkaia</p>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row  info">';
    codeFooter += '<div class="col-md-6 col-sm-6 foot-col">';
    codeFooter += '<p>T <span><a href="tel:#">+34 656 798 980</a></span>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-6 col-sm-6 foot-col">';
    codeFooter += '<p>E <span><a href="mailto:hotelcycle@gmail.com">hotelcycle@gmail.com</a></span></p>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row social">';
    codeFooter += '<div class="col-md-3 col-sm-3 foot-col">';
    codeFooter += '  <a href=""><i class="fa fa-twitter"></i></a>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-3 col-sm-3 foot-col">';
    codeFooter += '  <a href=""><i class="fa fa-facebook"></i></a>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-3 col-sm-3 foot-col">';
    codeFooter += '  <a href=""><i class="fa fa-youtube-play"></i></a>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-3 col-sm-3 foot-col">';
    codeFooter += '  <a href=""><i class="fa fa-instagram"></i></a>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row copy">';
    codeFooter += '<div class="col-md-12 col-sm-12 foot-col">';
    codeFooter += '<p>XXXXX 2019. ALL RIGHTS RESERVED</p>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row copy">';
    codeFooter += '<div class="col-md-12 col-sm-12 foot-col">';
    codeFooter += '<p>PRIVACY POLICY | TERMS AND CONDITIONS | COMPANY NO. 06552505</p>';
    codeFooter += '</div>';
    codeFooter += '</div>';


    try {
        document.getElementsByTagName('footer')[0].innerHTML = codeFooter;
    } catch (error) {
        msg = "Fallo, no se ha encontrado footer." + error;
        log(msg);
    }
}



// ROOM //
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

// FOOD & DRINK //
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(m) {
    showDivs2(slideIndex2 += m);
}

function currentDiv2(m) {
    showDivs2(slideIndex2 = m);
}

function showDivs2(m) {
    var i;
    var x = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("demo");
    if (m > x.length) { slideIndex2 = 1 }
    if (m < 1) { slideIndex2 = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " w3-white";
}

// SHOP //
// var slideIndex3 = 1;
// showDivs3(slideIndex3);

// function plusDivs3(m) {
//     showDivs3(slideIndex3 += m);
// }

// function currentDiv3(m) {
//     showDivs3(slideIndex3 = m);
// }

// function showDivs3(m) {
//     var i;
//     var x = document.getElementsByClassName("mySlides3");
//     var dots = document.getElementsByClassName("demo");
//     if (m > x.length) { slideIndex3 = 1 }
//     if (m < 1) { slideIndex3 = x.length }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" w3-white", "");
//     }
//     x[slideIndex3 - 1].style.display = "block";
//     dots[slideIndex3 - 1].className += " w3-white";
// }

// ACTIVITY //
var slideIndex4 = 1;
showDivs4(slideIndex4);

function plusDivs4(m) {
    showDivs4(slideIndex4 += m);
}

function currentDiv4(m) {
    showDivs4(slideIndex4 = m);
}

function showDivs4(m) {
    var i;
    var x = document.getElementsByClassName("mySlides4");
    var dots = document.getElementsByClassName("demo");
    if (m > x.length) { slideIndex4 = 1 }
    if (m < 1) { slideIndex4 = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex4 - 1].style.display = "block";
    dots[slideIndex4 - 1].className += " w3-white";
}

// INSTAGRAM //

function setInstagram() {

    var codeInstagram = '';
    codeInstagram += '<div class="container-fluid animated fadeIn fast">';
    codeInstagram += '<div class="row row-insta">';
    codeInstagram += '<div class="col-md-12 col-sm-12 col-lg-12 col-insta">';
    codeInstagram += '<p class="insta">INSTAGRAM <a href="#"><i class="fa fa-instagram"></i> @HotelCycle</a></p>';
    codeInstagram += '</div>';
    codeInstagram += '</div>';
    codeInstagram += '<div class="row row-insta-fotos">';
    codeInstagram += '<div class="col-md-3 col-sm-3 col-lg-3 col-insta-fotos">';
    codeInstagram += '<div class="ins insta1">';

    codeInstagram += '</div>';
    codeInstagram += '<div class="ins insta2">';

    codeInstagram += '</div>';

    codeInstagram += '</div>';
    codeInstagram += '<div class="col-md-3 col-sm-3 col-lg-3 col-insta-fotos alone">';
    codeInstagram += '<div class="ins insta3">';

    codeInstagram += '</div>';

    codeInstagram += '</div>';
    codeInstagram += '<div class="col-md-3 col-sm-3 col-lg-3 col-insta-fotos">';
    codeInstagram += '<div class="ins insta4">';

    codeInstagram += '</div>';
    codeInstagram += '<div class="ins insta5">';

    codeInstagram += '</div>';
    codeInstagram += '</div>';
    codeInstagram += '<div class="col-md-3 col-sm-3 col-lg-3 col-insta-fotos alone">';
    codeInstagram += '<div class="ins insta6">';

    codeInstagram += '</div>';
    codeInstagram += '</div>';
    codeInstagram += '</div>';
    codeInstagram += '</div>';

    try {
        document.getElementsByTagName('instagram')[0].innerHTML = codeInstagram;
    } catch (error) {
        msg = "Fallo, no se ha encontrado Instagram: " + error;
        log(msg)
    }
}