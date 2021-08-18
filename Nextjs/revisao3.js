// ESb : Objcet.values/Object.entries

const obj = {a:1,b:2,c:3}
//mostra os valores dos objetos
console.log(Object.values(obj))
//mostra os nomes dos objetos e valores[
console.log(Object.entries(obj))

//melhorias na notação literal
const nome = 'douglas'
const pessoa ={
    nome,
    ola(){
        return 'oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class

class Animal{}

class cachorro extends Animal{
    falar(){
        return 'au au'
    }
}
console.log(new cachorro().falar())