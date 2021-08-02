function getpreco(imposto = 0, moeda = 'Rs') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getpreco
}
console.log(getpreco())
console.log(produto.getpreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getpreco.call(carro))
console.log(getpreco.apply(carro))

console.log(getpreco.call(carro, 0.17, '$'))

console.log(getpreco.apply(carro, [0.15, '$']))