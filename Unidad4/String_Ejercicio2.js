var numDni = prompt("Por favor, introduzca los 8 dígitos de su DNI + su letra","12345678Q");
const DNILETRA = "TRWAGMYFPDXBNJZSQVHLCKE";
var numerosDni = parseInt(numDni.substring(0, 8));
var letraDni = numDni.substr(-1).toUpperCase();

if ( DNILETRA.charAt(numerosDni % 23) != letraDni) {
    console.log("El DNI NO es válido");
} else {
    console.log("El DNI es válido");
}
