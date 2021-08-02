let aprovados = new Array('dodo', 'dudu', 'ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])


aprovados[3] = 'paulo'

aprovados.push('abia')

console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

aprovados.splice(1, 2, 'elemento') //splice serve para adicionar e deletar indice

console.log(aprovados)