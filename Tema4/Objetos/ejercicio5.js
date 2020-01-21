class Persona {
    constructor(nombre, apellidos, fechaNacimiento) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._fechaNacimiento = fechaNacimiento;
    }

    calcularEdad() {
        var fecha = this._fechaNacimiento;
        var arrayFecha = fecha.split('-');
        var fechaNacimiento = new Date(arrayFecha[0], arrayFecha[1], arrayFecha[2]);

        var fecha = new Date();

        var anosDiferencia = fecha.getFullYear() - fechaNacimiento.getFullYear();

        if (fechaNacimiento.getMonth() < fecha.getMonth()) {
            mesesDiferencia = fecha.getMonth() - fechaNacimiento.getMonth() + 1;
        } else {
            anosDiferencia -= 1;
            mesesDiferencia = Math.abs(fechaNacimiento.getMonth() - 12 + 1);
        }

        return anosDiferencia;
    };

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellidos() {
        return this._apellidos;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(fechaNacimiento) {
        this._fechaNacimiento = fechaNacimiento;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellidos, fechaNacimiento ) {
        super(nombre, apellidos, fechaNacimiento);
    }

    tiempoHastaLaJubilación() {
        var res = 67 - calcularEdad();

        return res;
    }
}

class Contrato {
    constructor(fechaAlta, descripcion, tipo, duracion, fechaBaja) {
        this._fechaAlta = fechaAlta;
        this._descripcion = descripcion;
        this._tipo = tipo;
        this._duracion = duracion;
        this._fechaBaja = fechaBaja;
    }

    get fechaAlta() {
        return this._fechaAlta;
    }

    set fechaAlta(fechaAlta) {
        this._fechaAlta = fechaAlta;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get tipo() {
        return this._tipo;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }

    get duracion() {
        return this._duracion;
    }

    set duracion(duracion) {
        this._duracion = duracion;
    }

    get fechaBaja() {
        return this._fechaBaja;
    }

    set fechaBaja(fechaBaja) {
        this._fechaBaja = fechaBaja;
    }
}

var paco = new Empleado("Paco","Merte","09-03-1988");
console.log(paco.tiempoHastaLaJubilación());