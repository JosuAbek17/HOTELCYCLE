$(document).ready(function() {

    setInstagram();
    setBook();



});

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

function setBook() {
    var codeBook = '';
    codeBook += '<div id="myBook" class="overlay">';
    // codeBook += '<div class="row book">';
    // codeBook += '   <div class="col-md-10">';
    // codeBook += '     <a class="nav-a fav2" href="index.html#"><img class="fav2" src="../img/favicon.png" alt="logo"></a>';
    // codeBook += '   </div>';
    // codeBook += '   <div class="col-md-2">';
    codeBook += '<a href="javascript:void(0)" class="closebtn" onclick="closeBook()">CLOSE</a>';
    // codeBook += '   </div>';
    codeBook += '<div class="overlay-content">';
    codeBook += '<a href="stay.html">RESERVA</a>';
    codeBook += '</div>';
    codeBook += '</div>';


    try {
        document.getElementsByTagName('book')[0].innerHTML = codeBook;
    } catch (error) {
        msg = "Fallo, no se ha encontrado book." + error;
        log(msg);
    }
}