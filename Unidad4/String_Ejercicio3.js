var frase = prompt("Por favor, introduzca una frase");
var arrayFrase = frase.split(" ");

for ( let i = 0; i < arrayFrase.length; i++ ) {
    for ( let j = 0; j < arrayFrase[i].length; j++ ) {
        console.log(arrayFrase[i].charAt(j));
    }
    console.log(arrayFrase[i].length);
    console.log("");
}

console.log(arrayFrase.length);