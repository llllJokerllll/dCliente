function convertirNumero ( n1, base1, base2 ) {

    var auxiliar = parseInt( n1, base1, base2 );

    return auxiliar;
}

var numero = parseInt(prompt("Por favor, introduzca un número entero"));
var baseInicio = parseInt(prompt("Por favor, introduzca la base del número"));
var baseFinal = parseInt(prompt("Por favor, introduzca la base destino del número"));

console.log(convertirNumero(numero, baseInicio, baseFinal));