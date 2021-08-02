const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'douglas',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]
const getnota = aluno => aluno.nota
const getturma = turma => turma.alunos.map(getnota)

const nota1 = escola.map(getturma)
console.log(nota1)

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))

}
const notas2 = escola.flatMap(getturma)
console.log(notas2)