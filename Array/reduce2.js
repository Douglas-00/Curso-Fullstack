const alunos = [
        { nome: 'joao', nota: 7.3, bolsista: false },
        { nome: 'Maria', nota: 9.2, bolsista: true },
        { nome: 'Pedro', nota: 9.8, bolsista: false },
        { nome: 'ana', nota: 8.7, bolsita: true }

    ]
    //Desafio 1:Todos os alunos são bolsistas?
const todosbolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosbolsistas))



//Desafio 2:Algum aluno é Bolsista?
const algumbolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumbolsista))