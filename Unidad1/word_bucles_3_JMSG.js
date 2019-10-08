var num1 = parseInt(prompt("Por favor, ingrese un número entero"));
var i = 1;
var potencia = 0;
var factorial = 1;

while (i <= num1) {
    factorial *= i;
    potencia = Math.pow(num1,i);
    i++;
}

alert(factorial);
alert(potencia);