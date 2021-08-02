function tratarerro(erro) {
    throw new error('.Alerta.O correu Um erro.') //Mensage tratada do erro
}

function imprimirnome(obj) {
    try { //Try você julga que pode tratar um erro 
        console.log(obj.name.toUppercase() + '!!!')
    } catch (e) { //Catch automaticamente o erro cai dentro do catch
        tratarerro(e)
    } finally {
        console.log('Final')
    }
}
const obj = { nome: 'Roberto' }
imprimirnome(obj)