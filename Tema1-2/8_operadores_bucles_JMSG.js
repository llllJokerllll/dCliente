var num1 = parseInt(prompt("Por favor, ingrese el número para la tabla de multiplicar", 0));
var num2 = parseInt(prompt("Por favor, ingrese el número para la tabla de sumar", 0));
var num3 = parseInt(prompt("Por favor, ingrese el número para la tabla de dividir", 0));

for (i = 1; i <= 10; i++) {
    let result = num1 * i;
    console.log(num1 + " x " + i + " = " + result);
}

for (i = 0; i <= 10; i++) {
    let result = num2 + i;
    console.log(num2 + " + " + i + " = " + result);
}

for (i = 1; i <= 10; i++) {
    let result = num3 / i;
    console.log(num3 + " / " + i + " = " + result);
}
