window.addEventListener('load', iniciarEventos, false);

function iniciarEventos() {
    document.getElementById("enlace_1").addEventListener('click', ocultar1, false);
    document.getElementById("enlace_2").addEventListener('click', ocultar2, false);
    document.getElementById("enlace_3").addEventListener('click', ocultar3, false);
}

function ocultar1() {
    if (!document.getElementById("contenidos_1").hidden) {
        document.getElementById("contenidos_1").hidden = true;
        document.getElementById("enlace_1").innerHTML = "Mostrar contenidos";
    } else {
        document.getElementById("contenidos_1").hidden = false;
        document.getElementById("enlace_1").innerHTML = "Ocultar contenidos";
    }
    
}

function ocultar2() {
    if (!document.getElementById("contenidos_2").hidden) {
        document.getElementById("contenidos_2").hidden = true;
        document.getElementById("enlace_2").innerHTML = "Mostrar contenidos";
    } else {
        document.getElementById("contenidos_2").hidden = false;
        document.getElementById("enlace_2").innerHTML = "Ocultar contenidos";
    }
    
}

function ocultar3() {
    if (!document.getElementById("contenidos_3").hidden) {
        document.getElementById("contenidos_3").hidden = true;
        document.getElementById("enlace_3").innerHTML = "Mostrar contenidos";
    } else {
        document.getElementById("contenidos_3").hidden = false;
        document.getElementById("enlace_3").innerHTML = "Ocultar contenidos";
    }
    
}