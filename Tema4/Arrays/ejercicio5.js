class Cola {
    constructor(elementos, array) {
        this._elementos = elementos;
        this._array = array;
    }

    get elementos() {
        return this.elementos;
    }

    set elementos(elementos) {
        this._elementos = elementos;
    }

    get array() {
        return this.elementos;
    }

    set array(array) {
        this._array = array;
    } 
    
    creaArrayVacio() {
        var array = [];
        return array;
    }

    anadirElemento(e) {
        array.push(e);
        return this.array;
    }

    extraerElemento() {
        this.array.shift();
        return this.array;
    }

    consultarNumeroElementos() {
        return this.array.length();
    }

    estaVacia() {
        return (this.array.length() > 0 ? false : true);
    }
}