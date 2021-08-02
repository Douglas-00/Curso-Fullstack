const notas = [6.2, 5.3, 7.8, 7.2]
for (let i in notas) { //in pega os atributos de um array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'souza',
    idade: 29,
    peso: 64
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}