var peso = prompt("Por favor, introduzca su peso en Kg.", 50);
var estatura = prompt("Por favor, introduzca su estatura en cm.", 180);

if(isNaN(peso) || isNaN(estatura)) {
	alert("Por favor, introduzca solamente numeros.");
}else{
	estatura *= 0.01;
	let imc = peso / (estatura ^ 2);
	if (imc <= 15) {
		alert("Su masa corporal está entre 15 o menos, y su rango es Delgadez muy severa");
	}else if (imc >= 15 && imc <= 15.9) {
		alert("Su masa corporal está entre 15 - 15.9, y su rango es Delgadez severa");
	}else if (imc >= 16 && imc <= 18.4) {
		alert("Su masa corporal está entre 16 - 18.4, y su rango es Delgadez");
	}else if (imc >= 18.5 && imc <= 24.9) {
		alert("Su masa corporal está entre 18.5 - 24.9, y su rango es Peso Saludable");
	}else if (imc >= 25 && imc <= 29.9) {
		alert("Su masa corporal está entre 25 - 29.9, y su rango es Sobrepeso");
	}else if (imc >= 30 && imc <= 34.9) {
		alert("Su masa corporal está entre 30 - 34.9, y su rango es Obesidad Moderada");
	}else if (imc >= 35 && imc <= 39.9) {
		alert("Su masa corporal está entre 35 - 39.9, y su rango es Obesidad severa");
	}else{
		alert("Su masa corporal está entre 40 o más, y su rango es Obesidad muy severa(obesidad mórbida)");
	}
}