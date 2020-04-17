window.addEventListener('load', iniciar);

function iniciar() {
    document.getElementById('enviar').addEventListener('click', validar, false);
    document.getElementById('nombre').addEventListener('blur', mayus, false);
    document.getElementById('apellidos').addEventListener('blur', mayus, false);
}

function validar(e) {
    if (validaNombre() && validaApellido() && validaEdad() && validaNif() && validaEmail() && validaProvincia() && validaFecha() && validaTlf() && validaHora() && confirm('Pulsa aceptar para enviar el formulario')) {
        return true;
    } else {
        e.preventDefault();
    }
}

function error(e) {
    e.className = 'error';
    e.focus();
}

function limpiarError(e) {
    e.className = '';
}

function mayus() {
    var n = document.getElementById('nombre');
    var m = document.getElementById('apellidos');
    n.value = n.value.toUpperCase();
    m.value = m.value.toUpperCase();
}

function validaNombre() {
    var n = document.getElementById('nombre');
    limpiarError(n);
    if (n.value == '') {
        alert('El campo está vacío');
        error(n);
        return false;
    } else if (!isNaN(parseInt(n.value))) {
        alert('Este campo no acepta números');
        error(n);
        return false;
    } else {
        return true;
    }
}

function validaApellido() {
    var n = document.getElementById('apellidos');
    limpiarError(n);
    if (n.value == '') {
        alert('El campo está vacío');
        error(n);
        return false;
    } else if (!isNaN(parseInt(n.value))) {
        alert('Este campo no acepta números');
        error(n);
        return false;
    } else {
        return true;
    }
}

function validaEdad() {
    var n = document.getElementById('edad');
    limpiarError(n);
    if (n.value <= 0 || n.value >= 105) {
        alert('La edad no está en un rango válido');
        error(n);
        return false;
    }
    return true;
}

function validaNif() {
    var n = document.getElementById('nif');
    limpiarError(n);
    var expr = /^[0-9]{8}[a-zA-Z]{1}$/g;
    if (n.value.match(expr)) {
        return true;
    } else {
        alert('El NIF no es correcto');
        error(n);
        return false;
    }
}

function validaEmail() {
    var n = document.getElementById('email');
    limpiarError(n);
    var expr = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (n.value.match(expr)) {
        return true;
    } else {
        alert('El e-Mail no es correcto');
        error(n);
        return false;
    }
}

function validaProvincia() {
    var n = document.getElementById('provincia');
    limpiarError(n);
    if (n.selectedIndex==0){
        alert('No has seleccionado provincia');
        error(n);
        return false;
    } else {
        return true;
    }
}

function validaFecha(){
    var n = document.getElementById('fecha');
    var expr = /^(0[1-9]|[1-2]\d|3[01])(\/|-)(0[1-9]|1[012])(\/|-)(\d{4})$/;
    if (n.value.match(expr)) {
        return true;
    } else {
        alert('La fecha no es correcta');
        error(n);
        return false;
    }
}

function validaTlf(){
    var n = document.getElementById('telefono');
    if (isNaN(parseInt(n.value)) || n.value.length < 9){
        alert('Teléfono incorrecto');
        error(n);
        return false;
    } else {
        return true;
    }
}

function validaHora(){
    var n = document.getElementById('hora');
    var expr = /^(0[1-9]|[1-5]\d)(:)(0[1-9]|[1-5]\d)$/;
    if (n.value.match(expr)) {
        return true;
    } else {
        alert('La hora no es correcta');
        error(n);
        return false;
    }
}