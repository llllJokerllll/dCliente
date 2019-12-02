var galeria = ["0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"];

var fecha = new Date();

var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

if ( minutos < 10 ) {
    minutos = "0" + minutos;
}

if ( segundos < 10 ) {
    segundos = "0" + segundos;
}

var hCompleta = hora + ":" + minutos + ":" + segundos;

function obtenerHora( n ) {
    document.getElementById("hora1").src = galeria[ parseInt(n.charAt(0)) ];
    document.getElementById("hora2").src = galeria[ parseInt(n.charAt(1)) ];
    document.getElementById("minuto1").src = galeria[ parseInt(n.charAt(3)) ];
    document.getElementById("minuto2").src = galeria[ parseInt(n.charAt(4)) ];
    document.getElementById("segundo1").src = galeria[ parseInt(n.charAt(6)) ];
    document.getElementById("segundo2").src = galeria[ parseInt(n.charAt(7)) ];
}

var temporizador = setInterval( "obtenerHora( hCompleta )", 1000 );