function compruebaLetras() {
var texto = document.getElementById("textarea").value;
const ABECEDARIO = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var textoSimple = texto.toUpperCase().replace(/ /g, "");
var letras = "";

for ( let i = 0; i <= ABECEDARIO.length; i++ ) {
    let aux = 0;
    for ( let j = 0; j < textoSimple.length; j++ ) {
        if ( ABECEDARIO.charAt( i ) == ( textoSimple.charAt( j ) ) ) {
            aux += 1;
        }
    }
    if ( aux == 0 ) {
        letras += ABECEDARIO.charAt( i );
    } 
}

alert( letras );
}