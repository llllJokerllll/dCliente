var fecha = new Date();
var diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
var mesesAno = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var dia = fecha.getDate();
var mes = mesesAno[fecha.getMonth()];
var ano = fecha.getFullYear();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var diaSemana = diasSemana[fecha.getDay()];

if ( hora < 10 ) {
    horas = "0" + horas.toString();
}

if ( minutos < 10 ) {
    minutos = "0" + minutos.toString();
}

if ( segundos < 10 ) {
    segundos = "0" + segundos.toString();
}

console.log("Hoy es " + dia + " de " + mes + " de " + ano + ". Son las " + hora + ":" + minutos + 
":" + segundos + " y además es " + diaSemana );