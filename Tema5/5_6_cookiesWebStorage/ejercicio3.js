const form = document.getElementById("pago");
const button = document.getElementById("enviar");

const nombre = document.getElementById("nombre");
const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");
const pais = document.getElementById("pais");
const numtarjeta = document.getElementById("numtarjeta");

var validacion = {
    nombre: false,
    dia: false,
    mes: false,
    ano: false,
    pais: false,
    numtarjeta: false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

nombre.addEventListener('input', function () {
    if (nombre.validity.valueMissing) {
        nombre.setCustomValidity("Debe de introducir un Nombre");
    } else if (nombre.validity.patternMismatch) {
        nombre.setCustomValidity("Formato de nombre erroneo");
    } else {
        nombre.setCustomValidity("");
        validacion.nombre = true;
    }
});

dia.addEventListener('input', function () {
    if (dia.validity.valueMissing) {
        dia.setCustomValidity("Debe de introducir un día");
    } else if (dia.validity.patternMismatch) {
        dia.setCustomValidity("Formato de día erroneo");
    } else {
        dia.setCustomValidity("");
        validacion.dia = true;
    }
});

mes.addEventListener('input', function () {
    if (mes.validity.valueMissing) {
        mes.setCustomValidity("Debe de introducir un mes con números");
    } else if (mes.validity.patternMismatch) {
        mes.setCustomValidity("Formato de mes erroneo");
    } else {
        mes.setCustomValidity("");
        validacion.mes = true;
    }
});

ano.addEventListener('input', function () {
    if (ano.validity.valueMissing) {
        ano.setCustomValidity("Debe de introducir un año");
    } else if (ano.validity.patternMismatch) {
        ano.setCustomValidity("Formato de año erroneo");
    } else {
        ano.setCustomValidity("");
        validacion.ano = true;
    }
});

pais.addEventListener('input', function () {
    if (pais.validity.valueMissing) {
        pais.setCustomValidity("Debe de introducir un País");
    } else {
        pais.setCustomValidity("");
        validacion.pais = true;
    }
});

numtarjeta.addEventListener('input', function () {
    if (numtarjeta.validity.valueMissing) {
        numtarjeta.setCustomValidity("Debe de introducir un número de Tarjeta");
    } else if (numtarjeta.validity.patternMismatch) {
        numtarjeta.setCustomValidity("Formato de número de Tarjeta erroneo");
    } else {
        numtarjeta.setCustomValidity("");
        validacion.numtarjeta = true;
    }
});

function validateForm() {
    const formValues = Object.values(validacion);
    const valido = formValues.findIndex(value => value == false);
    (valido == -1 && confirm("Desea enviar el formulario?")) ? form.submit() : alert("Formulario inválido"); 
}