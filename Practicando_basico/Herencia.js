class Auto {
    pitar () {console.log("El carro pita");}
    abrirPuerta() {console.log("Se abre la puerta");}

    constructor(marca) {
        this.marca = marca;
    }
}

class Camion extends Auto {
    constructor(marca, ejes) {
        super(marca)
        this.ejes = ejes? ejes : 6;
       
    }
}


let camion = new Camion("Mazda")
console.log(camion)
console.log(camion.abrirPuerta)