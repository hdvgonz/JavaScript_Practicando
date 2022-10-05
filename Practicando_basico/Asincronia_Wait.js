//await -> Esperar
//async -> asincrono
async function hacerCalculo() {
    try {

        let promesa = new Promise((resolve, reject) => setTimeout(resolve,1000, 21));
        let resultado = await promesa

        console.log(resultado)
    }catch(e) {

        console.log('Error, e')

    }
  
}

hacerCalculo();