var texto = prompt("Por favor, introduzca su texto a codificar aquí");
const ABECEDARIO = " ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var textoMayus = texto.toUpperCase();
var textoCodificado = "";
var textoSalida = "";

for ( let i = 0; i <= textoMayus.length; i++ ) {
    for ( let j = 0; j < ABECEDARIO.length; j++ ) {
        if ( ABECEDARIO.charAt( j ) == ( textoMayus.charAt( i ) ) ) {
            if ( textoMayus.charAt( i ) == " " ) {
                textoCodificado += " ";
            } else if ( textoMayus.charAt( i ) == "Z" ) {
                textoCodificado += "A";
            } else if ( textoMayus.charAt( i ) == "9" ) {
                textoCodificado += "0";    
            } else {
            textoCodificado += ABECEDARIO.charAt( j + 1 );
            }
        }
    }
}

for ( let i = textoCodificado.length; i >= 0; i-- ) {
    textoSalida += textoCodificado.charAt(i);
}

console.log( textoSalida );
