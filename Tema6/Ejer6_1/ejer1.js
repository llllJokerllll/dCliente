function numEnlaces() {
    let enlaces = document.getElementsByTagName("a");
    return enlaces;
}

function numParrafos() {
    let parrafos = document.getElementsByTagName("p");
    return parrafos;
}

function verParrafo(parrafo) {
    let parrafos = document.getElementsByTagName("p")[parrafo];
    let enlaces = parrafos.getElementsByTagName("a");
    let texto = parrafos.textContent;
    let enlace1 = enlaces[0];

    let res = "<br>El numero de enlaces en el parrafo seleccionado son: " + enlaces.length;
    res += "<br>El texto del parrafo es el siguiente: <br>" + texto;
    res += "<br>El primer enlace del parrafo es: " + enlace1;

    return res;
}

function enlaceConcreto(enlace) {
    let res = [];
    let vector = numEnlaces();
    console.log(vector);
    Array.from(vector).forEach(element => element.href == enlace ? res.push(element) : "");
    return res.length;
}

Array.from(numParrafos()).forEach(p => p.style.color = "green");
document.getElementById("info").innerHTML = "El documento tiene: " + numEnlaces().length + " enlaces.";
document.getElementById("info").innerHTML += "<br>El documento tiene: " + numParrafos().length + " parrafos.";

var parrafo = parseInt(prompt("Por favor introduzca el numero del parrafo."));
document.getElementById("info").innerHTML += verParrafo(parrafo - 1);
document.getElementById("info").innerHTML += "<br>El numero de enlaces que apuntan a http://prueba son: " + enlaceConcreto("http://prueba/");