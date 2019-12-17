var diaHoy = new Date();
var dia = diaHoy.getDate();
var mes = diaHoy.getMonth();
var ano = diaHoy.getFullYear();
var meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];

document.getElementById("fechaActual").innerHTML = "Hoy es " + dia + " de " + meses[mes] + " de " + ano + ".";


function sumarDias() {

    diaHoy.setDate( diaHoy.getDate() + parseInt(document.getElementById("texto").value));
    let masDia = parseInt(diaHoy.getDate());
    let masMes = parseInt(diaHoy.getMonth() + 1);
    let masAno = parseInt(diaHoy.getFullYear());
    document.getElementById("fechaModificada").innerHTML = masDia + "/" + masMes + "/" + masAno ;

}

function sumarMeses() {

    diaHoy.setMonth( diaHoy.getMonth() + parseInt(document.getElementById("texto").value));
    let masDia = parseInt(diaHoy.getDate());
    let masMes = parseInt(diaHoy.getMonth() + 1);
    let masAno = parseInt(diaHoy.getFullYear());
    document.getElementById("fechaModificada").innerHTML = masDia + "/" + masMes + "/" + masAno ;

}

function sumarAnos() {

    diaHoy.setFullYear( diaHoy.getFullYear() + parseInt(document.getElementById("texto").value));
    let masDia = parseInt(diaHoy.getDate());
    let masMes = parseInt(diaHoy.getMonth() + 1);
    let masAno = parseInt(diaHoy.getFullYear());
    document.getElementById("fechaModificada").innerHTML = masDia + "/" + masMes + "/" + masAno ;
}