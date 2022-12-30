let num = [5, 8, 2, 9, 3]


num.push(1) //Adicionando um valor no vetor
num.sort() // Colocando em ordem o vetor
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log('O valor Não foi encontrado!')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos+1}`)
}


let valores = [8, 1, 7, 4, 2, 9]

/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/*
valores.sort()
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/






