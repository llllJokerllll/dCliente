window.addEventListener('load', iniciarEventos);

function iniciarEventos() {
    document.getElementById("enviar").addEventListener('click', comprobar, false);
}

function comprobar(e) {
    if (validaNombre() && validaApellido1() && validaEmail() && validaPassword() && confirm("¿Deseas enviar el formulario?")) {
        return true;
    } else {
        e.preventDefault();
    }
}

function validaNombre() {
    var nombre = document.getElementById("campo_1");
    if (!nombre.checkValidity()) {
        if (nombre.validity.valueMissing) {
            error2(nombre, "Debe introducir un nombre");
        }
        if (nombre.validity.rangeOverflow) {
            error2(nombre, "El nombre debe de tener menos de 26 caracteres");
        }
        if (nombre.validity.PartternMismatch) {
            error2(nombre, "El nombre debe de contener caracteres(a-záéíóú ñ)");
        }
        return false;
    }
    limpiarError(nombre);
    return true;
}

function validaApellido1() {
    var apellido1 = document.getElementById("campo_2");
    if (!apellido1.checkValidity()) {
        if (apellido1.validity.valueMissing) {
            error2(apellido1, "Debe introducir un primer apellido");
        }
        if (apellido1.validity.rangeUnderflow) {
            error2(apellido1, "El apellido debe de tener menos de 36 caracteres");
        }
        if (apellido1.validity.PartternMismatch) {
            error2(apellido1, "El apellido debe contener caracteres(a-záéíóú ñ)");
        }
        return false;
    }
    limpiarError(apellido1);
    return true;
}

function validaApellido2() {
    var apellido2 = document.getElementById("campo_3");
    if (!apellido2.checkValidity()) {
        if (apellido2.validity.rangeUnderflow) {
            error2(apellido2, "El apellido debe de tener menos de 36 caracteres");
        }
        if (apellido2.validity.PartternMismatch) {
            error2(apellido2, "El apellido debe contener caracteres(a-záéíóú ñ)");
        }
        return false;
    }
    limpiarError(apellido2);
    return true;
}

function validaDireccion() {
    var direccion = document.getElementById("campo_4");
    if (!direccion.checkValidity()) {
        if (direccion.validity.PartternMismatch) {
            error2(direccion, "La dirección puede contener números, letras y caracteres /.")
        }
        return false;
    }
    limpiarError(direccion);
    return true;
}

function validaEmail() {
    var email = document.getElementById("campo_5");
    if (!email.checkValidity()) {
        if (email.validity.valueMissing) {
            error2(email, "Debe introducir un email");
        } else if (email.validity.PartternMismatch) {
            error2(email, "El correo electrónico tiene que tener xxx@xxx.xx");
        }
        return false;
    }
    limpiarError(email);
    return true;
}

function validaPassword() {
    var password = document.getElementById("campo_6");
    if (!password.checkValidity()) {
        if (password.validity.valueMissing) {
            error2(password, "Debe introducir una contraseña");
        }
        if (password.validity.rangeUnderflow) {
            error2(password, "La contraseña debe de tener al menos 8 caracteres");
        }
        if (password.validity.PartternMismatch) {
            error2(password, "La contraseña puede contener letras, números, y caracteres especiales: .-_;,$()=¿?");
        }
        return false;
    }
    limpiarError(password);
    return true;
}

function limpiarError(e) {
    e.className = "";
}

function error2(elem, mensaje) {
    document.getElementById("mensaje").innerHTML = mensaje;
    elem.className = "error";
    elem.focus();
}