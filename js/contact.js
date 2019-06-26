$(document).ready(function() {
    setContacto();
    setMap();
    formRoom();


});



function setContacto() {
    var codeContact = '';
    codeContact += '<div class="row row-cont2">';
    codeContact += '      <div class="col-md-12 col-sm-12 col-lg-12 col-cont">';
    codeContact += '<form class="form-inline f-c" action="#" method="post">';
    codeContact += '<div class="form-group">';
    codeContact += '<input type="text" class="form-control" id="nombre" placeholder="Nombre">';
    codeContact += '</div>';
    codeContact += '<div class="form-group">';
    codeContact += '<input type="text" class="form-control" id="apellido" placeholder="Apellidos">';
    codeContact += '</div>';
    codeContact += '<div class="form-group">';
    codeContact += '<input type="email" class="form-control" id="email" placeholder="Email">';
    codeContact += '</div>';
    codeContact += '<button type="submit" class="btn btn-default">Contacto</button>';
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
var mapa;
var marcador;

function setMap() {

    var latitud = 43.336094;
    var longitud = -3.01023;
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