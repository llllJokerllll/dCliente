var num = parseInt( prompt("Por favor, introduzca un número entero" ) );
var cadena = [];

for ( let i = 1; i <= num; i++ ) {
    for ( let j = 0; j <= i; j++ ) {
        if ( ( j == 1 && i == 1 ) || ( j == 1 && i == 2 ) ) {
            cadena.push( j.toString() + "/" + i.toString() );
        }
        if ( j != 0 && j != i && (j / i != 0.5 )) {
            cadena.push( j.toString() + "/" + i.toString() );
            
        }
        
    }
}
var result = cadena.sort();

/* for ( let x = 1; x < cadena.length; x++ ) {
    if ( j == 0 || j == i ) {
        cadena.splice(x,1);
        
    }
} */
console.log(result);