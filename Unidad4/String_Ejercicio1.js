var nombreCompleto = prompt("Por favor, introduzca su nombre y apellidos");
var nombreSinEspacios = nombreCompleto.replace(" ", "").length;
var nombre = nombreCompleto.split(" ");


console.log(nombreSinEspacios);
console.log(nombreCompleto.toLocaleLowerCase());
console.log(nombreCompleto.toLocaleUpperCase());
console.log("Nombre: " + nombre[0] + "\nApellido 1: " + nombre[1] + "\nApellido 2: " + nombre[2]);
console.log((nombre[0].substr(0, 3) + nombre[1].substr(-3) + nombre[2].substr(-3)).toLowerCase());