function descompNumPrimos() {
       var n1;
       var factorPrimo = 2;
       var contadorCadaFactor=0;
       var flujoDeSalida="";
    
       while (n1 > 1){
         contadorCadaFactor = 0;
    
         while ( (n1 % factorPrimo) == 0) {
           //encotrado factor
           ++contadorCadaFactor;
           n1 /= factorPrimo;
         }
         if (contadorCadaFactor > 0) {
           flujoDeSalida=flujoDeSalida+" "+ ("(" + factorPrimo + "^" + (contadorCadaFactor) + ") ");
    
         }
         factorPrimo++;
       }
    }

    var n1 = prompt("Por favor, introduzca un número");

console.log(descompNumPrimos(n1));