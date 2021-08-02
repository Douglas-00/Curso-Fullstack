function rand({ min = 0, max = 1000 }) { //rand retorno um numero aleátorio
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({ max: 50, min: 40 }))
console.log(rand({ min: 955 }))