var dia = prompt("Por favor, introduzca el día de su nacimiento");
var mes = prompt("Por favor, introduzca el mes de su nacimiento");
var ano = prompt("Por favor, introduzca el año de su nacimiento");
var fechaNacimiento = new Date(ano, mes, dia);

var fecha = new Date();

var anosDiferencia = fecha.getFullYear() - fechaNacimiento.getFullYear();
var mesesDiferencia;

if ( fechaNacimiento.getMonth() < fecha.getMonth() ) {
    mesesDiferencia = fecha.getMonth() - fechaNacimiento.getMonth() + 1;
} else {
    anosDiferencia -= 1;
    mesesDiferencia = Math.abs(fechaNacimiento.getMonth() - 12 + 1);   
}


console.log("Tienes " + anosDiferencia + " años y " + mesesDiferencia + " meses.");