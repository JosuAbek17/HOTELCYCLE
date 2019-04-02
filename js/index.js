$(document).ready(function() {
    setHeader();
    setFooter();
    // $(".div2").hide();
    // $(".div3").hide();
    // $(".contacto").hide();
    // $(".footer").hide();
    $(".col-inicio").hide();
    $(".col-registro").hide();


    setMap();
})

function registro() {
    $(".div1").css("background-color", " rgba(0,0,0,0.7)");
    $(".col-inicio").hide();
    $(".col-registro").show();
    $(".login").hide();
    $(".registro").hide();

}

function login() {
    $(".div1").css("background-color", " rgba(0,0,0,0.7)");
    $(".col-inicio").show();
    $(".login").hide();
    $(".registro").hide();
    $(".col-registro").hide();
}

function about() {
    $(".div2").show();
    // $(".div1").hide();

    // $(".contacto").hide();
    // $(".footer").hide();
}

function stay() {
    $(".div3").show();
}

function comer() {
    $(".div4").show();
}

function shop() {
    $(".div5").show();
}

function volver() {
    $(".div1").css("background-color", "#3a7999");
    $(".col-inicio").hide();
    $(".col-registro").hide();
    $(".login").show();
    $(".registro").show();
}

function contacto() {
    // $(".div1").hide();
    // $(".div2").hide();
    $(".contacto").show();
    $(".footer").show();

}

function setHeader() {

    var codeHeader = '';
    codeHeader += '    <div class="row logo-row">';
    codeHeader += '    <div class="col-md-12 logo-col">';
    codeHeader += '    <a href="index.html#inicio"><img src="../img/logo.png" alt="#"></a>';
    codeHeader += '    </div>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="row nav-row">';
    codeHeader += '    <div class="col-md-2 col-sm-2 col-sm-offset-1 col-md-offset-1 nav-col">';
    codeHeader += '                 <a onclick="about()" href="index.html#nosotros">Nosotros</a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col">';
    codeHeader += '                 <a onclick="stay()" href="index.html#stay">Stay</a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col">';
    codeHeader += '                 <a onclick="comer()" href="index.html#comer">Come</a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col">';
    codeHeader += '                 <a onclick="shop()" href="index.html#shop">Tienda</a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col">';
    codeHeader += '                 <a onclick="contacto()" href="index.html#contacto">Contacto</a>';
    codeHeader += '    </div>';
    codeHeader += '    </div>';
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

var mapa;
var marcador;

function setMap() {

    var latitud = 43.2679701;
    var longitud = -2.9386427;
    mapa = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitud, lng: longitud },
        zoom: 15
    });
    marcador = new google.maps.Marker({
        position: { lat: latitud, lng: longitud },
        map: mapa,
        title: "HOTEL CYCLE"
    })
}