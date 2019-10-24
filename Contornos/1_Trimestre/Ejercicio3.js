var numero = prompt("Por favor, introduzca un número entero");

function decBin (numero) {
    if ( numero < 2 ) {
        return numero ;

    } else {
        decBin( numero / 2 );
        return numero % 2 ;

    }
}

console.log(decBin(numero));