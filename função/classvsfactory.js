class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
//factory melhor :
const p1 = new pessoa('douglas')
p1.falar()

const criar = nome => {
    return {
        falar: () => console.log(`Seu nome é ${nome}`)
    }
}
const p2 = criar('lucas irmao')
p2.falar()