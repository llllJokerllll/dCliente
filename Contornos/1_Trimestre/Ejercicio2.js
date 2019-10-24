var numero = prompt("Por favor, introduzca un número entero");

function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

console.log(factorialRecursivo( numero ));