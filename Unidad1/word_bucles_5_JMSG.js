var altura = parseInt(prompt("Por favor, introduzca la altura del triángulo"));
var i = 1;
var j = "*";
var k = " ";

if (altura < 2) {
    do {
        alert("Introduce un número entero mayor o igual que 2");
        altura = parseInt(prompt("Por favor, introduzca la altura del triángulo"));
    }
    while (altura < 2);
    for (i = 1; i <= altura; i++) {
        console.log(j.repeat(i));
    }
    console.log("");
    for (i = altura; i > 0; i--) {
        console.log(j.repeat(i));
    }
    console.log("");
    for (i = 1; i <= altura; i++) {
        console.log(k.repeat(altura - i) + j.repeat(i));
    }
    console.log("");
    for (i = altura; i > 0; i--) {
        console.log(k.repeat(altura - i) + j.repeat(i));
    }
    console.log("");
    for (i = 1; i <= altura; i++) {
        console.log(" *".repeat(i));
    }
} else {
    for (i = 1; i <= altura; i++) {
        console.log(j.repeat(i));
    }
    console.log("");
    for (i = altura; i > 0; i--) {
        console.log(j.repeat(i));
    }
    console.log("");
    for (i = 1; i <= altura; i++) {
        console.log(k.repeat(altura - i) + j.repeat(i));
    }
    console.log("");
    for (i = altura; i > 0; i--) {
        console.log(k.repeat(altura - i) + j.repeat(i));
    }
    console.log("");
    for (i = 1; i <= altura; i++) {
        console.log(" *".repeat(i));
    }
}