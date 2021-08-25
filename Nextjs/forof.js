//percorrer o cod3r em array mostrando separadamente
for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntosecma = ['Map', 'Set', 'Promise']

for (let i in assuntosecma){
    console.log(i)
}

for (let assunto of assuntosecma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado:true}],
    ['Promise', {abordado:false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}
//Percorrendo as chaves 

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

//Percorrendo os valores

for(let valor of assuntosMap.values()){
    console.log(valor)
}