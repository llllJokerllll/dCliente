function numerosAmigos(n1, n2) {

    var resultado1, resultado2;

    for (let i = n1; i < n2; i++) {
        resultado1 = 0;
        resultado2 = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                resultado1 += j;
            }
        }
        for (let k = 1; k < resultado1; k++) {
            if (resultado1 % k == 0) {
                resultado2 += k;
            }
        }
        if ( i == resultado2 && i < resultado1 ) {
            console.log("Los números " + i + " y " + resultado1 + " son amigos");
        }
    }
}


var num1 = parseInt(prompt("Por favor, introduzca un número entero y positivo"));
var num2 = parseInt(prompt("Por favor, introduzca otro número entero y positivo"));

if (num1 < 0 || num2 < 0) {
    alert("Ha introducido mal alguno de los números anteriores");
} else {
    numerosAmigos( num1, num2 );
}