var nombre = prompt("Por favor, introduzca su nombre");
var fechaInicio = new Date();
var apellidos = prompt("Por favor, introduzca sus apellidos");
var fechaFinal = new Date();

var tiempoTranscurrido = (((fechaFinal - fechaInicio) / 1000) / 60);

console.log("Has tardado " + tiempoTranscurrido.toFixed(2) + " minutos en introducir tus datos.");