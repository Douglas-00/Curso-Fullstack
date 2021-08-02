const pilotos = ['dodo', 'gugu', 'massa', 'moa']
pilotos.pop() //Massa quebrou o carro
    //console.log(pilotos)

pilotos.push('mika') //adiciona no array
    //console.log(pilotos)

pilotos.shift() //remove o primeiro indice
    //console.log(pilotos)

pilotos.unshift('lucas') //deixa o nome em primeiro na lista 

//console.log(pilotos)

pilotos.splice(2, 0, 'Bottas', 'jerry')
    //console.log(pilotos)

//remover 
pilotos.splice(3, 1)
console.log(pilotos)

const alpilotos = pilotos.slice(3) //ele pega o resultado a partir do indice
console.log(alpilotos)

const alpilotos1 = pilotos.slice(1, 3)
console.log(alpilotos1) //pega uma parte do array