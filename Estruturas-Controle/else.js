const Resultado = function(nota) {
    if (nota >= 7) {
        console.log('Meus Parabéns Você foi Aprovado com Nota:' + nota)
    } else {
        console.log('Você foi Reprovado com Nota: ' + nota)
    }

}

Resultado(5)