console.log(module.exports === this)
console.log(module.exports === exports)

//3 tipos de exportar módulos
this.a = 1;

exports.b = 2

module.exports.c = 3

///////////////////////////

exports = null

console.log(module.exports)


module.exports = {
    nome: 'Golias'
}




