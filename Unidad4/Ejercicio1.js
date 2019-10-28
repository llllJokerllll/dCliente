function baseCilindro ( n1 ) {

    var base = Math.PI * Math.pow( n1, 2 );
    
    return ( base );
}

function volumenCilindro ( n1, h1 ) {

    var volumen = h1 * Math.PI * Math.pow( n1, 2 );

    return ( volumen );
}

var radio = new Number(prompt("Por favor, introduzca en metros la longitud del radio")).toFixed(3);
var altura = new Number(prompt("Por favor, introduzca en metros la altura")).toFixed(3);

console.log((baseCilindro( radio ) ).toFixed(3));
console.log((volumenCilindro( radio, altura ) ).toFixed(3));