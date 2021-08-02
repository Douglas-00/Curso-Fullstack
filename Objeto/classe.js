class lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}
class ciclofinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addlancamento(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l))
    }
    sumario() {
        let valorconsolido = 0
        this.lancamento.forEach(l => {
            valorconsolido += l.valor
        })
        return valorconsolido

    }


}

const salario = new lancamento('salario', 4500)
const contadeluz = new lancamento('luz', -220)

const contas = new ciclofinanceiro(6, 2018)
const addlancamento(salario, contadeluz)
console.log(contas.sumario())