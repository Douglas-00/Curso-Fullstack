// novo recurso es2015

const pessoa = {
    nome: 'ana',
    idade: 5,
    endereco: {
        logradouro: 'rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa // extraindo dados do objeto pessoa 

console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, 1)

const { sobrenome, bemhumorada = true } = pessoa
console.log(sobrenome, bemhumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)