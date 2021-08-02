//closure é o escopo criado quando uma função é declarada
// essse escopo permite a função acessar e manipular variaveis externas á função

//contexto lexico em ação!

const x = 'Global '

function fora() {

    const x = 'Local'

    function dentro() {
        return x
    }
    return dentro

}
const minhafuncao = fora()
console.log(minhafuncao())