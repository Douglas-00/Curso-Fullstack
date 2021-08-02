function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i] //arguments é um array interno da função
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, " Teste"))