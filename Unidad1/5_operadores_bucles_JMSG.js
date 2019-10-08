var contador, pares, multiplosTres;
var media = 0;
var promedio = 0;
var pares = [];
var multiplosTres = [];

function multiple(valor, multiple) {
    resto = valor % multiple;
    if (resto == 0)
        return true;
    else
        return false;
}

for(contador = 0; contador < 101; contador++) {
    media = media + contador;
    if (contador % 2 == 0) {
        pares.push(contador);
    }
    if (multiple (contador, 3))
        multiplosTres.push(contador);
}
promedio = media / 100;


alert("El promedio de los 100 primeros números naturales es: " + promedio);
alert("Los números pares de los 100 primeros números naturales son : " + pares);
alert("Los números multiplos de 3 en los 100 primeros números naturales son : " + multiplosTres);