function meuobj() {
    console.log(meuobj.prototype)
}

const obj1 = new meuobj
const obj2 = new meuobj

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuobj.prototype === obj1.__proto__)


meuobj.prototype.nome = 'Anônimo'
meuobj.prototype.falar = function() {
    console.log(`Bom dia! Meu Nome é ${this.nome}!`)
}
obj1.falar()

obj2.nome = 'Douglas'
obj2.falar()


const obj3 = {}
obj3.__proto__ = meuobj.prototype
obj3.nome = 'irmão'
obj3.falar()

//Resumindo a Loucura.....

console.log(new meuobj.__proto__ === meuobj.prototype)