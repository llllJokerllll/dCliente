var num1 = parseInt(prompt("Por favor, ingrese un número entero positivo"));
num1 = num1.toString();
var digitos = num1.length;


var suma = function(num1) {
if(0<num1) {
    return (num1 % 10) + suma(Math.floor(num1 / 10));
  }
  return num1;
};

alert("El número " + num1 + " tiene " + digitos + " y su suma es " + suma(num1));