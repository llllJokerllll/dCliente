dia1 = prompt("Por favor, introduzca el día de una fecha","00");
mes1 = prompt("Por favor, introduzca el mes de una fecha","00");
ano1 = prompt("Por favor, introduzca el ano de una fecha","0000");

var fecha1 = new Date( ano1, mes1, dia1 );

dia2 = prompt("Por favor, introduzca el día de una fecha","00");
mes2 = prompt("Por favor, introduzca el mes de una fecha","00");
ano2 = prompt("Por favor, introduzca el ano de una fecha","0000");

var fecha2 = new Date( ano2, mes2, dia2 );

if ( fecha1 > fecha2 ) {
    console.log("La segunda fecha tiene que ser mayor que la primera fecha");
} else {
    var diasTranscurridos = (((fecha2 - fecha1) / 1000) / 86400);
    console.log("Fecha 1: " + dia1 + "-" + mes1 + "-" + ano1 + "\n" + "Fecha 2: " + dia2 + "-" + mes2 + "-" + ano2 + "\n" + "Entre la primera fecha y la segunda han transcurrido " + diasTranscurridos.toFixed(0) + " días.");
}