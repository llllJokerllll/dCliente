var amarillo;
var rojazo;
var verdazo;
const PRECAUCION = 60000;
const PARAR = 65000;
const PASAR = 85000;
const CAMINA = 20000;

function encender() {
    document.getElementById("peaton").src = "imaxes_semaforo/semaforo_peaton_rojo.jpg";
    document.getElementById("vehiculo").src = "imaxes_semaforo/semaforo_verde.jpg";
    document.getElementById("inicio").style.display = "none";
    document.getElementById("apagar").style.display = "";
    amarillo = setTimeout(ambar, PRECAUCION);
    rojazo = setTimeout(rojo, PARAR);
    verdazo = setTimeout(encender, PASAR);
}

function ambar() {
    document.getElementById("vehiculo").src = "imaxes_semaforo/semaforo_ambar.jpg";
}

function rojo() {
    document.getElementById("peaton").src = "imaxes_semaforo/semaforo_peaton_verde.jpg";
    document.getElementById("vehiculo").src = "imaxes_semaforo/semaforo_rojo.jpg";
}

function peatones() {
    clearInterval(amarillo);
    clearInterval(rojazo);
    clearInterval(verdazo);
    rojo();
    setTimeout(encender, CAMINA);    
}

function apagar() {
    clearInterval(amarillo);
    clearInterval(rojazo);
    clearInterval(verdazo);
    document.getElementById("inicio").style.display = "";
    document.getElementById("apagar").style.display = "none";
    document.getElementById("peaton").src = "imaxes_semaforo/semaforo_peaton_apagado.jpg";
    document.getElementById("vehiculo").src = "imaxes_semaforo/semaforo_apagado.jpg";
}
