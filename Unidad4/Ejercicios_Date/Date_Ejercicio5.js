function ayer() {
    var fechaHoy = new Date();
    var fechaAyer = fechaHoy - 86400 * 1000;
    fechaAyer = new Date(fechaAyer);
    
    var diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    var mesesAno = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    var diaAyer = diasSemana[fechaAyer.getDay()];
    var mesAyer = mesesAno[fechaAyer.getMonth()];
    var anoAyer = fechaAyer.getFullYear();

    var diaAnterior = "Ayer fué " + diaAyer + " de " + mesAyer + " del " + anoAyer;

    return diaAnterior;
}

console.log(ayer());