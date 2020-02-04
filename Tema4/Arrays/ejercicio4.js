var contadorElementos = 0;

function crearArrayRandom() {
    var longitud = parseInt(prompt("Por favor, introduce la longitud del array"));
    var array = [];
    for ( let i = 0; i < longitud; i++ ) {
        array[i] = new Array(longitud);
        for ( let j = 0; j < longitud; j++ ) {
            array[i][j] = Math.floor(Math.random() * (10 - 1)) + 1;
            contadorElementos++;
        }
    }
    return array;
}

const arrayCreado = crearArrayRandom();

console.log(arrayCreado);
console.log(contadorElementos);

function sumaColumnaPar(x) {
    let suma = 0;
    for ( let i = 0; i < x.length; i++ ) {
        for ( let j = 0; j < x[i].length; j+=2 ) {
            suma += x[i][j];
        }
    }
    return suma;
}
console.log(sumaColumnaPar(arrayCreado));

function sumaVertical(x) {
    let suma = 0;
    for ( let i = 0; i < x.length; i++ ) {
        for ( let j = 0; j < x[i].length; j++ ) {
            if (i == j) {
                suma += x[i][j];
            }
        }
    }
    return suma;
}
console.log(sumaVertical(arrayCreado));

transpose = arrayCreado => arrayCreado[0].map((x,i) => arrayCreado.map(x => x[i]));
console.log(transpose(arrayCreado));

