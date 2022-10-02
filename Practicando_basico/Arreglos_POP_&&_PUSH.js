const palabras  = ['hola', 'Spray', 'Elite',
                    'Risa', 'roncar']

let poped = palabras.pop() //Elimina ultimo elemento
let pushed = palabras.push('kiwi') //agregar un elemento

console.log(palabras, poped, pushed)

let test = []

test.push(poped)

console.log('Test', test)