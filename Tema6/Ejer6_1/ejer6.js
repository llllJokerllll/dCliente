const id = (id) => document.getElementById(id);
const creaElem = (elemento) => document.createElement(elemento);

window.onload = () => {

    // Arrays del formulario
    let fieldsets = [
        ["DATOS PERSONALES", "datosPersonales"],
        ["OTROS DATOS DE INTERÉS", "otrosDatos"]
    ];

    //Datos personales
    let datos = [
        ["Nombre (*): ", "nombre", "text"],
        [" Primer apellido (*): ", "ap1", "text"],
        [" Segundo apellido (*): ", "ap2", "text"]
    ];

    let sexo = [
        ["Hombre", ["type=radio", "name=sexo", "value=H"]],
        ["Mujer", ["type=radio", "name=sexo", "value=M"]]
    ];

    let edad = [
        [" Menor de 20 ", ["type=radio", "name=edad", "value=20-"]],
        [" 20-35 ", ["type=radio", "name=edad", "value=20-35"]],
        [" 36-50 ", ["type=radio", "name=edad", "value=35-50"]],
        [" Mayor de 50 ", ["type=radio", "name=edad", "value=50+"]]
    ];

    let pais = [
        ["Selecciona un país...", ["hidden=true", "value=null", "selected=true"]],
        ["España", ["name=pais", "id=pais_esp", "value=esp"]],
        ["Portugal", ["name=pais", "id=pais_por", "value=por"]],
        ["Francia", ["name=pais", "id=pais_fra", "value=fra"]],
        ["Alemania", ["name=pais", "id=pais_ale", "value=alm"]],
        ["Italia", ["name=pais", "id=pais_ita", "value=ita"]]
    ];

    // Otros datos de interés
    let temas = [
        ["Libros", ["type=checkbox", "id=tema_1", "name=tema_1", "value=libros"]],
        ["Cursos", ["type=checkbox", "id=tema_2", "name=tema_2", "value=cursos"]],
        ["Apuestas", ["type=checkbox", "id=tema_3", "name=tema_3", "value=apuestas"]],
        ["Viajes", ["type=checkbox", "id=tema_4", "name=tema_4", "value=viajes"]],
        ["Seguros", ["type=checkbox", "id=tema_5", "name=tema_5", "value=seguros"]],
        ["Idiomas", ["type=checkbox", "id=tema_6", "name=tema_6", "value=Idiomas"]],
        ["Informática", ["type=checkbox", "id=tema_7", "name=tema_7", "value=informatica"]],
        ["Música", ["type=checkbox", "id=tema_8", "name=tema_8", "value=musica"]],
        ["Empleo", ["type=checkbox", "id=tema_9", "name=tema_9", "value=empleo"]]
    ];

    // Título
    let titulo = creaElem("H1");
    titulo.appendChild(document.createTextNode("FORMULARIO DE DATOS Los datos marcados con un * son obligatorios"));
    document.body.append(titulo);

    // Creación del formulario
    let form = creaElem("FORM");
    form.setAttribute("id", "form");
    document.body.append(form);

    // Creación Fieldsets
    fieldsets.forEach(atributo => {
        let fieldset = creaElem("FIELDSET");
        let legend = creaElem("LEGEND");
        legend.appendChild(document.createTextNode(atributo[0]));
        fieldset.setAttribute("id", atributo[1]);
        fieldset.setAttribute("name", atributo[1]);

        fieldset.appendChild(legend);
        id("form").appendChild(fieldset);
    });

    // Creación DIV1
    let parrafo = creaElem("DIV");
    parrafo.setAttribute("id", "d1");
    id("datosPersonales").appendChild(parrafo);

    // Creación Datos Personales
    datos.forEach(campo => {
        let label = creaElem("LABEL");
        label.appendChild(document.createTextNode(campo[0]));
        label.setAttribute("for", campo[1]);

        let input = creaElem("INPUT");
        input.setAttribute("id", campo[1]);
        input.setAttribute("name", campo[1]);
        input.setAttribute("type", campo[2]);
        input.setAttribute("required", true);
        
        id("d1").appendChild(label);
        id("d1").appendChild(input);
    });

    // Salto de linea
    let linea1 = creaElem("BR");
    id("d1").appendChild(linea1);

    // Creación Campo Sexo
    let campoSexo = creaElem("LABEL");
    campoSexo.appendChild(document.createTextNode("Sexo (*): "));
    sexo.forEach(campo => {
        let radio = creaElem("INPUT");
        campo[1].forEach(atr => {
            radio.setAttribute(atr.split("=")[0], atr.split("=")[1]);
        });

        campoSexo.appendChild(radio);

        let label = creaElem("LABEL");
        label.appendChild(document.createTextNode(campo[0]));
        label.setAttribute("for", campo[1]);

        campoSexo.appendChild(label);
    });

    id("d1").appendChild(campoSexo);

    // Salto de linea
    let linea2 = creaElem("BR");
    id("d1").appendChild(linea2);

    // Creación Campo Edad
    let campoEdad = creaElem("LABEL");
    campoEdad.appendChild(document.createTextNode("Grupo de edad (*): "));
    edad.forEach(campo => {
        let radio = creaElem("INPUT");
        campo[1].forEach(atr => {
            radio.setAttribute(atr.split("=")[0], atr.split("=")[1]);
        });

        campoEdad.appendChild(radio);

        let label = creaElem("LABEL");
        label.appendChild(document.createTextNode(campo[0]));
        label.setAttribute("for", campo[1]);

        campoEdad.appendChild(label);
    });

    id("d1").appendChild(campoEdad);

    // Salto de linea
    let linea3 = creaElem("BR");
    id("d1").appendChild(linea3);
    
    // Creación Campo Paises
    let paises = creaElem("LABEL");
    paises.appendChild(document.createTextNode("País de nacimiento (*): "));
    let select = creaElem("SELECT");
    pais.forEach(campo => {
        let option = creaElem("OPTION");
        option.appendChild(document.createTextNode(campo[0]));
        campo[1].forEach(atr => {
            option.setAttribute(atr.split("=")[0], atr.split("=")[1]);
        });
        select.appendChild(option);
    });
    paises.appendChild(select);
    id("d1").appendChild(paises);

    // Creación otros datos de interés
    let subTitulo = creaElem("P");
    subTitulo.appendChild(document.createTextNode("¿Está usted interesado en alguno de estos temas? Otros temas:"));

    // Salto de linea
    let linea4 = creaElem("BR");
    subTitulo.appendChild(linea4);

    // Creación de la lista de otros temas
    let lista = creaElem("UL");
    let aux = 1
    temas.forEach(campo => {
        let li = creaElem("LI");
        let tema = creaElem("INPUT");
        campo[1].forEach(atr => {
            tema.setAttribute(atr.split("=")[0], atr.split("=")[1]);
        });
        li.appendChild(tema);
        li.appendChild(document.createTextNode(campo[0]));
        lista.appendChild(li);
        if (aux % 3 == 0) {
            // Salto de linea
            let linea = creaElem("BR");
            lista.appendChild(linea);
        }
        aux++;
    });    
    subTitulo.appendChild(lista);
    id("otrosDatos").appendChild(subTitulo);
        
    // Creación del TextArea
    let textArea = creaElem("TEXTAREA");
    textArea.setAttribute("id", "otrosTemas");
    textArea.setAttribute("name", "otrosTemas");
    textArea.setAttribute("style", "height: 60px; width: 180px;");
    textArea.setAttribute("placeholder", "Escriba aquí otros temas de su interés...");
    id("otrosDatos").appendChild(textArea);

    // Creación de los botones
    let enviar = creaElem("BUTTON");
    enviar.appendChild(document.createTextNode("Enviar Datos"));
    enviar.setAttribute("type", "submit");
    form.appendChild(enviar);

    let borrar = creaElem("BUTTON");
    borrar.appendChild(document.createTextNode("Limpiar Datos"));
    borrar.setAttribute("type", "reset");
    form.appendChild(borrar);
}
