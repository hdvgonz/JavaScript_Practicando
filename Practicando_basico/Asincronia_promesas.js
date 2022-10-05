let promesa = new Promise((resolve, reject) => setTimeout(reject,1000, {error:'No existe'}));

promesa
.then((v) => { console.log(1 + '-' +v)})
.then((v) => { console.log(2 + '-' + v)})
.catch((e) => console.log(e))
.finally((v) => console.log('Finally'))