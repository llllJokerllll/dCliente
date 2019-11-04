function numPrimitiva ( x ) {
    let num = Math.round( Math.random() * x );
    return num;
}

function numReintegro ( x ) {
    let num = Math.round( Math.random() * x )
    return num;
}
  
var combinacion = [];

while ( combinacion.length <= 6 ) {
    combinacion.push( numPrimitiva( 49 ) );
    combinacion = combinacion.filter(function(item, index, array) {
        return array.indexOf(item) === index;
      });
}

combinacion.push( numReintegro ( 10 ) );

console.log(combinacion);