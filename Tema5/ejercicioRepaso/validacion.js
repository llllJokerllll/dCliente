const vNombre = /^([A-ZÁÉÍÓÚºª]+[\s]*)+([A-ZÁÉÍÓÚºª])$/;
const vApellidos = /^([A-ZÁÉÍÓÚºª]+[\s]*)+([A-ZÁÉÍÓÚºª])$/;
const vNif = /^\d{8}-[a-zA-Z]$/;
const vEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const vFecha = /^(0[1-9]|[1-2]\d|3[01])(\/|-)(0[1-9]|1[012])(\/|-)(\d{4})$/;
const vTelefono = /^[0-9]{9}$/;
const vHora = /\d{2}:\d{2}/;

var error1 = "Errores: \n";

window.addEventListener('load', iniciarEventos);
window.addEventListener('unload', cerrarEventos);

function iniciarEventos() {
    cargarCookie();
    document.getElementById("enviar").addEventListener('click', comprobar, false);
    document.getElementById("nombre").addEventListener('focusout', upperCase, false);
    document.getElementById("apellidos").addEventListener('focusout', upperCase, false);
    document.getElementById("errores").innerHTML = error1;
}

function cargarCookie() {
    // Aquí cargamos la cookie de intentos
    if (typeof (Storage) != "undefined") {
        const id = (dir) => document.getElementById(dir);
        const actualizar = () => {
            id("intentos").innerHTML = "Numero de intentos: " + localStorage.getItem("numVeces");
        };
        const incrementar = () => {
            localStorage.setItem("numVeces", +localStorage.getItem("numVeces") + 1);
            actualizar();
        }

        id("enviar").addEventListener("click", incrementar);

        actualizar();

    } else {
        alert("Web Storage no soportado");
    }
}

function upperCase() {
    var x = document.getElementById(this.id).value;
    document.getElementById(this.id).value = x.toUpperCase();
}

function comprobar(e) {
    if (validaNombre() && validaApellido() && validaEdad() && validaNif() && validaEmail() && validaProvincia() && validaFecha() && validaTlf() && validaHora() && confirm('Pulsa aceptar para enviar el formulario')) {
        return true;
    } else {
        e.preventDefault();
        document.getElementById("errores").innerHTML = error1;
    }
}

function error(e) {
    e.className = 'error';
    e.focus();
}

function limpiarError(e) {
    e.className = '';
}

function validaNombre() {
    var n = document.getElementById('nombre');
    limpiarError(n);
    if (n.value == '') {
        error1 = 'El campo Nombre está vacío\n';
        error(n);
        return false;
    } else if (!isNaN(parseInt(n.value))) {
        error1 = 'El campo Nombre no acepta números\n';
        error(n);
        return false;
    } else if (vNombre.test(n.value)) {
        return true;
    }
}

function validaApellido() {
    var n = document.getElementById('apellidos');
    limpiarError(n);
    if (n.value == '') {
        error1 = 'El campo está vacío\n';
        error(n);
        return false;
    } else if (!isNaN(parseInt(n.value))) {
        error1 = 'Este campo no acepta números\n';
        error(n);
        return false;
    } else if (vApellidos.test(n.value)) {
        return true;
    }
}

function validaEdad() {
    var n = document.getElementById('edad');
    limpiarError(n);
    if (n.value == '') {
        error1 = 'El campo está vacío\n';
        error(n);
        return false;
    } else if (n.value <= 0 || n.value >= 105) {
        error1 = 'La edad no está en un rango válido\n';
        error(n);
        return false;
    }
    return true;
}

function validaNif() {
    var n = document.getElementById('nif');
    limpiarError(n);
    if (n.value == '') {
        error1 = 'El campo está vacío\n';
        error(n);
        return false;
    } else if (vNif.test(n.value)) {
        return true;
    } else {
        error1 = 'El NIF no es correcto\n';
        error(n);
        return false;
    }
}

function validaEmail() {
    var n = document.getElementById('email');
    limpiarError(n);
    if (n.value == '') {
        error1 = 'El campo está vacío\n';
        error(n);
        return false;
    } else if (vEmail.test(n.value)) {
        return true;
    } else {
        error1 = 'El e-Mail no es correcto\n';
        error(n);
        return false;
    }
}

function validaProvincia() {
    var n = document.getElementById('provincia');
    limpiarError(n);
    if (n.value == "0") {
        error1 = 'No has seleccionado provincia\n';
        error(n);
        return false;
    } else {
        return true;
    }
}

function validaFecha(){
    var n = document.getElementById('fecha');
    limpiarError(n);
    if (n.value == '') {
        error1 = 'El campo está vacío\n';
        error(n);
        return false;
    } else if (vFecha.test(n.value)) {
        return true;
    } else {
        error1 = 'La fecha no es correcta\n';
        error(n);
        return false;
    }
}

function validaTlf(){
    var n = document.getElementById('telefono');
    limpiarError(n);
    if (n.value == '') {
        error1 = 'El campo está vacío\n';
        error(n);
        return false;
    } else if (!vTelefono.test(n.value)) {
        error1 = 'Teléfono incorrecto\n';
        error(n);
        return false;
    } else {
        return true;
    }
}

function validaHora(){
    var n = document.getElementById('hora');
    limpiarError(n);
    if (n.value == '') {
        error1 = 'El campo está vacío\n';
        error(n);
        return false;
    } else if (vHora.test(n.value)) {
        return true;
    } else {
        error1 = 'La hora no es correcta\n';
        error(n);
        return false;
    }
}

function cerrarEventos() {
    localStorage.setItem("numVeces", 0, 1);
}