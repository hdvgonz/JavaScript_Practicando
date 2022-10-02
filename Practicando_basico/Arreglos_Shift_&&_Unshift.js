const palabras  = ['hola', 'Spray', 'Elite',
                    'Risa', 'roncar']

let shifted = palabras.shift() //elimina primer ellemento
let unshifted = palabras.unshift('nuevoElemento') //inserta elemento en la primer posicion

console.log(palabras, shifted, unshifted)