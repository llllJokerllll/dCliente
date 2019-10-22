function secuenciaFarey(int n) {
    int []num = new int[100];
    int []den = new int[100];
    int termos = 2;
    boolean existen_novos_termos = true;

    num[0] = 0;
    den[0] = 1;
    num[1] = 1;
    den[1] = 1;

    while (existen_novos_termos) {
        existen_novos_termos = false;
        for (int i = 0; i < termos - 1; i++) {
            if (den[i] + den[i+1] <= n) {
                inserir_termo(num, den, termos, i);
                existen_novos_termos = true;
                termos++;
            }
        }
    }
    mostrar_termos(num, den, termos);
}

function mostar_termos (int[] num, int[] den, int termos) {
    for (int i = 0; i < termos; i++) {
        if (i == 0) {
            System.out.printf("%d/%d", num[i], den[i]);
        } else {
            System.out.printf(", %d/%d", num[i], den[i]);
        }
    }
}

function inserir_termo(int[] num, int[] den, int termos, int i) {
    for (int j = termos; j > i; j--) {
        num[j] = num[j - 1];
        den[j] = den[j - 1];
    }
    num[i + 1] = num[i] + num[i + 2];
    den[i + 1] = den[i] + den[i + 2]
}
