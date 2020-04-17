window.onload = () => {
    const id = (dir) => document.getElementById(dir);

    id("ver").addEventListener("click", () => {
        alert(document.cookie)
    });
    id("crear").addEventListener("click", () => {
        let nombre = prompt("Nombre de la cookie") + "=";
        let valor = prompt("Valor de la cookie");
        let dias = parseInt((prompt("Introduce numero de dias para la expiracion")));
        let expiraEn = (dias != 0 && !isNaN(dias)) ? ";expires=" + new Date(new Date().getTime() + 24 * 3600 * 1000 * dias) : "";
        expiraEn += ";path=/;";
        document.cookie = (nombre + valor + expiraEn);
    });
    id("modificar").addEventListener("click", () => {
        let nombre = prompt("Nombre de la cookie") + "=";
        let valor = prompt("Valor de la cookie");
        let dias = parseInt((prompt("Introduce numero de dias para la expiracion")));
        let expiraEn = (dias != 0 && !isNaN(dias)) ? ";expires=" + new Date(new Date().getTime() + 24 * 3600 * 1000 * dias) : "";
        expiraEn += ";path=/;";
        document.cookie = (nombre + valor + expiraEn);
    });
    id("leer").addEventListener("click", () => {
        let nombre = prompt("Nombre de la cookie");
        let galleta = document.cookie;
        galleta.split("; ").forEach(galleta => {
            let cookies = galleta.split("=");
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i] == nombre) {
                    alert(nombre + "=" + cookies[i + 1]);
                }
            }
        });
    });
    id("borrar").addEventListener("click", () => {
        document.cookie = (prompt("Nombre de la cookie a eliminar") + "=;expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/");
    })

}