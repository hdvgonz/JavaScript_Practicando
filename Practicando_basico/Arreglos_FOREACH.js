
let arreglo = [1,2,3, {}, /* empty */, 123]
let ejecuciones = 0

arreglo.forEach((valor,indice) => { 
    
    ejecuciones++
}) 

console.log('Ejecuciones', ejecuciones)
console.log('Largo del array', arreglo.length)