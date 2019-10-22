var sumando1 = prompt("Por favor, introduzca el primer número");
var sumando2 = prompt("Por favor, introduzca el segundo número");
var resultado = prompt("Por favor, introduzca el resultado de la suma");
var aux1 = Array.from(sumando1);
var aux2 = Array.from(sumando2);
var aux3 = Array.from(resultado);
var acarreo1;

aux1[2] = parseInt(aux3[2]) - parseInt(aux2[2]);
if (parseInt(aux1[2]) < 0) {
    acarreo1 = 1;
} else {
    acarreo1 = 0;
}

if (acarreo1 == 1) {
    aux1[1] = parseInt(aux3[1]) - (parseInt(aux2[1]) + 1);
    if (parseInt(aux1[1]) < 0) {
        acarreo1 = 1;
} else {
    acarreo1 = 0;
}
} else {
    aux1[1] = parseInt(aux3[1]) - parseInt(aux2[1]);
    if (parseInt(aux1[1]) < 0) {
        acarreo1 = 1;
    } else {
        acarreo = 0;
    }
}

if (acarreo1 == 1) {
    aux1[0] = parseInt(aux3[0]) - parseInt(aux2[0]) + 1;
} else {
    aux1[0] = parseInt(aux3[0]) - parseInt(aux2[0]);
}

for (let i = 0; i < aux1.length; i++) {
    aux1[i] = Math.abs(aux1[i]);
}

console.log(aux1);
console.log(aux2);
console.log(aux3);
