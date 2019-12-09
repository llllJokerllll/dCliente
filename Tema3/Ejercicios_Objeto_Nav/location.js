function nuevoDocumento() {
    nueva = prompt("Por favor, introduzca la url de la pagina web que desea abrir");
    location.assign("http://" + nueva);
}

function recarga() {
    location.reload();
}

function sustituye() {
    nueva = prompt("Por favor, introduzca la url de la pagina web que desea abrir");
    location.replace("http://" + nueva);
}