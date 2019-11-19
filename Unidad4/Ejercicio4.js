function lanzarDado() {
    var numero = Math.round(Math.random() * 6 + 1);

    switch (numero) {
        case 1:
            document.getElementById("resultado").innerHTML = "<img src='imagenes/1.png'></img>";
            break;
        case 2:
            document.getElementById("resultado").innerHTML = "<img src='imagenes/2.png'></img>";
            break;
        case 3:
            document.getElementById("resultado").innerHTML = "<img src='imagenes/3.png'></img>";
            break;
        case 4:
            document.getElementById("resultado").innerHTML = "<img src='imagenes/4.png'></img>";
            break;
        case 5:
            document.getElementById("resultado").innerHTML = "<img src='imagenes/5.png'></img>";
            break;
        case 6:
            document.getElementById("resultado").innerHTML = "<img src='imagenes/6.png'></img>";
            break;
    }

}