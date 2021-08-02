function fun1() { //criar de forma literal

}
//Armazenar em uma Variável 
const fun2 = function() {}

//Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function() { return 'Opaa' }
console.log(obj.falar())


//Passar função como param
function run(fun) {
    fun()
}
run(function() { console.log('Executando....') })

//Uma função pode retornar / conter uma função

function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(3)