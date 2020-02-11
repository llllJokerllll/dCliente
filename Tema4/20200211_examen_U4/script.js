var contadorCodigo = 0;
var contadorLibros = 0;
var librosCocina = new Array();

class LibroDeCocina {
    constructor(titulo, isbn, edicion, autor, codigo) {
        this.titulo = titulo;
        this.isbn = isbn;
        this.edicion = edicion;
        this.autor = autor;
        this.codigo = codigo;
        this.recetas = new Array();
    }

    setCodigo(codigo) {
        this.codigo = codigo;
    }

    getCodigo() {
        return this.codigo;
    }

    setTitulo(titulo) {
        this.titulo = titulo;
    }

    getTitulo() {
        return this.titulo;
    }
    
    setIsbn(isbn) {
        this.isbn = isbn;
    }

    getIsbn() {
        return this.isbn;
    }

    setEdicion(edicion) {
        this.edicion = edicion;
    }

    getEdicion() {
        return this.edicion;
    }

    setAutor(autor) {
        this.autor = autor;
    }

    getAutor() {
        return this.autor;
    }

    toString() {
        return "Codigo: " + this.codigo + 
               "<br>Titulo: " + this.titulo +
               "<br>ISBN: " + this.isbn +
               "<br>Tipo de Edición: " + this.edicion +
               "<br>Autor: " + this.autor;
    }

}

class Receta {
    constructor(nombre, preparacion, ingrediente) {
        this.nombre = nombre;
        this.ingrediente = ingrediente;
        this.preparacion = preparacion;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getNombre() {
        return this.nombre;
    }

    setIngrediente(ingrediente) {
        this.ingrediente = ingrediente;
    }

    getIngrediente() {
        return this.ingrediente;
    }

    setPreparacion(preparacion) {
        this.preparacion = preparacion;
    }

    getPreparacion() {
        return this.preparacion;
    }

    toString() { 
        return "Nombre: " + this.nombre +
               "<br>Ingredientes: " + this.ingrediente +
               "<br>Preparacion: " + this.preparacion;
    }

}

function guardarLibro() {
    librosCocina.push(new LibroDeCocina(valor("titulo"), valor("isbn"), valor("tipoedicion"), valor("autor"), contadorCodigo));
    limpiarCampos();
    contadorCodigo++;
}

function anadirIng(numeroIng) {
    var arrayIng = new Array();
    var ingrediente = { nomIngr : "" , cantidad : "" , unidades : "" };
    for (let i = 0; i < numeroIng; i++ ) {
        ingrediente.nomIngr = prompt("Por favor, introduzca el nombre del ingrediente");
        ingrediente.cantidad = prompt("¿Cantidad?");
        ingrediente.unidades = prompt("¿Unidades?");
        arrayIng[i] = ingrediente;
    }
    return arrayIng;
}

function anadirReceta() {
    let numeroIng = parseInt(prompt("Por favor, introduzca el número de ingredientes"));
    let nombreR = prompt("Por favor, introduzca el nombre de la receta");
    let ingR = anadirIng(numeroIng);
    let preparacion = prompt("Por favor, introduzca el modo de preparación");
    librosCocina[contadorLibros].recetas.push(new Receta(nombreR, preparacion, ingR));
}

function limpiarCampos() {
    id("titulo").value = "";
    id("isbn").value = "";
    id("tipoedicion").value = "";
    id("autor").value = "";
}

function valor(buscarID) {
    return id(buscarID).value;
}

function id(id) {
    return document.getElementById(id);
}