function alumno(Nombre, Apellidos, Dni, Modulos = [], Provincia) {
    this._nombre = Nombre;
    this._apellidos = Apellidos;
    this._dni = Dni;
    this._modulos = Modulos;
    this._provincia = Provincia;
}

var alumnoPrueba = new alumno("Luis","Perez Perez","44444444Z",["daw","dam","asir"],"Ourense");
console.log(alumnoPrueba);