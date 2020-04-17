var mensajeError;
var error;
var validos;

function validarDatos() {
    const nombre = document.getElementsByName("Nombre")[0].value;
    const ap1 = document.getElementsByName("Primer Apellido")[0].value;
    const ap2 = document.getElementsByName("Segundo Apellido")[0].value;
    const edad = document.getElementsByName("Edad")[0].value;
    const ccc = document.getElementsByName("C.C.C.")[0].value;


    const sexoArray = document.getElementsByName("Genero");
    const cuentaArray = document.getElementsByName("Cuenta");
    const paisArray = document.getElementsByTagName("select")[0];
    const sucursalArray = document.getElementsByName("Sucursal");

    let pais = paisArray[paisArray.selectedIndex].value;

    error = false;
    mensajeError = "Los siguientes campos no son válidos:";
    validos = "Los siguientes campos son válidos:"

    comprobarCaracteres(nombre, "Nombre");
    comprobarCaracteres(ap1, "Primer Apellido");
    comprobarCaracteres(ap2, "Segundo Apellido");
    comprobarEdad(edad)
    verificarCCC(ccc)

    sexo = verificar(sexoArray);
    campoVacio(sexo, "Sexo");
    campoVacio(pais, "Pais");
    cuenta = verificar(cuentaArray);
    campoVacio(cuenta, "Cuenta");
    sucursal = verificar(sucursalArray);
    campoVacio(sucursal, "Sucursal");

    ventana = window.open("", "Resumen", "width=500,height=500");
    ventana.document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"tareaCSS.css\">");
    ventana.document.write(validos + "<br><br>" + mensajeError + "<br><br>");
    ventana.document.write((edad != "") ? ((edad < 20) ? "Has nacido después del  año 1992" : (edad >= 20 && edad <= 35) ? "Has nacido entre el año 1992 y el 1977" : (edad >= 26 && edad <= 50) ? "Has nacido entre el año 1976 y el 1962" : (edad > 50) ? "Has nacido antes del año 1962" : "") : "");
}
/**
 * Buscar el valor de la casilla marcada en caso de que exista
 * @param {*} array 
 */
function verificar(array) {
    let valor = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked) {
            valor = array[i].getAttribute("value")
            break;
        }
    }
    return valor;
}
/**
 * Añade un campo válido a la salida
 * @param {*} campo Nombre del campo (Nombre, Apellido...)
 * @param {*} valor Valor actual del campo
 */
function escribirCampoValido(campo, valor) {
    validos += "<br>-" + campo + ": " + valor
}
/**
 * Añade un campo NO válido a la salida
 * @param {*} campo Nombre del campo (Nombre, Apellido...)
 * @param {*} causa Motivo por el que no es válido
 */
function escribirError(campo, causa) {
    mensajeError += "<br>-" + campo + ": " + causa
    error = true;
}
/**
 * Comprueba si un campo con multiples respuestas está vacio(Radio, Checkbox...)
 * @param {*} valor 
 * @param {*} campo 
 */
function campoVacio(valor, campo) {
    if (valor == "") {
        escribirError(campo, "Campo vacío")
    } else {
        escribirCampoValido(campo, valor);
    }
}
/**
 * Comprueba que los campos de texto no tengan caracteres no permitidos
 * @param {*} valor 
 * @param {*} campo 
 */
function comprobarCaracteres(valor, campo) {
    if (valor != "") {
        if (!valor.match("^[a-zA-Z]+$")) {
            escribirError(campo, "caracter no admitido")
        } else {
            escribirCampoValido(campo, valor);
        }
    } else {
        escribirError(campo, "Campo vacío")
    }
}

/**
 * Comprueba que la edad este en el rango correcto
 * @param {*} edad 
 */
function comprobarEdad(edad) {
    const EDAD_MIN = 0;
    const EDAD_MAX = 150;

    if (edad != "") {
        if (isNaN(edad)) {
            escribirError("Edad", "Introduzca una edad válida");
        } else if (parseInt(edad) <= EDAD_MIN) {
            escribirError("Edad", "Introduzca una edad válida");
        } else if (parseInt(edad) >= EDAD_MAX) {
            escribirError("Edad", "Introduzca una edad válida");
        } else {
            escribirCampoValido("Edad", edad);
        }
    } else {
        escribirError("Edad", "Campo vacío")
    }
}

//01234567810123456789 codigo válido
/**
 * Comprueba que el CCC sea válido
 * @param {*} codigo 
 */
function verificarCCC(codigo) {
    let errorCCC = false;

    if (codigo.length == 20) {
        let banco = codigo.substring(0, 4);
        let sucursal = codigo.substring(4, 8);
        let control = codigo.substring(8, 10);
        let cliente = codigo.substring(10, 20);
        let dig1, dig2;

        dig1 = calcularDigito1(banco, sucursal, 4, 8, 5, 10, 9, 7, 3, 6);
        dig2 = calcularDigito2(cliente, 1, 2, 4, 8, 5, 10, 9, 7, 3, 6);

        if (control.charAt(0) != dig1 || control.charAt(1) != dig2) {
            errorCCC = true;
        } else if (dig1 != undefined && dig2 != undefined) {
            escribirCampoValido("C.C.C", banco + "-" + sucursal + "-" + control + "-" + cliente + " (" + dig1 + ", " + dig2 + ")")
        }
    } else if (codigo != "") {
        errorCCC = true;
    } else {
        escribirError("C.C.C", "Campo vacío")
    }

    if (errorCCC) {
        escribirError("C.C.C", "no válido")
    }

    function calcularDigito1(banco, sucursal, n1, n2, n3, n4, n5, n6, n7, n8) {
        return 11 - ((banco[0] * n1 + banco[1] * n2 + banco[2] * n3 + banco[3] * n4 + sucursal[0] * n5 + sucursal[1] * n6 + sucursal[2] * n7 + sucursal[3] * n8) % 11);
    }

    function calcularDigito2(cliente, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
        return 11 - ((cliente[0] * n1 + cliente[1] * n2 + cliente[2] * n3 + cliente[3] * n4 + cliente[4] * n5 + cliente[5] * n6 + cliente[6] * n7 + cliente[7] * n8, cliente[8] * n9, cliente[9] * n10) % 11);
    }
}