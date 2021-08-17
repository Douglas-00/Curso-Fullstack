const fs = require('fs')



const caminho = __dirname + '/arquivo.json'


//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

//assincrono

fs.readFile(caminho, 'utf-8',(err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//outro jeito de ler o arquivo json

const config = require('./arquivo.json')

console.log(config.db)

//lendo arquivos da pasta 
fs.readdir(__dirname,(err,conteudo)=>{
    console.log('conteudo da pasta ..')
    console.log(conteudo)
})