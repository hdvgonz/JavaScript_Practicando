const numeros = [1,2,3,4,5]

const filtrados = numeros.map( (val,i) => { 
    if (i < 3) {
        return val;
    } else {
        return 'vacio'
    }
} )

console.log(numeros)
//map siempre retorna un vector totalmente diferente
console.log(filtrados)