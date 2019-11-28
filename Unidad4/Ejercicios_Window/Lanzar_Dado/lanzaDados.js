var cuentaUno = 0;
var cuentaDos = 0;
var cuentaTres = 0;
var cuentaCuatro = 0;
var cuentaCinco = 0;
var cuentaSeis = 0;
var miVentana = null;

function lanzarDado() {
    var numero = Math.round(Math.random() * 6 + 1);
    crearVentana();
    switch (numero) {
        case 1:
            miVentana.document.getElementById("img").src = "imagenes/1.png";
            cuentaUno++;
            modPorcentaje()
            miVentana.focus();
            break;
        case 2:
            miVentana.document.getElementById("img").src = "imagenes/2.png";
            cuentaDos++;
            modPorcentaje()
            miVentana.focus();
            break;
        case 3:
            miVentana.document.getElementById("img").src = "imagenes/3.png";
            cuentaTres++;
            modPorcentaje()
            miVentana.focus();
            break;
        case 4:
            miVentana.document.getElementById("img").src = "imagenes/4.png";
            cuentaCuatro++;
            modPorcentaje()
            miVentana.focus();
            break;
        case 5:
            miVentana.document.getElementById("img").src = "imagenes/5.png";
            cuentaCinco++;
            modPorcentaje()
            miVentana.focus();
            break;
        case 6:
            miVentana.document.getElementById("img").src = "imagenes/6.png";
            cuentaSeis++;
            modPorcentaje()
            miVentana.focus();
            break;
    }

}

function modPorcentaje() {
    document.getElementById("porcentaje").innerHTML = "<p>Cantidad de unos: " + cuentaUno + "<br>Cantidad de dos: " + cuentaDos + "<br>Cantidad de tres: " + cuentaTres + "<br>Cantidad de cuatro: " + cuentaCuatro + "<br>Cantidad de cinco: " + cuentaCinco + "<br>Cantidad de seis: " + cuentaSeis + "</p>";
}

function crearVentana() {
    if ( miVentana == null || miVentana.closed ) {
        miVentana = window.open( "", "", "height=200, width=100" );
        miVentana.document.write( '<img src="" id="img"></img><br><button type="button" onclick="window.opener.cerrarVentana();">Cerrar</button>' );
    }
}

function cerrarVentana() {
    miVentana.close();
}