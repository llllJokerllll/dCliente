var texto = prompt("Por favor, introduzca su texto aquí");
const VOCALES = "aeiou";
var resultado = "";
var signo = "*";

for ( let i = 0; i < VOCALES.length; i++ ) {
    let aux = 0;
    for ( let j = 0; j < texto.length; j++ ) {
        if ( VOCALES.charAt( i ) == texto.charAt( j ) ) {
            aux++;
        }
    }
    resultado += VOCALES.charAt( i ) + "  " + aux + "  " + signo.repeat( aux ) + "\n";
}

alert( resultado );