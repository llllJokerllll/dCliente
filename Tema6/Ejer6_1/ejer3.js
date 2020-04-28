window.onload = () => {
    const id = (id) => document.getElementById(id);

    const tagName = (elemento) => document.getElementsByTagName(elemento);

    const crearTagName = (elemento, valor) => {
        let elemento1 = document.createElement(elemento);
        let valor1 = document.createTextNode(valor);
        elemento1.appendChild(valor1);
        return elemento1;
    }

    tagName("input")[0].addEventListener("click", () => id("lista").appendChild(crearTagName("li", prompt("Por favor, escriba aqui"))));
    tagName("input")[1].addEventListener("click", () => {
        id("lista").appendChild(crearTagName("li", prompt("Por favor, escriba aqui")));
        aux = Array.from(tagName("li"));
        aux.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
        aux.forEach(element => id("lista").appendChild(element));
    });
}