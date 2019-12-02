var miVentana;

function abreVentana() {
    if ( miVentana == null || miVentana.closed ) {
        miVentana = window.open( "", "", "height=200, width=500" );
        miVentana.document.write('<script src="script.js"></script><h1>Sub-Ventana</h1><p>Texto a copiar en la página principal <input type="text" name="texto" id="texto2"></p><button type="button" onclick="copiarParent()">Enviar texto a ventana padre</button>');
    }
}

function cierraVentana() {
    miVentana.close();
}

function copiarParent() {
    window.opener.document.getElementById("texto1").value = document.getElementById("texto2").value;
}