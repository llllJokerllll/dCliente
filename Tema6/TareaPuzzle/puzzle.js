window.onload = () => {
    const id = (dir) => document.getElementById(dir);
    const crear = (elemento) => document.createElement(elemento);
    const ALTURA = 3;
    const ANCHO = 5;
    var imagenes = new Array();
    var total = 24;

    function drop(evt) {
        evt.preventDefault();
        let imagen = document.getElementById(evt.dataTransfer.getData("imagen"));
        let inicio = imagen.parentNode;
        let destino = evt.target.parentNode;
        imagen.style.opacity = 1;
        evt.target.style.opacity = 1;


        if (destino.tagName == "TD") {
            destino.appendChild(imagen);
            inicio.appendChild(evt.target);
            if (destino.id + ".png" == imagen.id && evt.target.draggable == true) {
                imagen.setAttribute("draggable", false);
                imagen.removeEventListener("drop", drop);
                imagen.parentNode.removeEventListener("dragover", arrastrar);
                total--;
            }
            if (inicio.id + ".png" == evt.target.id) {
                evt.target.setAttribute("draggable", false)
                evt.target.removeEventListener("drop", drop);
                evt.target.parentNode.removeEventListener("dragover", arrastrar);
                total--;
            }
            if (total <= 0) {
                alert("Felicidades, has ganado")
            }
        }
    }

    function arrastrar(evt) {
        evt.preventDefault();
    }

    function cargarImagenes() {
        for (i = 0; i <= ALTURA; i++) {
            for (j = 0; j <= ANCHO; j++) {
                let imagen = crear("img");
                imagen.setAttribute("draggable", "true");
                imagen.setAttribute("src", "imagen/img_" + i + "-" + j + ".png");
                imagen.setAttribute("id", "imagen/img_" + i + "-" + j + ".png");
                imagen.setAttribute("class", "imagen");
                imagenes.push(imagen);
                imagen.addEventListener("dragstart", (evt) => {
                    evt.dataTransfer.setData("imagen", evt.target.id);
                    evt.target.style.opacity = 0.5;
                });
            }
        }
        total = imagenes.length;
        imagenes.sort((im1, im2) => Math.floor(Math.random() * 3) - 1)
    }

    function crearTabla() {
        cargarImagenes()

        let tabla = crear("table");
        tabla.setAttribute("class", "puzzle");

        for (i = 0; i <= ALTURA; i++) {
            let fila = crear("tr");
            for (j = 0; j <= ANCHO; j++) {
                let celda = crear("td");

                celda.setAttribute("id", "imagen/img_" + i + "-" + j);
                celda.appendChild(imagenes.shift())
                fila.appendChild(celda);
                celda.addEventListener("drop", drop);
                celda.addEventListener("dragover", arrastrar)
            }
            tabla.appendChild(fila);
        }
        id("divPuzzle").appendChild(tabla);
    }

    crearTabla();
}