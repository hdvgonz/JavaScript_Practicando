function Usuario (pNombre) {
    this.nombre = pNombre ? pNombre : "Eduardo"
    this.saludar = () => {console.log("Hola mundo")}
}



//console.log(new usuario())

let user = new Usuario()

console.log(user.nombre)


/*let usuario = { nombre: 'Daniel',
saludar() {return 'hola mundo'}
}

console.log(typeof usuario)
console.log(usuario.saludar())*/