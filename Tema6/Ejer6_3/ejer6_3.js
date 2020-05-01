var color = "rgb(255, 255, 0)";
var colorSel = "1";
var contador = 10;
var activo = false;

window.onload = () => {
    const id = (id) => document.getElementById(id);
    const crearEle = (element) => document.createElement(element);

    const crearTabla = (() => {
        let alto = 30;
        let ancho = 30;
        let tabla = crearEle("TABLE");
        let texto = document.createTextNode("Haga CLICK en cualquier celda para activar/desactivar el Pincel");
        tabla.setAttribute("id", "tabla");
        tabla.setAttribute("class", "tablerodibujo");
        for (let i = 0; i < alto; i++) {
            let fila = crearEle("TR");
            for (let j = 0; j < ancho; j++) {
                let col = crearEle("TD");
                col.setAttribute("id", contador++);
                col.setAttribute("class", "tablerodibujo");
                fila.appendChild(col);
            }
            tabla.appendChild(fila);
        }
        id("zonadibujo").appendChild(texto);
        id("zonadibujo").appendChild(tabla);
    })();

    function selColor(id) {
        let element = document.getElementById(id);
        let elementStyle = window.getComputedStyle(element);
        let elementColor = elementStyle.getPropertyValue("background-color");
        if (color != elementColor) {
            color = elementColor;
            document.getElementById(id).setAttribute("class", (document.getElementById(id).getAttribute("class") + " seleccionado"));
            document.getElementById(colorSel).setAttribute("class", "color" + colorSel);
            colorSel = id;
        }
    }

    function pintar(id) {
        if (activo) {
            document.getElementById(id).setAttribute("style", "background-color: " + color + ";");
        }
    }

    id("zonadibujo").addEventListener("click", () => {
        if (!activo) {
            activo = true;
            document.getElementById("pincel").textContent = "PINCEL ACTIVADO...";
        } else {
            activo = false;
            document.getElementById("pincel").textContent = "PINCEL DESACTIVADO...";
        }
    });

    for (let i = 1; i < 7; i++) {
        id(i).addEventListener("click", function(){selColor(i)});
    }

    for (let i = 10; i < 910; i++) {
        id(i).addEventListener("mouseover", function(){pintar(i)});
    }

}