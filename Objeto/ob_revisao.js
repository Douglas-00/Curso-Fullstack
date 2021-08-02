// coleção dinâmica de pares chave/valor

const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)


delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Douglas',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'ana',
        idade: 19
    }, {
        nome: 'moa',
        idade: 50
    }],
    calcularvalorseguro: function() {
        ///
    }

}
carro.proprietario.endereco.numero = 1000
console.log(carro)