const num = [3,9,7,8]
let target = 12
let flag = false
for (var i = 0; num.length; i++) {

    for (var j = 0; num.length-1; j++) {

        if (num[i] + num[j+1] == target) {
            flag = true
        }
    }
}
if(flag == true) {
    console.log("el indice es " + i + " , " +j)
} else {
    console.log("nada")
}