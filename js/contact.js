$(document).ready(function() {
    setMap();
    setHeader();
    setContacto();

    setFooter();


    setLogo();

});
$(document).on("scroll", function() {
    if ($(document).scrollTop() > 200) {
        $("header").addClass("small");
        $(".header").css("background-color", "#10253d");
        $(".header a").css("color", "#faecd3");

    } else {
        $("header").removeClass("small");
        $(".header").css("background-color", "#10253d");
        $(".header a").css("color", "#faecd3");

    }
});

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
};

function setContacto() {
    var codeContact = '';
    codeContact += '<div class="row row-cont">';
    codeContact += '      <div class="col-md-12 col-sm-12 col-lg-12 col-cont">';
    codeContact += '<form class="form-inline" action="#" method="post">';
    codeContact += '<div class="form-group">';
    codeContact += '<input type="text" class="form-control" id="nombre" placeholder="Nombre">';
    codeContact += '</div>';
    codeContact += '<div class="form-group">';
    codeContact += '<input type="text" class="form-control" id="apellido" placeholder="Apellidos">';
    codeContact += '</div>';
    codeContact += '<div class="form-group">';
    codeContact += '<input type="email" class="form-control" id="email" placeholder="Email">';
    codeContact += '</div>';
    codeContact += '<div class="form-group">';
    codeContact += '<input type="tel" class="form-control" id="tel" placeholder="Teléfono">';
    codeContact += '</div>';
    codeContact += '<button type="submit" class="btn btn-default">Submit</button>';
    codeContact += '</form>';
    codeContact += '</div>';
    codeContact += '</div>';


    try {
        document.getElementsByTagName('contacto')[0].innerHTML = codeContact;
    } catch (error) {
        msg = "Fallo, no se ha encontrado contacto: " + error;
        log(msg)
    }
};

function setHeader() {

    var codeHeader = '';
    codeHeader += '    <div class="row nav-row">';
    codeHeader += ' <nav class="navbar">';
    codeHeader += '    <div class="col-md-2 col-sm-2 nav-col-img">';
    codeHeader += ' <a class="nav-a fav2" href="index.html"><img class="fav2" src="../img/favicon.png" alt="logo"></a>';
    codeHeader += '    </div>';
    codeHeader += '    <div class="col-md-8 col-sm-8 nav-col-menu">';
    codeHeader += '                 <a class="nav-a" onclick="stay()" href="index.html#stay">Stay</a>';
    codeHeader += '                 <a class="nav-a" onclick="servicio()" href="index.html#servicio">Servicios</a>';
    codeHeader += '                 <a class="nav-a" onclick="about()" href="index.html#nosotros">Nosotros</a>';
    codeHeader += '                 <a class="nav-a" onclick="contacto()" href="contacto.html">Contacto</a>';
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

    var latitud = 43.3387367;
    var longitud = -3.0081319;
    mapa = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latitud, lng: longitud },
        zoom: 15
    })
    marcador = new google.maps.Marker({
        position: { lat: latitud, lng: longitud },
        map: mapa,
        title: "HOTEL CYCLE"
    })
}
// var questionNum = 0; // keep count of question, used for IF condition.
// var question = '<h1>¿ Cuál es tu nombre ?</h1>'; // first question

// var output = document.getElementById('output'); // store id="output" in output variable
// output.innerHTML = question; // ouput first question

// function bot() {
//     var input = document.getElementById("input").value;
//     console.log(input);



//     if (questionNum == 0) {
//         output.innerHTML = '<h1>¿ Qué tal ' + input + '?</h1>'; // output response
//         document.getElementById("input").value = ""; // clear text box
//         question = '<h1>¿ Cuales son tus apellidos ?</h1>'; // load next question		
//         setTimeout(timedQuestion, 2000); // output next question after 2sec delay
//     } else if (questionNum == 1) {
//         output.innerHTML = '<h1>Ya casi termino...</h1>';
//         document.getElementById("input").value = "";
//         question = '<h1>Escribe tu email por favor: </h1>';
//         setTimeout(timedQuestion, 2000);
//     } else if (questionNum == 2) {
//         output.innerHTML = '<h1>La última</h1>';
//         document.getElementById("input").value = "";
//         question = '<h1>Un Telefono:</h1>';
//         setTimeout(timedQuestion, 2000);
//     } else if (questionNum == 3) {
//         output.innerHTML = '<h1>Gracias por conifar en XXX</h1>';
//         document.getElementById("input").value = "";
//         question = '<h1>Gracias por conifar en EuskalPollution</h1>';
//         questionNum = 0;
//         $("#input").hide();
//         $(".boton2").show();
//         setTimeout(timedQuestion, 2000);

//         // setCont();
//         // questionNum = 0;

//     }

// }

// function setCont() {
//     $(".col-chat").hide();
//     $(".col-p").show();
//     $(".boton").hide();
// }

// function timedQuestion() {
//     output.innerHTML = question;
// }

// //push enter key (using jquery), to run bot function.
// $(document).keypress(function(e) {
//     if (e.which == 13) {
//         bot(); // run bot function when enter key pressed
//         questionNum++; // increase questionNum count by 1
//     }
// });

// function setChat() {
//     $(".col-p").hide();
//     $(".boton").hide();
//     $(".boton2").hide();
//     $(".col-chat").show();
//     $("#input").focus();

// }