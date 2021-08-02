//Reduce transforma o elemento 

const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'ana', nota: 8.7, bolsita: true }

]
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)