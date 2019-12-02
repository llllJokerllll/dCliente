var galeria = ["img/ourense1.jpg","img/ourense2.jpg","img/ourense3.jpg","img/ourense4.jpg","img/ourense5.jpg"];

var x = 0;
function slider() {
    if ( x > 4 ) {
        x = 0;
    }
    document.getElementById("img").src = galeria[ x ];
    x++;
}

var temporizador = setInterval( "slider()", 1000 ); 