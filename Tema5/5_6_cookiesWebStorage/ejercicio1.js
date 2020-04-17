window.onload = () => {
    if (typeof(Storage) != "undefined") {
        const id = (dir) => document.getElementById(dir);
        const actualizar = () => {
            id("saludo").innerHTML = "Hola " + sessionStorage.getItem("nombre") + "!!!";
            id("contador").innerHTML = "Contador: " + sessionStorage.getItem("numVeces");
        };
        const incrementar = () => {
            sessionStorage.setItem("numVeces", +sessionStorage.getItem("numVeces") + 1);
            actualizar();
        }

        id("incrementar").addEventListener("click", incrementar);
        id("decrementar").addEventListener("click", () => {
            sessionStorage.setItem("numVeces", sessionStorage.getItem("numVeces") - 1);
            actualizar();
        })
        id("logout").addEventListener("click", () => {
            sessionStorage.setItem("nombre", alert("Se hace cerrado la sesion correctamente"))
            sessionStorage.clear();
            location.reload();
        })

        if (sessionStorage.getItem("nombre") == null) {
            sessionStorage.setItem("nombre", prompt("Por favor, introduzca su nombre"));
            sessionStorage.setItem("numVeces", 0);
        } else {
            alert("Hola " + sessionStorage.getItem("nombre"));
            incrementar();
        }

        actualizar();


    } else {
        alert("Web Storage no soportado");
    }
}