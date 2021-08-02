function compras(trab1, trab2) {
    const comprarsorvete = trab1 || trab2
    const comprartv50 = trab1 && trab2
        //const comprartv32 = !!(trab1 ^ trab2)
    const comprartv32 = trab1 != trab2
    const mantersaudavel = !comprarsorvete // operador unário

    return { comprarsorvete, comprartv50, comprartv32, mantersaudavel }



}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))