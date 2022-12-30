// RECURSIVIDADE
function fat(n) {
    if (n ==1) {
        return 1
    } else {
        return n * fat(n - 1)
    }

}

console.log(fat(5))



// Fatorial Recursiva
// Quando uma função chama ela mesma

//  n! = n * (n - 1)
//  n! = 1