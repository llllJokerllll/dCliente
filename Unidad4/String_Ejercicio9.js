function limpiar () {
    document.getElementById("textarea").value = "";
}

function esPalindromo() {
    var texto = document.getElementById("textarea").value;
    var texto = texto.replace(/ /g, "");
    const VOCALES = "áéíóú";
    const VOCALES_CAMBIO = "aeiou";
    var textoReves = "";
    var textoSalida = "";

    for ( let i = 0; i < texto.length; i++ ) {
        for ( let j = 0; j < VOCALES.length; j++ ) {
            if ( texto.charAt( i ) == VOCALES.charAt( i ) ) {
                textoSalida += VOCALES_CAMBIO.charAt( i );
            }
        }
    }

    for ( let i = textoSalida.length; i >= 0; i-- ) {
        textoReves += textoSalida.charAt( i );
    }
    if ( textoReves == textoSalida) {
        return alert("Es palíndromo");
    } else {
        return alert("No es palíndromo");
    }
}