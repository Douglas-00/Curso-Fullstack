//cadeia de prototipos

const avo = { at: 'a' }
const pai = { __proto__: avo, att: 'b' }
const filho = { __proto__: pai, attt: 'c' }
console.log(filho.at)

const carro = {
    velatual: 0,
    velmax: 200,
    acelerarmais(delta) {
        if (this.velatual + delta <= this.velmax) {
            this.velatual += delta
        } else {
            this.velatual = this.velmax
        }

    },
    status() {
        return `${this.velatual}km/h de ${this.velmax}km/h`
    }
}
const ferrari = {
    modelo: 'f40',
    velmax: 324
}
const volvo = {
    modelo: 'v40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarmais(100)
console.log(volvo.status())

console.log(ferrari.status())