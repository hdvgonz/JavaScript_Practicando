class Usuario {
    constructor(nombre) {
        this._name = nombre
    }

    get name() {
        return this._name.charAt(0).toUpperCase() + this.name.slice(1);
    
    }

    set name (nombre) {
        this._name = nombre
    }
}
let usuario = new Usuario ('Dani')


console.log(usuario)
usuario.name = 'Carlos';
console.log(usuario)