window.onload = function () {
    pantalla = document.getElementById("textoPantalla");
    document.onkeydown = teclado;
}

var caja = "0";
var iniciaNum = 1;
var coma = 0;
var operando1 = 0;
var pendiente = "no";

function numero(num) {
    if (caja == "0" || iniciaNum == 1) {
        pantalla.innerHTML = num;
        caja = num;
        if (num == ".") {
            pantalla.innerHTML = "0.";
            caja == num;
            coma = 1;
        }
    } else {
        if (num == "." && coma == 0) {
            pantalla.innerHTML += num;
            caja += num;
            coma = 1;
        } else if (num == "." && coma == 1) {

        } else {
            pantalla.innerHTML += num;
            caja += num
        }
    }
    iniciaNum = 0;
}

function operar(signo) {
    igualar();
    operando1 = caja;
    pendiente = signo;
    iniciaNum = 1;
}

function igualar() {
    if (pendiente == "no") {
        pantalla.innerHTML = caja;
    } else {
        let operacion = operando1 + pendiente + caja;
        let resultado = eval(operacion);
        pantalla.innerHTML = resultado;
        caja = resultado;
        pendiente = "no";
        iniciaNum = 1;
    }
}

function raizCuadrada() {
    caja = Math.sqrt(caja);
    pantalla.innerHTML = caja;
    pendiente = "no";
    iniciaNum = 1;
}

function porcent() {
    caja = caja / 100;
    pantalla.innerHTML = caja;
    igualar();
    iniciaNum = 1;
}

function cambiarSigno() {
    opuestoCaja = Number(caja);
    opuestoCaja = -opuestoCaja;
    caja = String(opuestoCaja);
    pantalla.innerHTML = caja;
}

function fraccion() {
    inversoCaja = Number(caja);
    inversoCaja = (1 / inversoCaja);
    caja = String(inversoCaja);
    pantalla.innerHTML = caja;
    iniciaNum = 1;
}

function borrarUltimoDigito() {
    cifras = caja.length;
    br = caja.substr(cifras - 1, cifras);
    caja = caja.substr(0, cifras - 1);
    if (caja == "") {
        caja = "0";
    };
    if (br == ".") {
        coma = 0;
    };
    pantalla.innerHTML = caja;
}

function borradoParcial() {
    pantalla.innerHTML = 0;
    caja = 0;
    coma = 0;
}

function borrarTodo() {
    pantalla.innerHTML = 0;
    caja = "0";
    coma = 0;
    iniciaNum = 0;
    pendiente = "no";
}

function teclado(elEvento) {
    evento = elEvento || window.event;
    tecla = evento.keyCode;

    if (tecla > 47 && tecla < 58) {
        escribe = tecla - 48;
        escribe = String(escribe);
        numero(escribe);
    }

    if (tecla > 95 && tecla < 106) {
        escribe = tecla - 96;
        escribe = String(escribe);
        numero(escribe);
    }
    if (tecla == 110 || tecla == 190) {
        numero(".");
    }
    if (tecla == 107) {
        operar('+');
    }
    if (tecla == 109) {
        operar('-');
    }
    if (tecla == 111) {
        operar('/');
    }
    if (tecla == 106) {
        operar('*');
    }
    if (tecla == 32 || tecla == 13) {
        igualar();
    }
    if (tecla == 46) {
        borrarTodo();
    }
    if (tecla == 8) {
        borrarUltimoDigito();
    }
    if (tecla == 36) {
        borradoParcial();
    }
}