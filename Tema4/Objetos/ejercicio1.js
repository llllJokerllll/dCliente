var alumno = {
    "Nombre":"Juan",
    "Apellidos":"Perez",
    "Dni":"11222333A",
    "Modulos":["prog", "code", "dwcs", "dwcc"],
    "Provincia":"Ourense"};

console.log(alumno.Nombre);
console.log(alumno.Modulos[0]);

class Alumno1 {
    constructor( Nombre, Apellidos, Dni, Modulos, Provincia = "Ourense" ) {
    this._Nombre = Nombre;
    this._Apellidos = Apellidos;
    this._Dni = Dni;
    this._Modulos = Modulos;
    this._Provincia = Provincia;
    }

    get Nombre() {
        return this._Nombre;
    }

    set Nombre(nom) {
        this._Nombre = nom;
    }

    get Apellidos() {
        return this._Apellidos;
    }

    set Apellidos(ape) {
        this._Apellidos = ape;
    }

    get Dni() {
        return this._Dni;
    }

    set Dni(dn) {
        this._Dni = dn;
    }

    get Modulos() {
        return this._Modulos;
    }

    set Modulos(mod) {
        this._Modulos = mod;
    }

    get Provincias() {
        return this._Provincias;
    }

    set Provincias(pro) {
        this._Provincias = pro;
    }

}