class NumeroRacional {
    constructor(Numerador, Denominador) {
        this._numerador = Numerador;
        this._denominador = Denominador;
    }

    get Numerador() {
        return this._numerador;
    }

    set Numerador(Numerador) {
        this._numerador = Numerador;
    }

    get Denominador() {
        return this._denominador;
    }

    set Denominador(Denominador) {
        this._denominador = Denominador;
    }
}

function simplificar(num1, num2) {
    var aux;

    if (num1 > num2) {
        aux = num2;
    } else {
        aux = num1;
    }

    for (let i = aux; i > 1; i--) {
        if (num1 % i == 0 && num2 % i == 0) {
            num1 /= i;
            num2 /= i;
        }
    }

    var res = new NumeroRacional(num1, num2);
    
    return res;
}

function suma(obj1, obj2) {
    var resDeno = obj1.Denominador * obj2.Denominador;
    var resNum = (obj1.Denominador * obj2.Numerador) + (obj2.Denominador * obj1.Numerador);

    var res = new NumeroRacional(resNum, resDeno);
    res = simplificar(res.Numerador, res.Denominador);
    
    return res;
}

function resta(obj1, obj2) {
    var resDeno = obj1.Denominador * obj2.Denominador;
    var resNum = (obj1.Denominador * obj2.Numerador) - (obj2.Denominador * obj1.Numerador);

    var res = new NumeroRacional(resNum, resDeno);
    res = simplificar(res.Numerador, res.Denominador);
    
    return res;
}

function multi(obj1, obj2) {
    var resDeno = obj1.Denominador * obj2.Denominador;
    var resNum = obj1.Numerador * obj2.Numerador;

    var res = new NumeroRacional(resNum, resDeno);
    res = simplificar(res.Numerador, res.Denominador);
    
    return res;
}

function division(obj1, obj2) {
    var resDeno = obj1.Denominador * obj2.Numerador;
    var resNum = obj1.Numerador * obj2.Denominador;

    var res = new NumeroRacional(resNum, resDeno);
    res = simplificar(res.Numerador, res.Denominador);
    
    return res;
}

function tomaDatos() {
    var numArriba = parseInt(prompt("Por favor, introduzca el numerador: "));
    var numAbajo = parseInt(prompt("Por favor, introduzca el denominador: "));

    var res = new NumeroRacional(numArriba, numAbajo);

    return res;
}

function crearArray() {
    var cantidad = parseInt(prompt("Por favor, introduzca el tamaño del Array: "));
    var array = new Array(cantidad);

    for (let i = 0; i < cantidad; i++) {
        array[i] = tomaDatos();
    }

    console.log(array);
}

var numRaci1 = new NumeroRacional(15, 45);
var numRaci2 = new NumeroRacional(25, 30);

console.log(numRaci1.Numerador + "/" + numRaci1.Denominador);
console.log(numRaci2.Numerador + "/" + numRaci2.Denominador);
console.log(simplificar(numRaci1.Numerador, numRaci1.Denominador));
console.log(suma(numRaci1, numRaci2));
console.log(resta(numRaci1, numRaci2));
console.log(multi(numRaci1, numRaci2));
console.log(division(numRaci1, numRaci2));

crearArray();