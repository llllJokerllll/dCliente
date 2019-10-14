var altura = parseInt(prompt("Por favor, introduzca la anchura del rombo"));
var i = 1;

if (altura < 2) {
    do {
        alert("Introduce un número entero mayor o igual que 2");
        altura = parseInt(prompt("Por favor, introduzca la altura del triángulo"));
    }
    while (altura < 2);
    for (i = 1; i <= altura; i++) {
        console.log(" ".repeat(altura - i) + " *".repeat(i));
    }
    for (i = altura - 1; i > 0; i--) {
        console.log(" ".repeat(altura - i) + " *".repeat(i));
    }
} else {
    console.log("");
    for (i = 1; i <= altura; i++) {
        console.log(" ".repeat(altura - i) + " *".repeat(i));
    }
    for (i = altura - 1; i > 0; i--) {
        console.log(" ".repeat(altura - i) + " *".repeat(i));
    }
}