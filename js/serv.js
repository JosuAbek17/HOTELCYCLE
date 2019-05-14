 $(document).ready(function() {
     setHeader();
     setFooter();
     setInstagram();
     setMenu();
     setBook();
 });

 function setHeader() {

     var codeHeader = '';
     codeHeader += '    <div class="row nav-row">';
     codeHeader += ' <nav class="navbar">';
     codeHeader += '    <div class="col-md-2 col-sm-2 nav-col-menu">';
     codeHeader += '     <span style="color:#faecd3;font-size:14px;cursor:pointer;letter-spacing: 2px; font-weight:bold" onclick="openNav()">&#9776; MENU</span>';
     codeHeader += '    </div>';
     codeHeader += '    <div class="col-md-8 col-sm-8 nav-col-logo">';
     codeHeader += '                 <a class="nav-a logotit" href="index.html#"><img class="logotit" src="../img/hey-claro.png" alt="logo"></a>';
     codeHeader += ' <a class="nav-a fav2" href="index.html#"><img class="fav2" src="../img/fav2.png" alt="logo"></a>';
     codeHeader += '    </div>';
     codeHeader += '    <div class="col-md-2 col-sm-2 nav-col-otro">';
     codeHeader += '       <span style="color:#faecd3;font-size:14px;cursor:pointer;letter-spacing: 2px; font-weight:bold" onclick="openBook()">BOOK NOW</span>';
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

 function setMenu() {
     var codeMenu = '';
     codeMenu += '<div id="myNav" class="overlay">';
     codeMenu += '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">CLOSE</a>';
     codeMenu += '<div class="overlay-content">';
     codeMenu += '<a href="stay.html">Stay</a>';
     codeMenu += '<a href="f&d.html">Food & Drink</a>';
     codeMenu += '<a href="servicio.html">Servicios</a>';
     codeMenu += '<a href="nosotros.html">Nosotros</a>';
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

 function openNav() {
     document.getElementById("myNav").style.width = "100%";
 }

 function closeNav() {
     document.getElementById("myNav").style.width = "0%";
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

 function openBook() {
     document.getElementById("myBook").style.width = "100%";
 }

 function closeBook() {
     document.getElementById("myBook").style.width = "0%";
 }