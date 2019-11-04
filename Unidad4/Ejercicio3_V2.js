function numPrimitiva ( x ) {
    let num = Math.round( Math.random() * x );
    return num;
}

function numReintegro ( x ) {
    let num = Math.round( Math.random() * x )
    return num;
}

Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
  });
  
var combinacion = [];

while ( combinacion.length <= 6 ) {
    combinacion.push( numPrimitiva( 49 ) );
    combinacion = combinacion.unique();
}

 

combinacion.push( numReintegro ( 10 ) );

console.log(combinacion);