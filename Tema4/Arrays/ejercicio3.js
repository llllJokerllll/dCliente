var Obj1 = {"nombre":"juan","edad":34};
var Obj2 = {"nombre":"eva","edad":24};
var Obj3 = {"nombre":"ana","edad":17};
var Obj4 = {"nombre":"pepe","edad":31};
var Obj5 = {"nombre":"margarita","edad":16};

//3.a
function sumarEdades(...x){
    let suma=0;
    x.map(function (a) {
        suma += a.edad;
    });
    return suma;
}
console.log(sumarEdades(Obj1,Obj2,Obj3,Obj4,Obj5));

//3.b
var alumnos = [];
alumnos.push(Obj1,Obj2,Obj3,Obj4,Obj5);
console.log(alumnos);

//3.c
var alumnosMayoresEdad = function(...x) { let vector = []; x.map(function (a) {if(a.edad >= 18) {vector.push(a);}}); return vector;};
console.log(alumnosMayoresEdad(Obj1,Obj2,Obj3,Obj4,Obj5));

//3.d
var vectorNombres = alumnos.map((nombreSalida) => nombreSalida.nombre);
console.log(vectorNombres);

//3.e
const [first, second, third] = alumnosMayoresEdad(Obj1,Obj2,Obj3,Obj4,Obj5);
console.log(first, second, third);

//4.f
var alumnosMenoresEdad = function(...x) { let vector = []; x.map(function (a) {if(a.edad < 18) {vector.push(a);}}); return vector;};
console.log(alumnosMenoresEdad(Obj1,Obj2,Obj3,Obj4,Obj5).length);

//4.g
var alumnosOrdenados = [];
alumnosOrdenados.push(Obj1,Obj2,Obj3,Obj4,Obj5);
console.log(alumnosOrdenados.sort(function(a, b){if(a.edad < b.edad){return -1;}if(a.edad > b.edad){ return 1; } return 0}));

//4.h
var Obj6 = {"nombre":"jerónimo","edad":19};
var Obj7 = {"nombre":"noa","edad":20};
var nuevos = [Obj6, Obj7];
var mayoresEdad = alumnosMayoresEdad(Obj1,Obj2,Obj3,Obj4,Obj5,...nuevos);
console.log(mayoresEdad);