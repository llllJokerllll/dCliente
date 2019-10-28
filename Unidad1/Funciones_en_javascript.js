function numerosPares (n) {

    for ( let i = 2; i <= n; i++ ) {
        if ( i % 2 == 0 ) {
            document.write(i + " ")
        }

    }
}

function sumarNumeros (n1, n2) {
    
    var suma = n1 + n2;

    return (suma);
}

var numero1 = parseInt(prompt("Por favor, introduzca un número"));
var numero2 = parseInt(prompt("Por favor, introduzca un número"));

numerosPares(1000);

var resultado = sumarNumeros(numero1, numero2);

console.log(resultado);