//Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'

})
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'borracha'
produto.descricao = 'Borracha escolar Branca '
delete produto.tag

console.log(produto)

//Object.seal

const pessoa = { nome: 'juliana', idade: 35 }
Object.seal(pessoa)
console.log('selado: ', Object.isSealed()) //Quando objeto está selado, vc não consegue fazer nada 

pessoa.sobrenome = 'silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.Freeze = selado + valores Constantes