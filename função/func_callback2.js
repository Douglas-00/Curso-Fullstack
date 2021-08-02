const notas = [7.7, 8.5, 7.5, 6.7, 2.5, 9.4, 5.0]

// sem callback 
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback 
notasBaixas1 = notas.filter(function(nota) {
        return nota < 7
    }) // filter filtra o array
console.log(notasBaixas1 + ' segundo jeito')

const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3 + ' Terceiro jeito simplificado')