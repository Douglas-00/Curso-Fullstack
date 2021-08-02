console.log(typeof Object) //Função
console.log(typeof new Object) //Nova Instancia da Função / Objeto

const cliente = function() {}
console.log(typeof cliente)
console.log(typeof new cliente)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())