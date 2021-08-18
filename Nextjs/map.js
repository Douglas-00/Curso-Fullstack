const tec = new Map()

tec.set('react',{framework:false})
tec.set('angular',{framework:true})

console.log(tec.react)
console.log(tec.get('react').framework)

const chavesvariadas = new Map([
    [function (){},'função'],
    [{}, 'objeto'],
    [123, 'numero'],
])

chavesvariadas.forEach((vl, ch)=>{
    console.log(ch,vl)
})

console.log(chavesvariadas.has(123))
chavesvariadas.delete(123)
console.log(chavesvariadas.has(123))
console.log(chavesvariadas.size)

chavesvariadas.set(123, 'a')
chavesvariadas.set(123, 'b')
chavesvariadas.set(456, 'b')

console.log(chavesvariadas)