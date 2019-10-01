var salario = parseFloat(prompt("Por favor, introduzca su salario."));
var tipoContrato = prompt("Por favor, introduzca su tipo de contrato.", "I/D");
contrato = contrato.toUpperCase();

const ssocial = 0.047;
const fprof = 0.001;

if (isNaN(salario)) {
    alert("El salario debe ser un valor numérico");
} else if (contrato == "I" || contrato == "D") {
    if (contrato == "I") {
        let cobra = salario -= (cobra * ssocial);
        cobra -= (salario * fprof);
        alert(salario);
    }
} else {
    
}
}