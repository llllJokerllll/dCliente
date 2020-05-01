window.onload = () => {
    if (typeof(Storage) != "undefined") {
        const id = (dir) => document.getElementById(dir);
        const actualizar = () => {
            id("saludo").innerHTML = "Hola " + localStorage.getItem("nombre") + "!!!";
            id("contador").innerHTML = "Contador: " + localStorage.getItem("numVeces");
        };
        const incrementar = () => {
            localStorage.setItem("numVeces", +localStorage.getItem("numVeces") + 1);
            actualizar();
        }

        id("incrementar").addEventListener("click", incrementar);
        id("decrementar").addEventListener("click", () => {
            localStorage.setItem("numVeces", localStorage.getItem("numVeces") - 1);
            actualizar();
        })
        id("logout").addEventListener("click", () => {
            localStorage.setItem("nombre", alert("Se hace cerrado la sesion correctamente"))
            localStorage.clear();
            location.reload();
        })

        if (localStorage.getItem("nombre") == null) {
            localStorage.setItem("nombre", prompt("Por favor, introduzca su nombre"));
            localStorage.setItem("numVeces", 0);
        } else {
            alert("Hola " + localStorage.getItem("nombre"));
            incrementar();
        }

        actualizar();


    } else {
        alert("Web Storage no soportado");
    }
}