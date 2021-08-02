const pessoa = {
    nome: 'rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //Object keys vai pegar todos os atributos
console.log(Object.values(pessoa)) //Object valeues vai pegar os valores
console.log(Object.entries(pessoa)) //Object pega todos os valores

Object.entries(pessoa).forEach(([chave, valor]) => { //Utilizando o foreach e o desctructing ele quebra os valores
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'datanascimento', {
    enumerable: true, //passivo a ser listada sim 
    writable: false, //não vai s=aceitar ser modificada 
    value: '01/01/2020'
})
pessoa.datanascimento = '01/04/2015' //Observe que eu alterei a data , mas quando coloquei writable ele não vai alterar
console.log(pessoa.datanascimento)
console.log(Object.keys(pessoa))



//Object.assign 
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)