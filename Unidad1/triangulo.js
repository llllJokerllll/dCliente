var base = prompt("Introduce la base del triángulo",0);
var altura = prompt("Introduce la altura del triángulo",0);

if (isNaN(base) || isNaN(altura)) {
	alert("Introduzca valores numéricos");
	} else {
	alert((base * altura) / 2);
};
