var salario = parseFloat(prompt("Por favor, introduzca su salario."));
var tipoContrato = prompt("Por favor, introduzca su tipo de contrato.", "I/D");
tipoContrato = tipoContrato.toUpperCase();
var cobra, baseimp;

const ssocial = 0.047;
const fprof = 0.001;
const ci = 0.015;
const cd = 0.020;
const t1 = 0.019;
const t2 = 0.024;
const t3 = 0.030;
const t4 = 0.037;
const t5 = 0.045;

if (isNaN(salario)) {
    alert("El salario debe ser un valor numérico");
} else if (tipoContrato == "I" || tipoContrato == "D") {
    if (tipoContrato == "I") {
        cobra = (salario -= ((salario * ci) + (salario * ssocial) +(salario * fprof)));
    } else {
        cobra = (salario -= ((salario * cd) + (salario * ssocial) +(salario * fprof)));
    }
} else {
    alert("Por favor, introduzca un valor correcto para I/D"); 
}

baseimp = salario * 14;

if (baseimp >= 0 && baseimp <= 12450) {
    cobra -= 14 / (baseimp * t1);
} else if (baseimp > 12450 && baseimp <= 20200) {
    cobra -= 14 / ((12450 * t1) - (baseimp - 12450) * t2);
} else if (baseimp > 20200 && baseimp <= 35200) {
    cobra -= 14 / ((12450 * t1) - (20200 - 12450) * t2 - (baseimp - 20200) * t3);
} else if (baseimp > 35200 && baseimp <= 60000) {
    cobra -= 14 / ((12450 * t1) - (20200 - 12450) * t2 - (35200 - 20200) * t3 - (baseimp - 35200) * t4);
} else if (baseimp > 60000) {
    cobra -= 14 / ((12450 * t1) - (20200 - 12450) * t2 - (35200 - 20200) * t3 - (60000 - 35200) * t4 - (baseimp - 60000) * t5);
}

alert("El salario neto es: " + cobra);
