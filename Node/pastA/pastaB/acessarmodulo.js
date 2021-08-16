const moduloA = require('../../moduleA')

const moduloB = require('../../moduleB')



console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

//chamando servidor e criando show
const http = require('http')
http.createServer((req, resp)=>{
    resp.write('Indo para o servidor vai estudar alvaro')
    resp.end()
}).listen(2000)

