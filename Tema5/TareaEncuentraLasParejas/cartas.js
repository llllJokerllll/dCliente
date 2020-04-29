const id = (dir) => document.getElementById(dir);
const VIDAS_INICIO = 5;
const LADO_TABLA = 4;
const MUSICA = new Audio("audio/pista1.mp3");

var imagenes,
    tabla,
    carta1,
    carta2,
    vidasActuales,
    espera,
    parejas;

window.addEventListener('load', iniciarEventos);

function iniciarEventos() {
    id("jugar").addEventListener('click', jugarPartida);
}

function cargarCartas() {
    imagenes = [
        "1C", "1D", "1P", "1T",
        "2C", "2D", "2P", "2T",
        "3C", "3D", "3P", "3T",
        "4C", "4D", "4P", "4T",
        "5C", "5D", "5P", "5T",
        "6C", "6D", "6P", "6T",
        "7C", "7D", "7P", "7T",
        "8C", "8D", "8P", "8T",
        "9C", "9D", "9P", "9T",
        "10C", "10D", "10P", "10T",
        "black_joker", "jack_of_clubs", "jack_of_diamonds", "jack_of_hearts",
        "jack_of_spades", "king_of_clubs", "king_of_diamonds", "king_of_hearts",
        "king_of_spades", "queen_of_clubs", "queen_of_diamonds", "queen_of_hearts",
        "queen_of_spades", "red_joker"
    ];
    for (i = 0; i < imagenes.length; i++) {
        imagenes[i] = "cards/" + imagenes[i] + ".png";
    }
}

function seleccionar(e) {
    if (!espera) {
        if (carta1 == undefined) {
            carta1 = e.target;
            carta1.src = tabla[carta1.id.split("_")[1]];
        } else if (carta1 !== e.target) { 
            carta2 = e.target;
            carta2.src = tabla[carta2.id.split("_")[1]];
            if (carta1.src == carta2.src) { 
                carta1.removeEventListener("click", seleccionar);
                carta2.removeEventListener("click", seleccionar);
                parejas++;
                carta1 = undefined;
                carta2 = undefined;
            } else {
                espera = true;
                if (--vidasActuales == 0) {
                    if (!confirm("Te has quedado sin vidas :(\n¿Deseas seguir jugando?")) {
                        jugarPartida();
                    }
                }
                setTimeout(function () {
                    carta1.src = "cards/backcard.png";
                    carta2.src = "cards/backcard.png";
                    carta1 = undefined;
                    carta2 = undefined;
                    espera = false;

                }, 1000, carta1, carta2);


            };
            id("vidas").innerHTML = "Vidas restantes: " + vidasActuales;
            id("parejas").innerHTML = "Parejas encontradas: " + parejas;
            if (parejas == LADO_TABLA * LADO_TABLA / 2) {
                alert("Felicidades, has ganado la partida");
                id("mensaje").innerHTML = "Felicidades, has ganado la partida";
            }
        }
    }
}

function generarTabla() {
    let cartas = 0;
    id("tabla").innerHTML = "";
    for (let i = 0; i < LADO_TABLA; i++) {
        id("tabla").innerHTML += "<td>";
        for (let j = 0; j < LADO_TABLA; j++) {
            id("tabla").innerHTML += "<img src=\"cards/backcard.png\" width=111 heigth=166 id=\"carta_" + cartas++ + "\">";
        }
        id("tabla").innerHTML += "</td>";
    }
    for (let i = 0; i < LADO_TABLA * LADO_TABLA; i++) {
        id("carta_" + i).addEventListener("click", seleccionar);
    }
}

function generarCartas() {
    let cartasTabla = new Set();
    while (cartasTabla.size < (LADO_TABLA * LADO_TABLA) / 2) {
        cartasTabla.add(imagenes[Math.floor(Math.random() * imagenes.length)]);
    }
    tabla = (new Array(...Array.from(cartasTabla), ...Array.from(cartasTabla)));
    tabla.sort((a, b) => {
        return Math.floor(Math.random() * 3 - 1);
    })
}

function jugarPartida() {
    vidasActuales = VIDAS_INICIO;
    parejas = 0;
    cargarCartas();
    generarCartas();
    generarTabla();
    id("playMusica").addEventListener('click', playMusica);
    id("stopMusica").addEventListener('click', stopMusica);
    id("parejas").innerHTML = "Parejas encontradas: " + parejas;
    id("vidas").innerHTML = "Vidas restantes: " + vidasActuales;
    if (parejas == LADO_TABLA * LADO_TABLA / 2) {
        alert("Felicidades, has ganado la partida");
        id("mensaje").innerHTML = "Felicidades, has ganado la partida";
    }
}

function playMusica() {
    MUSICA.play();
}

function stopMusica() {
    MUSICA.pause();
}