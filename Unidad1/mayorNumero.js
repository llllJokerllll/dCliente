var num1 = prompt("Por favor, introduzca su primer número.");
var num2 = prompt("Por favor, introduzca su segundo número.");
var num3 = prompt("Por favor, introduzca su tercer número.");

if (num1 > num2 || num1 > num3) {
    alert("Su primer número es el mayor de los 3");
} else if (num2 > num3) {
    alert("Su segundo número es el mayor de los 3");
} else {
    alert("Su tercer número es el mayor de los 3");
}

