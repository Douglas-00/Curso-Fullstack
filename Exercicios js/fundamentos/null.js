let valor // Não inicializada
console.log(valor)


valor = null //Ausência de Valor 
console.log(valor)
    //console.log(valor.tostring())//erro
const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined / add null ou 0

console.log(!!produto.preco)
console.log(produto)

//delete produto.preco tirar item do objeto

produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)