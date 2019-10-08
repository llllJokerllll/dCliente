var num1 = parseInt(prompt("Por favor, ingrese la base de la potencia"));
var maxPotencia = parseInt(prompt("Por favor, ingrese a cuanto quiere elevar la base"));

for (let pot = 1; pot <= maxPotencia; pot++) {
    let result = Math.pow(num1, pot);
    console.log(result);
}

