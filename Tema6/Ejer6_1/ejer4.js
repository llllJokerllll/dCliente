window.onload = () => {
    const id = (id) => document.getElementById(id);

    const seleccion = (valor) => id(valor)[id(valor).selectedIndex];

    const crearTagName = (elemento, valor) => {
        let elemento1 = document.createElement(elemento);
        let valor1 = document.createTextNode(valor);ç
        elemento1.appendChild(valor1);
        return elemento1;
    }

    id("btn1").addEventListener("click", () => {
        let element = seleccion("lista");
        (element != null) ? id("provincias").appendChild(element) : "";
    });

    id("btn2").addEventListener("click", () => {
        let element = seleccion("provincias");
        (element != null) ? id("lista").appendChild(element) : "";
    });
}