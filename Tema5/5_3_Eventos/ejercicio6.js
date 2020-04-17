var arrayFoco = [];
var longitud = 0;
window.addEventListener('load', iniciarEventos, false);

function iniciarEventos() {
    arrayFoco = document.getElementsByTagName("input");
    longitud = arrayFoco.length;

    for (let i = 0; i < longitud; i++) {
        arrayFoco[i].addEventListener('focus', seleccionado, false);
    }
}

function seleccionado(e) {
    console.log(e.target.id);
    e.target.style.borderColor = "blue";
    
}