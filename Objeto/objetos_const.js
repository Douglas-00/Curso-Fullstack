// pessoa -> 123 -> {...}
const pessoa = { nome: 'joão' }
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa - >456->{....}
//pessoa = { nome: 'ana' }

Object.freeze(pessoa) // congela o ojeto 

pessoa.nome = 'dodo' // não vai alterar porque está congelado