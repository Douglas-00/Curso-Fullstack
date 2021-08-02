const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome":  "caderno", "preco": 13.90}',
    '{"nome":  "Kit de lapis", "preco":41.22}',
    '{"nome":  "Caneta" , "preco":7.50 }'

]

//Retornar um array apenas com os precos 

const paraobjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraobjeto).map(apenasPreco)

console.log(resultado)