var frase1 = prompt("Por favor, introduce una frase");
var frase2 = prompt("Por favor, introduce una segunda frase");
var frase3 = "";

if ( frase1.length >= frase2.length ) {
    for ( let i = 0; i < frase1.length; i++ ) {
        frase3 += (frase1.charAt(i) + frase2.charAt(i));
    }
} else {
    for ( let i = 0; i < frase2.length; i++ ) {
        frase3 += (frase2.charAt(i) + frase1.charAt(i));
    }
}

console.log(frase3);