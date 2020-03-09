var contadorClick = 0;
var contadorColor = 0;
window.addEventListener('load', inicializarEventos, false);

function inicializarEventos() {
    document.getElementById("w3c").addEventListener('click', alertar, false);
    document.getElementById("w3c").addEventListener('mouseover', color, false);
    document.getElementById("w3c").addEventListener('mouseout', sinColor, false);
    document.addEventListener('click', clickar, false);
}

function alertar() {  
    alert("Se han echo: "+ ++contadorClick + " clicks."); 
}

function color() {
    document.getElementById("w3c").style.color = "red";
    document.getElementById("w3c").style.backgroundColor = "yellow";
}

function sinColor() {
    document.getElementById("w3c").style.color = "black";
    document.getElementById("w3c").style.backgroundColor = "white";
}

function clickar() {
    if (contadorColor % 2 == 0) {
        document.getElementById("w3canonima").style.backgroundColor = "black";
        contadorColor++;
    } else {
        document.getElementById("w3canonima").style.backgroundColor = "blue";
        contadorColor++;
    }
    
}