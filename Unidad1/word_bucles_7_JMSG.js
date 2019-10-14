var dia = prompt("Por favor, introduzca el día del mes");
var mes = prompt("Por favor, introduzca el mes");
var ano = prompt("Por favor, introduzca el año");
var fecha = false;

function esBisiesto(a){ 
    if (((a % 4 == 0) && (a % 100 != 0)) || (a % 400 == 0)) {
        let bisiesto = true;
        return(bisiesto);
    } else {
        let bisiesto = false;
        return(bisiesto);
    }
}

if (esBisiesto(ano) == true) {
    if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia <= 31)) {
        fecha = true;
    } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia <= 30)) {
        fecha = true;
    } else if (mes == 2 && dia <= 29) {
        fecha = true;
    }
} else if (esBisiesto(ano) == true) {
    if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia <= 31)) {
        fecha = true;
    } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia <= 30)) {
        fecha = true;
    } else if (mes == 2 && dia <= 28) {
        fecha = true;
    }
}

if (fecha = true) {
    console.log("La fecha introducida es correcta");
} else {
    console.log("La fecha introducida es incorrecta");
}