alert("Hola, Bienvenido");

var person;
var apellidos;
var edad;

person = prompt("Introduce tu nombre");
apellidos = prompt("Introduce tus apellidos");
edad = prompt("Introduce tu edad");

alert("Su nombre es: " + person);
alert("Sus apellidos son: " + apellidos);
alert("Su edad es: " + edad);

document.write(person + " ");
document.write(apellidos + " ");
document.write(edad);

document.getElementById("person").innerHTML = person;
document.getElementById("apellidos").innerHTML = apellidos;
document.getElementById("edad").innerHTML = edad;

document.getElementById("prueba1").innerHTML = "El usuario tiene nombre \"" + person + "\"" + "\nSus apellidos son \"" + apellidos + "\"" + "\ny tiene \"" + edad + "\" años."; 