$(document).ready(function() {
    $(".col-chat").hide();
    setMap();
    $(".footer").show();
});

var questionNum = 0; // keep count of question, used for IF condition.
var question = '<h1>¿ Cuál es tu nombre ?</h1>'; // first question

var output = document.getElementById('output'); // store id="output" in output variable
output.innerHTML = question; // ouput first question

function bot() {
    var input = document.getElementById("input").value;
    console.log(input);



    if (questionNum == 0) {
        output.innerHTML = '<h1>¿ Qué tal ' + input + '?</h1>'; // output response
        document.getElementById("input").value = ""; // clear text box
        question = '<h1>¿ Cuales son tus apellidos ?</h1>'; // load next question		
        setTimeout(timedQuestion, 2000); // output next question after 2sec delay
    } else if (questionNum == 1) {
        output.innerHTML = '<h1>Ya casi termino...</h1>';
        document.getElementById("input").value = "";
        question = '<h1>Escribe tu email por favor: </h1>';
        setTimeout(timedQuestion, 2000);
    } else if (questionNum == 2) {
        output.innerHTML = '<h1>La última</h1>';
        document.getElementById("input").value = "";
        question = '<h1>Un Telefono:</h1>';
        setTimeout(timedQuestion, 2000);
    } else if (questionNum == 3) {
        output.innerHTML = '<h1>Gracias por conifar en XXX</h1>';
        document.getElementById("input").value = "";
        question = '<h1>Gracias por conifar en EuskalPollution</h1>';
        questionNum = 0;
        $("#input").hide();
        $(".boton2").show();
        setTimeout(timedQuestion, 2000);

        // setCont();
        // questionNum = 0;

    }

}

function setCont() {
    $(".col-chat").hide();
    $(".col-p").show();
    $(".boton").hide();
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
    if (e.which == 13) {
        bot(); // run bot function when enter key pressed
        questionNum++; // increase questionNum count by 1
    }
});

function setChat() {
    $(".col-p").hide();
    $(".boton").hide();
    $(".boton2").hide();
    $(".col-chat").show();
    $("#input").focus();

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
        title: "EuskPolution"
    })
}