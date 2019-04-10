$(document).ready(function() {
    setHeader();
    setFooter();
    setLogo();
    $(".serv-2").hide();
    $(".serv-3").hide();
    $(".serv-4").hide();
    $(".serv-5").hide();
    $(".col-inicio").hide();
    $(".col-registro").hide();
    $(".fav2").hide();
});

function setHab() {
    $(".serv-1").show();
    $(".serv-2").hide();
    $(".serv-3").hide();
    $(".serv-4").hide();
    $(".serv-5").hide();
}

function setRest() {
    $(".serv-1").hide();
    $(".serv-2").show();
    $(".serv-3").hide();
    $(".serv-4").hide();
    $(".serv-5").hide();
}

function setBar() {
    $(".serv-1").hide();
    $(".serv-2").hide();
    $(".serv-3").show();
    $(".serv-4").hide();
    $(".serv-5").hide();
}

function setShop() {
    $(".serv-1").hide();
    $(".serv-2").hide();
    $(".serv-3").hide();
    $(".serv-4").show();
    $(".serv-5").hide();
}

function setAct() {
    $(".serv-1").hide();
    $(".serv-2").hide();
    $(".serv-3").hide();
    $(".serv-4").hide();
    $(".serv-5").show();
}
$(document).on("scroll", function() {
    if ($(document).scrollTop() > 200) {
        $("header").addClass("small");
        $(".header").css("background-color", "black");
        $(".header a").css("color", "#faecd3");
        $(".header span").css("color", "#faecd3");
        $(".fav2").show();
        $(".fav").hide();
    } else {
        $("header").removeClass("small");
        $(".header").css("background-color", "transparent");
        $(".header a").css("color", "white");
        $(".header span").css("color", "white");
        $(".fav2").hide();
        $(".fav").show();
    }
});

function about() {
    $(".div2").show();

}

function stay() {
    $(".div2").show();
}

function servicio() {
    $(".div3").show();
}

function shop() {
    $(".div4").show();
}


function contacto() {
    $(".contacto").show();
    $(".footer").show();

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
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col-img">';
    codeHeader += '<a class="nav-a fav" href="#">';
    codeHeader += ' <img class="fav" src="../img/logo.png" alt="Home">';
    codeHeader += '</a>';
    codeHeader += ' <a class="nav-a fav2" href="index.html#"><img class="fav2" src="../img/fav2.png" alt="logo"></a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-8 col-sm-8 nav-col-menu">';
    codeHeader += '                 <a class="nav-a" onclick="stay()" href="index.html#stay">Stay</a>';
    codeHeader += '                 <a class="nav-a" onclick="servicio()" href="index.html#servicio">Servicios</a>';
    codeHeader += '                 <a class="nav-a" onclick="about()" href="index.html#nosotros">Nosotros</a>';
    codeHeader += '                 <a class="nav-a" onclick="contacto()" href="index.html#contacto">Contacto</a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col-otro">';
    codeHeader += '         <a class="nav-a" href="#">ES</a>';
    codeHeader += '         <a class="nav-a" href="#">EN</a>';
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
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 4 seconds
}