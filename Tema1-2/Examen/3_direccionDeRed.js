function decimalBinario ( n ) {
    
    var resultado;
    
    resultado = toString( n, 2);

    return resultado;
}

var octeto1 = parseInt(prompt("Por favor, introduzca el primer octeto de la dirección ip comprendido entre 0 y 255"));
var octeto2 = parseInt(prompt("Por favor, introduzca el segundo octeto de la dirección ip comprendido entre 0 y 255"));
var octeto3 = parseInt(prompt("Por favor, introduzca el tercero octeto de la dirección ip comprendido entre 0 y 255"));
var octeto4 = parseInt(prompt("Por favor, introduzca el cuarto octeto de la dirección ip comprendido entre 0 y 255"));
var mascara1 = parseInt(prompt("Por favor, introduzca el primer conjunto de la máscara comprendido entre 8 y 23"));
var mascara2 = parseInt(prompt("Por favor, introduzca el segundo conjunto de la máscara comprendido entre 8 y 23"));
var mascara3 = parseInt(prompt("Por favor, introduzca el tercero conjunto de la máscara comprendido entre 8 y 23"));
var mascara4 = parseInt(prompt("Por favor, introduzca el conjunto de la máscara comprendido entre 8 y 23"));


if ( octeto1 < 0 || octeto1 > 255 || octeto2 < 0 || octeto2 > 255 || octeto3 < 0 || octeto3 > 255 || octeto4 < 0 || octeto4 > 255 ) {
    alert("Error la dirección IP no es válida")
} else {
    octeto1 = decimalBinario(octeto1);
    console.log(octeto1);
}