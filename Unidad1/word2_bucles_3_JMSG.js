function secuenciaFarey(n) {
    var num = new int[100];
    var den = new int[100];
    var termos = 2;
    var existen_novos_termos = true;

    num[0] = 0;
    den[0] = 1;
    num[1] = 1;
    den[1] = 1;

    while (existen_novos_termos == true) {
        existen_novos_termos = false;
        for (let i = 0; i < termos - 1; i++) {
            if (den[i] + den[i+1] <= n) {
                inserir_termo(num, den, termos, i);
                existen_novos_termos = true;
                termos++;
            }
        }
    }
    return mostrar_termos(num, den, termos);
}

function mostar_termos (num, den, termos) {
    for (let i = 0; i < termos; i++) {
        if (i == 0) {
            document.write(num[i], den[i]);
        } else {
            document.write(num[i], den[i]);
        }
    }
}

function inserir_termo(num, den, termos, i) {
    for (let j = termos; j > i; j--) {
        num[j] = num[j - 1];
        den[j] = den[j - 1];
    }
    num[i + 1] = num[i] + num[i + 2];
    den[i + 1] = den[i] + den[i + 2]
}

var numero = parseInt(prompt("Por favor, introduzca un número entero positivo"));

console.log(secuenciaFarey(numero));