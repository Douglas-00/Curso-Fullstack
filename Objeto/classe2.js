class avo {
    constructor(sobrenome) {
        this.sorenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = 'profissor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor() {
        super('silva')
    }
}
const filho = new filho
console.log(filho)