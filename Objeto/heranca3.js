const pai = { nome: 'pedro', corcabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'ana'
console.log(filha1.corcabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'bia', writable: false, enumerable: true }

})
console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corcabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? //Verifica se pertence ao objeto ou veio por herança
        console.log(key) : console.log(`Por herança ${key}`)
}