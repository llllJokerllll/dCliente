window.onload = () => {
    const id = (id) => document.getElementById(id);
    
    const texto = id("texto");

    id("crearparrafo").addEventListener("click", () => {
        if (texto.value != "") {
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(texto.value));
            id("div1").appendChild(p);
        }
    });

    id("crearimagen").addEventListener("click", () => {
        let img = document.createElement("img");
        img.setAttribute("src", "img/" + prompt("nombre de la imagen"));
        img.setAttribute("alt", prompt("Descripción"));
        id("crearimagen").hidden = true;
        id("borrarimagen").hidden = false;
        id("div1").appendChild(img);
    });

    id("borrarimagen").addEventListener("click", () => {
        let imagen = id("div1").firstChild;
        while (imagen.nodeName != "IMG") {
            imagen = imagen.nextSibling;
        }
        id("div1").removeChild(imagen);
        id("borrarimagen").hidden = true;
        id("crearimagen").hidden = false;
    });

    id("borrarultimo").addEventListener("click", () => {
        if (id("div1").lastChild.nodeName == "P") {
            id("div1").removeChild(id("div1").lastChild);
        } else if (id("div1").firstChild.previousSibling.nodeName == "P") {
            id("div1").removeChild(id("div1").lastChild.previousSibling);
        }
    });

    id("borrarprimero").addEventListener("click", () => {
        if (id("div1").firstChild.nodeName == "P") {
            id("div1").removeChild(id("div1").firstChild);
        } else if (id("div1").firstChild.nextSibling.nodeName == "P") {
            id("div1").removeChild(id("div1").firstChild.nextSibling);
        }
    });

    id("sustituirprimero").addEventListener("click", () => {
        if (id("div1").firstChild.nodeName == "P") {
            id("div1").firstChild.textContent = "vacio";
        } else if (id("div1").firstChild.nextSibling.nodeName == "P") {
            id("div1").firstChild.nextSibling.textContent = "vacio";
        }
    });
}