var numeros = [1,3,5,7,9,11];

//1.a
(function(){ console.log(numeros.reduce(function (a, b){ return a + b })) })();

//1.b
var suma2 = 0;
numeros.forEach(function (a) { suma2 += a;});
console.log(suma2);

//1.c
numeros.forEach((function(){ console.log(numeros.reduce(function (a, b){ return a + b })) })());

//1.d
var suma3 = numeros.reduce((a, b) => a + b);
console.log(suma3);