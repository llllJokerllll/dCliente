class alumno {
    constructor(Nombre, Apellidos, Dni, Modulos = [], Provincia) {
        this._nombre = Nombre;
        this._apellidos = Apellidos;
        this._dni = Dni;
        this._modulos = Modulos;
        this._provincia = Provincia;
    }

    get Nombre() {
        return this._nombre;
    }

    set Nombre(Nombre) {
        this._nombre = Nombre;
    }

    get Apellidos() {
        return this._apellidos;
    }

    set Apellidos(Apellidos) {
        this._apellidos = Apellidos;
    }

    get Dni() {
        return this._dni;
    }

    set Dni(Dni) {
        this._dni = Dni;
    }

    get Modulos() {
        return this._modulos;
    }

    set Modulos(Modulos) {
        this._modulos = Modulos;
    }

    get Provincia() {
        return this._provincia;
    }

    set Provincia(Provincia) {
        this._provincia = Provincia;
    }

}

var alumnoNuevo = new alumno("Luis","Perez","44444444Z", ["daw","dam","asir"],"Ourense");
console.log(alumnoNuevo.Nombre);
console.log(alumnoNuevo.Apellidos);
console.log(alumnoNuevo.Dni);
console.log(alumnoNuevo.Modulos);
console.log(alumnoNuevo.Provincia);