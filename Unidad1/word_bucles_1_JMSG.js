var num1 = parseInt(prompt("Por favor, ingrese un número entero", 0));
var notaL = "";

for (i = 1; i <= num1; i++) {
    let nombre = prompt("Por favor, introduzca el nombre del alumno/a");
    let nota = parseInt(prompt("Por favor, introduzca la nota"));
    switch (nota) {
        case 0:
            notaL = "cero";
            break;
        case 1:
            notaL = "uno";
            break;
        case 2:
            notaL = "dos";
            break;
        case 3:
            notaL = "tres";
            break;
        case 4:
            notaL = "cuatro";
            break;
        case 5:
            notaL = "cinco";
            break;
        case 6:
            notaL = "seis";
            break;
        case 7:
            notaL = "siete";
            break;
        case 8:
            notaL = "ocho";
            break;
        case 9:
            notaL = "nueve";
            break;
        case 10:
            notaL = "diez";
    }

    console.log(nombre + " ha obtenido un " + notaL);
}