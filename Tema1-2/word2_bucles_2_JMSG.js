var hora = prompt("Por favor, introduzca la hora", '12:00');
hora = hora.split(':');

var espejoHora = 12 - parseInt((hora[0]));
var espejoMinutos = Math.abs(parseInt(hora[1]) - 60);

alert(espejoHora + ':' + espejoMinutos);
