$(document).ready(function() {
    setHeader();
    setFooter();
    setLogo();
    setReserva();
    setMenu();
    setInstagram();
    $(".fav2").hide();



});

$(document).on("scroll", function() {
    if ($(document).scrollTop() > 200) {
        $("header").addClass("small");
        $(".header").css("background-color", "white");
        $(".header a").css("color", "black");
        $(".logotit").hide();
        $(".fav2").show();

    } else {
        $("header").removeClass("small");
        $(".header").css("background-color", "white");
        $(".header a").css("color", "black");
        $(".logotit").show();
        $(".fav2").hide();

    }
});



function stay() {
    $(".div2").show();
}

function servicio() {
    $(".div3").show();
}

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function setMenu() {
    var codeMenu = '';
    codeMenu += '<div id="myNav" class="overlay">';
    codeMenu += '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
    codeMenu += '<div class="overlay-content">';
    codeMenu += '<a href="stay.html">Stay</a>';
    codeMenu += '<a href="#">Servicios</a>';
    codeMenu += '<a href="#">Nosotros</a>';
    codeMenu += '<a href="contacto.html">Contacto</a>';
    codeMenu += '</div>';
    codeMenu += '</div>';


    try {
        document.getElementsByTagName('menu')[0].innerHTML = codeMenu;
    } catch (error) {
        msg = "Fallo, no se ha encontrado menu." + error;
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
    codeReserva += '                        <option selected value="0">Adultos</option>';
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
    codeLogo += '   <a href="index.html#"><img src="../img/fav2.png" alt="Home"></a>';
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
    codeHeader += '     <span style="font-size:14px;cursor:pointer;letter-spacing: 2px; font-weight:bold" onclick="openNav()">&#9776; MENU</span>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-8 col-sm-8 nav-col-logo">';
    codeHeader += '                 <a class="nav-a logotit" href="index.html#"><img class="logotit" src="../img/hey.png" alt="logo"></a>';
    codeHeader += ' <a class="nav-a fav2" href="index.html#"><img class="fav2" src="../img/favicon.png" alt="logo"></a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col-otro">';
    codeHeader += '       <span style="font-size:14px;cursor:pointer;letter-spacing: 2px; color: black; font-weight:bold" onclick="openBook()">BOOK NOW</span>';
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
    codeFooter += '<p>Euskadi Plaza, 5, 48009 Bilbo, Bizkaia, España, W4 5PY</p>';
    codeFooter += '</div>';
    codeFooter += '</div>';
    codeFooter += '<div class="row foot-row  info">';
    codeFooter += '<div class="col-md-6 col-sm-6 foot-col">';
    codeFooter += '<p>T <span><a href="tel:555555555">+ 555 555 555</a></span>';
    codeFooter += '</div>';
    codeFooter += '<div class="col-md-6 col-sm-6 foot-col">';
    codeFooter += '<p>E <span><a href="mailto:aaa@gmail.com">aaa@gmail.com</a></span></p>';
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
var slideIndex3 = 1;
showDivs3(slideIndex3);

function plusDivs3(m) {
    showDivs3(slideIndex3 += m);
}

function currentDiv3(m) {
    showDivs3(slideIndex3 = m);
}

function showDivs3(m) {
    var i;
    var x = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("demo");
    if (m > x.length) { slideIndex3 = 1 }
    if (m < 1) { slideIndex3 = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex3 - 1].style.display = "block";
    dots[slideIndex3 - 1].className += " w3-white";
}

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
    codeInstagram += '<div id="servicio" class="container-fluid div3 animated fadeIn fast">';
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