var formula;
var depreciacionAnual
var depreciacionAcumulada;
var valorNeto;


do {
    var nombreDelBien = prompt("Por favor, introduzca el nombre del bien");
    if (nombreDelBien == '*') break;
    var valorInicial = prompt("Por favor, introduzca el valor inicial del bien");
    var tipoDeBien = parseInt(prompt("Por favor, introduzca el tipo de bien usando los digitos del 1 al 5"));
    var valorResidual = prompt("Por favor, introduzca el valorResidual del bien");
    var ano;
    ano = 0;
    depreciacionAcumulada = 0;

    switch (tipoDeBien) {
        case 1:
            tipoDeBien = 20;
            break;
        case 2:
            tipoDeBien = 10;
            break;
        case 3:
            tipoDeBien = 10;
            break;
        case 4:
            tipoDeBien = 4;
            break;
        case 5:
            tipoDeBien = 15;
            break;
        default:
            alert("Tipo de bien introducido erroneo");
            break;
    }

    formula = (tipoDeBien * (tipoDeBien + 1)) / 2;

    var titulo = ("Nombre del bien: " + nombreDelBien);
    document.body.innerText += nombreDelBien;
    var tabla = '<table border="1"><tr><td>Año</td><td>Depreciación Anual</td><td>Depreciación Acumulada</td><td>Valor Neto</td></tr>';

    for (let i = tipoDeBien; i >= 1; i--) {
        depreciacionAnual = i / formula * (valorInicial - valorResidual);
        depreciacionAcumulada += depreciacionAnual;
        valorNeto = valorInicial - depreciacionAcumulada;

        ano += 1;
            tabla += '<tr><td>' + ano + '</td>';
            tabla += '<td>' + depreciacionAnual.toFixed(2) + '</td>';
            tabla += '<td>' + depreciacionAcumulada.toFixed(2) + '</td>';
            tabla += '<td>' + valorNeto.toFixed(2) + '</td>';
            tabla += '</tr>';
            
        }
    
        tabla += '</table>';

        document.body.innerHTML += tabla;
}while (nombreDelBien != '*');

