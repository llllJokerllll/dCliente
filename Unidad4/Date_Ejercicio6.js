function fechaDevolucion( a, b ) {
    var a, b;
    var resultado;
    b = b * 86400 * 1000;
    var fDevolucion = a + b;

    var resultado = new Date(fDevolucion);

    return resultado.toString();
}

var fechaEntrada = new Date().getTime();

var diasPrestamo = parseInt(prompt("Por favor, introduzca los días de prestamo") );

alert(fechaDevolucion( fechaEntrada, diasPrestamo ) );