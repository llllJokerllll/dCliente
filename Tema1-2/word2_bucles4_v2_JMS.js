var sumando1 = prompt("Por favor, introduzca el primer número");
var sumando2 = prompt("Por favor, introduzca el segundo número");
var resultado = prompt("Por favor, introduzca el resultado de la suma");
var aux1 = Array.from(sumando1);
var aux2 = Array.from(sumando2);
var aux3 = Array.from(resultado);
var acarreo1;
var añadido;


for (let i = aux1.length - 1; i = 0; i--) {
if (acarreo = 1) {
    añadido = 1;
} else {
    añadido = 0;
}
    aux1[i] = parseInt(aux3[i]) - parseInt(aux2[i] + añadido);
if (parseInt(aux1[i]) < 0) {
    acarreo1 = 1;
} else {
    acarreo1 = 0;
}
}


for (let i = 0; i < aux1.length; i++) {
    aux1[i] = Math.abs(aux1[i]);
}

console.log(aux1);
console.log(aux2);
console.log(aux3);
