function numero( num ) {
    var caja2 = document.calculadora.textoPantalla.value;
    if (caja2 =="0" && n!="."){
 
        cajao = caja2.replace("0", "")

        document.calculadora.textoPantalla.value = cajao + n;

    }

    else{

        document.calculadora.textoPantalla.value = caja2 + n;

    }
}