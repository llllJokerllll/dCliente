window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById("w3c").addEventListener('keypress', enter, false);
}

function enter() {
    if (event.keyCode == 13) {
        let res = document.getElementById("w3c").value;
        document.getElementById("w3canonima").innerHTML = res;
    }
}