var fechaInicio = new Date();

window.onload = () => {
    const contenedor = document.getElementById('cuestionario');
    const resultados = document.getElementById('resultados');
    const botonEnviar = document.getElementById('enviar');

    const preguntas = [{
            pregunta: "¿Cuáles fueron los primeros nuevos campeones introducidos en League Of Legends después de los primeros 17 campeones?",
            respuestas: {
                a: "Singed y Zilean",
                b: "Twitch y Amumu",
                c: "Anivia y Taric",
                d: "Warwick y Soraka"
            },
            correcta: "a"
        },
        {
            pregunta: "Katarina, Garen y Rek´Sai compraten una misma característica. ¿Cuál es?",
            respuestas: {
                a: "Todos odian a Ahri",
                b: "No tienen habilidades de rango",
                c: "Sus habilidades no cuestan maná",
                d: "Los tres están considerados como nivel 3 de dificultad"
            },
            correcta: "c"
        },
        {
            pregunta: "¿Qué utiliza Caitlyn como cebo en sus trampas?",
            respuestas: {
                a: "Pastelitos",
                b: "Bollos",
                c: "Cerezas",
                d: "Nada"
            },
            correcta: "a"
        },
        {
            pregunta: "¿Cuál es el nombre de la ultimate de Ekko?",
            respuestas: {
                a: "Alteración del tiempo",
                b: "Convergencia paralela",
                c: "Fisura temporal",
                d: "Retroceso"
            },
            correcta: "c"
        },
        {
            pregunta: "¿Cuál de estos campeones no es de Shurima?",
            respuestas: {
                a: "Skarner",
                b: "Cassiopeia",
                c: "Rammus",
                d: "Sivir"
            },
            correcta: "b"
        }
    ];

    function creaCuestionario() {
        const salida = [];

        preguntas.forEach(
            (preguntaActual, numeroPregunta) => {

                const respuestas = [];

                for (letra in preguntaActual.respuestas) {

                    respuestas.push(
                        `<label>
                    <input type="radio" name="pregunta${numeroPregunta}" value="${letra}">
                    ${letra} :
                    ${preguntaActual.respuestas[letra]}
                  </label>`
                    );
                }

                salida.push(
                    `<div class="pregunta"> ${preguntaActual.pregunta} </div>
                <div class="respuestas"> ${respuestas.join('')} </div>`
                );
            }
        );

        contenedor.innerHTML = salida.join('');
    };

    function mostrarResultados() {
        const contRespuestas = contenedor.querySelectorAll('.respuestas');

        let numCorrect = 0;
        let numRespuestas = 0;

        preguntas.forEach((preguntaActual, numeroPregunta) => {

            const contRespuesta = contRespuestas[numeroPregunta];
            const selector = `input[name=pregunta${numeroPregunta}]:checked`;
            const respuestaUser = (contRespuesta.querySelector(selector) || {}).value;

            if (respuestaUser != undefined) {
                numRespuestas++;
            }
            if (respuestaUser === preguntaActual.correcta) {
                numCorrect++;

                contRespuestas[numeroPregunta].style.color = 'lightgreen';
            } else {

                contRespuestas[numeroPregunta].style.color = 'red';
            }
        });

        let campos = document.querySelectorAll(':checked')
        document.querySelectorAll('li img').forEach(img => img.remove());
        if (campos.length == 5) {
            let puntos = 0;
            campos.forEach(campo => {
                puntos += parseInt(campo.value);
                let imagen = document.createElement("img");
                imagen.setAttribute("src", campo.parentNode.parentNode.style.color == 'lightgreen' ? "img/correcto.jpg" : "img/falso.jpg");
                imagen.setAttribute("width", "15px");
                imagen.setAttribute("height", "15px");
                campo.parentNode.append(imagen);
            });
        }

        if (numRespuestas == 5) {
            let fechaFin = new Date();
            let tiempo = (Math.abs(Math.round((fechaFin - fechaInicio) / 1000)));
            resultados.innerHTML = `Resultado:<br> ${numCorrect} of ${preguntas.length} <br>${numCorrect / 5 * 100}% <br> Has tardado ${tiempo} segundos en completar el cuestionario.`;
        } else {
            resultados.innerHTML = 'No has respondido a todas las preguntas';
        }
    };

    creaCuestionario();

    botonEnviar.addEventListener('click', mostrarResultados);
}