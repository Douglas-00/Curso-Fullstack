const nome = 'Rebeca'
const concatenacao = 'ola ' + nome + '!' // Não pode quebrar linhas dá erro 
    //Template string pode ter quebra de linha 
const template = `
Olá
${nome}!`
console.log(concatenacao, template)

//expressoes
console.log(`1+1= `) //Não executa á soma  
console.log(`1+1= ${1+1}`) //Exceuta a soma

const up = texto => texto.toUpperCase() //Touppercase deixa a letra maiúscula


console.log(`Ei... ${up('cuidado')}!`)