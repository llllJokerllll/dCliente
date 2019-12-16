var miVentana;
var resultadoValido = "Resultados Válidos\n";
var resultadoInvalido = "Resultados Inválidos\n";

function validarDatos() {  
    if (document.formulario.Nombre.value.length == 0 || !isNaN(document.formulario.Nombre.value)) {
        resultadoInvalido += "Nombre: " + document.formulario.Nombre.value + "\n";
    } else {
        resultadoValido += "Nombre: " + document.formulario.Nombre.value + "\n";
    }
    if (document.formulario.PrimerApellido.value.length == 0 || !isNaN(document.formulario.PrimerApellido.value)) {
        resultadoInvalido += "Primer Apellido: " + document.formulario.PrimerApellido.value + "\n";
    } else {
        resultadoValido += "Primer Apellido: " + document.formulario.PrimerApellido.value + "\n";
    }
    if (document.formulario.SegundoApellido.value.length == 0 || !isNaN(document.formulario.SegundoApellido.value)) {
        resultadoInvalido += "Segundo Apellido: " + document.formulario.SegundoApellido.value + "\n";
    } else {
        resultadoValido += "Segundo Apellido: " + document.formulario.SegundoApellido.value + "\n";
    }
    if (document.formulario.Genero.value.length == 0) {
        resultadoInvalido += "Genero: " + document.formulario.Genero.value + "\n";
    } else {
        resultadoValido += "Genero: " + document.formulario.Genero.value + "\n";
    }
    if (document.formulario.Edad.value.length == 0 || document.formulario.Edad.value >= 151 || document.formulario.Edad.value <= -1) {
        resultadoInvalido += "Edad: " + document.formulario.Edad.value + "\n";
    } else {
        resultadoValido += "Edad: " + document.formulario.Edad.value + "\n";
    }
    if (document.formulario.Pais.value.length == 0) {
        resultadoInvalido += "Pais: " + document.formulario.Pais.value + "\n";
    } else {
        resultadoValido += "Pais: " + document.formulario.Pais.value + "\n";
    }
    if (document.formulario.Ccc.value.length == 0 || document.formulario.Ccc.value.length < 20 || document.formulario.Ccc.value.length > 20 || isNaN(document.formulario.Ccc.value)) {
        resultadoInvalido += "C.C.C.: " + document.formulario.Ccc.value + "\n";
    } else {
        resultadoValido += "C.C.C.: " + document.formulario.Ccc.value + "\n";
    }
    if (document.formulario.Cuenta.value.length == 0) {
        resultadoInvalido += "Cuenta: " + document.formulario.Cuenta.value + "\n";
    } else {
        resultadoValido += "Cuenta: " + document.formulario.Cuenta.value + "\n";
    }
    if (document.formulario.Sucursal.value.length == 0) {
        resultadoInvalido += "Sucursal: " + document.formulario.Sucursal.value + "\n";
    } else {
        resultadoValido += "Sucursal: " + document.formulario.Sucursal.value + "\n";
    }
    if ( miVentana == null || miVentana.closed ) {
        miVentana = window.open( "", "resultados", "height=500, width=500" );
        miVentana.document.write(resultadoValido + resultadoInvalido);
    }

}

function obtenerDigito(valor) {
    valores = new Array(1, 2, 4, 8, 5, 10, 9, 7, 3, 6);
    control = 0;
    for (i = 0; i <= 9; i++)
        control += parseInt(valor.charAt(i)) * valores[i];
    control = 11 - (control % 11);
    if (control == 11) control = 0;
    else if (control == 10) control = 1;
    return control;
}