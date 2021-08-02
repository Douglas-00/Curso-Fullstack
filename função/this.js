const pessoa = {
    saudacao: 'Bom dia ',
    falar() {
        console.log(this.saudacao) //acessando o atributo de um objeto com this

    }
}
pessoa.falar()
const falar = pessoa.falar
falar()

const falarpessoa = pessoa.falar.bind(pessoa) //O Bind você passa um objeto no qual voce quer que seja resolvido o this
falarpessoa()