var num1 = parseInt(prompt("Por favor, introduzca un número"));

do {
    alert("Introduce un número positivo menor que 20");
    num1 = parseInt(prompt("Por favor, introduzca un número"));
}
while (num1 < 0 || num1 > 20 )