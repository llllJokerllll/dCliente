function numPrimitiva ( x ) {
    let num = Math.round( Math.random() * x );
    return num;
}

function numReintegro ( x ) {
    let num = Math.round( Math.random() * x )
    return num;
}

var combinacion = [];

for ( let i = 1; i < 8; i++ ) {
    combinacion.push( numPrimitiva( 49 ) );
}

for ( let i = 0; i < 7; i++ ){
    if ( combinacion[i] == combinacion[0] || combinacion[i] == combinacion[1] || combinacion[i] == combinacion[2] || combinacion[i] == combinacion[3]  || combinacion[i] == combinacion[4] || combinacion[i] == combinacion[5] ) {
        combinacion[i] = numPrimitiva( 49 );
    }
}    

combinacion.push( numReintegro ( 10 ) );

console.log(combinacion);