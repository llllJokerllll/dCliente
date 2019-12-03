var contador;
var x = 0;

function iniciar() {
    
    document.getElementById("texto1").value = x;
    x++;
    document.getElementById("inicio").style.display='none';

    contador = setTimeout("iniciar()", 1000);
    
}

function parar() {
    
    clearTimeout(contador);
}

function continuar() {
    
    iniciar();
}

function reset() {
    
    x = 0;
    document.getElementById("texto1").value = x;
    document.getElementById("inicio").style.display='';
}