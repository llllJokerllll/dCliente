var frase = prompt("Por favor, introduzca una frase");
var arrayFrase = frase.split(" ");
var palabraMax = frase[0];
var longPalaMax = frase[0].length;

for ( let i = 1; i < arrayFrase.length; i++ ) {
    if ( palabraMax.length < arrayFrase[i].length ) {
        palabraMax = arrayFrase[i];
        longPalaMax = arrayFrase[i].length;
    }
}

console.log(palabraMax);
console.log(longPalaMax);