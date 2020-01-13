var resultado = 0;
var arrayImpares;
var arrayPares;

function crearArrayImpares() {
    
    arrayImpares = [];
    for ( let i = 0; i < 100; i++ ) {
        if ( i % 2 != 0 ) arrayImpares.push(i);
    }
}

crearArrayImpares();

function crearArrayPares() {
    
    arrayPares = [];
    for ( let i = 0; i < 100; i++ ) {
        if ( i % 2 == 0 ) arrayPares.push(i);
    }
}

crearArrayPares();

var multiplicacion = function (num1, num2) {return num1 * num2;};

for ( let i = 0; i < arrayPares.length; i++ ) {
    resultado += multiplicacion( arrayImpares[i], arrayPares[i] ) + "\n";
}

console.log(resultado);