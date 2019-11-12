var texto = prompt("Por favor, introduzca un texto");
const ABECEDARIO = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var textoSimple = texto.replace(" ", "").toUpperCase();
var letras = "";

for ( let i = 0; i <= 27; i++ ) {
    for ( let j = 0; j < textoSimple.length; j++ ) {
        var aux = 0;
        if ( ABECEDARIO.charAt(i) == textoSimple.charAt(j) ) {
            aux += 1;
        }
    }
    if ( aux == 0 ) {
        letras += ABECEDARIO.charAt(i);
    } 
}