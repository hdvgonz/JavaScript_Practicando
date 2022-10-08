let numero = "18x"

let edad = Number (numero)

console.log(edad)

if(isNaN(edad)) {
    console.log("no es un numero")
} else {
    if (edad > 17) {
        console.log("es mayor")
    } else {
        console.log("Es menor")
    }
}