function atras() {
    window.history.back();
}

function adelante() {
    window.history.forward();
}

function ir() {
    nueva = prompt("Por favor, introduzca cuantas posiciones quieres moverte en el histórico");
    window.history.go(parseInt(nueva));
}