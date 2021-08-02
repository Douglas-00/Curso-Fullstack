const peso1 = 1.0
const peso2 = Number('2.5')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Resultado Verdadeiro o Numero é Inteiro
console.log(Number.isInteger(peso2)) //Resultado Falso o Numero é Real

const avali = 9.75
const avali2 = 7.85
const total = avali * peso1 + avali2 * peso2
const media = total / (peso1 + peso2)


console.log(media.toString())

console.log(media.toString(2)) //Fazendo isso o Resultado será em binário

console.log(media.toFixed(2)) // O to fixed diminui casas decimais

console.log(typeof media) // Typeof determina o tipo da variável