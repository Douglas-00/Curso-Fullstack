// notação literal

const ob1 = {}
console.log(ob1)

//object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object

console.log(obj2)

// funçoes construtoras

function produto(nome, preco, desc) {
    this.nome = nome // atributo publico com this
    this.getpreco = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('celular', 2000, 0.10)
const p2 = new produto('Notebook', 4008, 0.15)
console.log(p1.getpreco(), p2.getpreco())


// Função factory
function criarfuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getsalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}
const f1 = criarfuncionario('douglas', 7980, 4)
const f2 = criarfuncionario('Camila', 2345, 1)

console.log(f1.getsalario(), f2.getsalario())

// obc=ject create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)