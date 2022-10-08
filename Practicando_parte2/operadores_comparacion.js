let a = 3, b = 2, c = "3"

let z = a == b //revisa sin importar el tipo
console.log(z)

z = a === c
console.log(z)

z  = b != c // no revisa tipos
console.log(z)

z = (a !== c);
console.log(z)