var capPendiente = prompt("Por favor, introduzca la cantidad total del préstamo");
var duracion = prompt("Por favor, introduzca la cantidad de años para realizar la amortización");
const interes = 0.05;
var cuota;
var amortizado;
var intereses;
var ano = 0;

var tabla = '<table border="1"><tr><td>Año</td><td>Cuota</td><td>Intereses</td><td>Amortización</td><td>Cap.Pdte</td></tr><tr><td>' + ano + '</td><td></td><td></td><td></td><td>' + capPendiente + '</td>';

for (let i = duracion; i >= 1; i--) {
    var cuota = (capPendiente * interes) / (1 - Math.pow((1 + interes), -(i)));
    var amortizado = cuota - (interes * capPendiente);
    var intereses = cuota - amortizado;
    var capPendiente = capPendiente - cuota + intereses;
    
    ano += 1;
    tabla += '<tr><td>' + ano + '</td>';
    tabla += '<td>' + cuota.toFixed(2) + '</td>';
    tabla += '<td>' + intereses.toFixed(2) + '</td>';
    tabla += '<td>' + amortizado.toFixed(2) + '</td>';
    tabla += '<td>' + capPendiente.toFixed(2) + '</td>';
    tabla += '</tr>';
    
}

tabla += '</table>';

document.body.innerHTML = tabla;