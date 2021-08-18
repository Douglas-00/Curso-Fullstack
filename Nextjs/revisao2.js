//Arrow Function

const soma = (a,b)=> a+b

console.log(soma(1,2))

//arrow function

const lexicol = () => console.log(this === exports)
const lexico2 = lexicol.bind({})
lexicol()
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}
log()

log('sou mais forte')

//Operadores Rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))