function carro(velocidademaxima = 200, delta = 5) {
    //atributo privado
    let velocidade = 0

    // metodo publico
    this.acelerar = function() {
            if (velocidade + delta <= velocidademaxima) {
                velocidade += delta
            } else {
                velocidade = velocidademaxima
            }
        }
        // metodo publico
    this.getvelocidade = function() {
        return velocidade
    }
}
const uno = new carro
uno.acelerar()
console.log(uno.getvelocidade())

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getvelocidade())