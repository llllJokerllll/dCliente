var contadorEdificios = -1;
var edificioActual = 0;
var edificios = new Array();

class Edificio {
    constructor(calle, numero, codigoPostal, codigo) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.codigo = codigo;
        this.plantas = new Array();
    }

    setCalle(calle) {
        this.calle = calle;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setCodigoPostal(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    getCalle() {
        return this.calle;
    }

    getNumero() {
        return this.numero;
    }

    getCodigoPostal() {
        return this.codigoPostal;
    }

    getCodigo() {
        return this.codigo;
    }

    agregarPlantasYPuertas(pl, pt) {
        for (let i = 0; i < pl; i++) {
            this.plantas.push(new Planta(pt));
            for (let j = 0; j < pt; j++) {
                this.plantas[this.plantas.length - 1].propietarios.push(new Puerta(j));
            }
        }
    }

    imprimePlantas() {
        for (let i = 0; i < this.plantas.length; i++) {
            for (let j = 0; j < this.plantas[i].propietarios.length; j++) {
                id("log").innerHTML += "Propietario del piso " + (j + 1) + " de la planta " + (i + 1) + ": " + this.plantas[i].propietarios[j].getPropietario() + "<br>";
            }
        }
    }

    toString() {
        return "Construido nuevo edificio en calle: " + this.calle + ", nº: " + this.numero + ", CP: " + this.codigoPostal + "<br>";
    }
}

class Planta {
    constructor(puertas) {
        this.puertas = puertas;
        this.propietarios = new Array();
    }

    setPuertas(puertas) {
        this.puertas = puertas;
    }

    getPuertas() {
        return this.puertas;
    }
}

class Puerta {
    constructor(numero, propietario = "") {
        this.numero = numero;
        this.propietario = propietario;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setPropietario(propietario) {
        this.propietario = propietario;
    }

    getNumero() {
        return this.numero;
    }

    getPropietario() {
        return this.propietario;
    }
}

function guardarEdificio() {
    if (valor("calle") != "" && valor("numero") != "" && valor("codigoPostal") != "") {
        edificios.push(new Edificio(valor("calle"), valor("numero"), valor("codigoPostal"), ++contadorEdificios));
        limpiarCampos();
        if (contadorEdificios > 0) {
            id("button4").disabled = false;
        }
        id("log").innerHTML += edificios[contadorEdificios];
    } else {
        id("log").innerHTML += "ERROR, ha dejado algún campo vacío<br>";
    }
}

function agregarPlyPt() {
    if (contadorEdificios != -1) {
        let numPlantas = parseInt(prompt("Por favor, introduzca el número de plantas"));
        let puertas = parseInt(prompt("Por favor, introduzca el número de puertas"));

        edificios[edificioActual].agregarPlantasYPuertas(numPlantas, puertas, edificios, edificioActual);
    }
}

function agregarPropietario() {
    if (contadorEdificios != -1 && edificios[edificioActual].plantas.length != 0) {
        let nombre = prompt("Por favor, introduzca el nombre del propietario");
        let planta = parseInt(prompt("Por favor, introduzca el número de la planta"));
        let puerta = parseInt(prompt("Por favor, introduzca el número de la puerta"));
        edificios[edificioActual].plantas[planta - 1].propietarios[puerta - 1].setPropietario(nombre);
        id("log").innerHTML += nombre + " es ahora el propietario de la puerta " + puerta + " de la planta " + planta + "<br>";
    }
}

function impPlantas() {
    if (contadorEdificios != -1) {
        edificios[edificioActual].imprimePlantas(edificios, edificioActual);
    }
}

function modificarCalle() {
    if (contadorEdificios != -1) {
        let nuevaCalle = prompt("Por favor, introduzca el nuevo nombre de la Calle");
        edificios[edificioActual].setCalle(nuevaCalle);
        id("log").innerHTML += "La calle del edificio " + edificios[edificioActual].getCodigo() + " es: " + edificios[edificioActual].getCalle() + "<br>";
    }
}

function modificarNumero() {
    if (contadorEdificios != -1) {
        let nuevoNumero = parseInt(prompt("Por favor, introduzca el nuevo Número"));
        edificios[edificioActual].setNumero(nuevoNumero);
        id("log").innerHTML += "El número del edificio " + edificios[edificioActual].getCodigo() + " es: " + edificios[edificioActual].getNumero() + "<br>";
    }
}

function modificarCodigoPostal() {
    if (contadorEdificios != -1) {
        let nuevoCodigoPostal = parseInt(prompt("Por favor, introduzca el nuevo Código Postal"));
        edificios[edificioActual].setNumero(nuevoCodigoPostal);
        id("log").innerHTML += "El código postal del edificio " + edificios[edificioActual].getCodigo() + " es: " + edificios[edificioActual].getCodigoPostal() + "<br>";
    }
}

function imprimeCalle() {
    if (contadorEdificios != -1) {
        id("log").innerHTML += "La calle del edificio " + edificios[edificioActual].getCodigo() + " es: " + edificios[edificioActual].getCalle() + "<br>";
    }
}

function imprimeNumero() {
    if (contadorEdificios != -1) {
        id("log").innerHTML += "El número del edificio " + edificios[edificioActual].getCodigo() + " es: " + edificios[edificioActual].getNumero() + "<br>";
    }
}

function imprimeCodigoPostal() {
    if (contadorEdificios != -1) {
        id("log").innerHTML += "El código postal del edificio " + edificios[edificioActual].getCodigo() + " es: " + edificios[edificioActual].getCodigoPostal() + "<br>";
    }
}

function antEdificio() {
    edificioActual--;
    if (edificioActual == 0) {
        id("button3").disabled = true;
    }
    id("button4").disabled = false;
}

function sigEdificio() {
    edificioActual++;
    if (edificioActual == edificios.length - 1) {
        id("button4").disabled = true;
    }
    id("button3").disabled = false;
}

function valor(buscarID) {
    return id(buscarID).value;
}

function id(id) {
    return document.getElementById(id);
}

function limpiarCampos() {
    id("calle").value = "";
    id("numero").value = "";
    id("codigoPostal").value = "";
}