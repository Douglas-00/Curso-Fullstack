const soma = function(x, y) {
    return x + y
}
const resultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}
resultado(3, 4)