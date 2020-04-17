var x = 0;
var y = 0;
window.addEventListener('load', iniciarEventos, false);

function iniciarEventos() {
    document.addEventListener('mousemove', mueveRaton, false);
    document.addEventListener('click', clickar, false);
    document.addEventListener('keypress', codigoTecla, false);
}

function mueveRaton(event) {
    x = event.clientX;
    y = event.clientY;
    document.getElementById("1").innerHTML = x + ", " + y;
}

function clickar() {
    document.getElementById("2").innerHTML = document.getElementById("1").innerHTML;
}

function codigoTecla(event) {
    const codigo = event.keyCode;
    const tecla = event.key;
    document.getElementById("3").innerHTML = "Código: " + codigo;
    document.getElementById("4").innerHTML = "Caracter: " + tecla;
}
