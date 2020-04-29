window.onload = () => {
    const id = (id) => document.getElementById(id);
    const crearEle = (element) => document.createElement(element);

    const crearTabla = () => {
        let alto = parseInt(prompt("Por favor, introduzca el número de filas"));
        let ancho = parseInt(prompt("Por favor, introduzca el número de columnas"));

        let tabla = crearEle("TABLE");
        tabla.setAttribute("border", 1);
        for (let i = 0; i < alto; i++) {
            let linea = crearEle("TR");
            tabla.appendChild(linea);
            for (let j = 0; j < ancho; j++) {
                let columna = crearEle("TD");
                columna.appendChild(document.createTextNode("fila " + i + ", columna " + j));
                columna.addEventListener("click", eventoClickCelda);
                tabla.appendChild(columna);
            }
        }
        id("creartabla").setAttribute("disabled", true);
        id("tabla").insertBefore(tabla, id("creartabla"));
    };
    
    const eventoClickCelda = (e) => {
        let celda = e.target;
        celda.setAttribute("style", "border-color: red;");
        let input = crearEle("INPUT");
        let child = celda.childNodes[0];

        if (celda.hasChildNodes()) {
            celda.removeChild(child);
            input.value = child.textContent;
        }

        input.setAttribute("type", "text");
        document.addEventListener("change", eventoEnviarInput);
        celda.appendChild(input);
        input.focus();
    };

    const eventoEnviarInput = (e) => {
        let input = e.target;
        let celda = input.parentElement;
        celda.setAttribute("style", "border-color: black;")
        celda.appendChild(document.createTextNode(input.value));
        celda.removeChild(input);
        celda.removeEventListener("click", eventoClickCelda);
    };

    id("creartabla").addEventListener("click", () => {
        crearTabla();
    });
};
