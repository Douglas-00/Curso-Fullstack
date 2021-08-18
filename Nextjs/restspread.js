// operador ... rest(juntar)/spread}(espalhar)

//usar rest com parâmetro de função

// usar spread com objeto

const funcionario = {nome:'Maria',salario:233.33}
const clone = {ativo:true,...funcionario}

console.log(clone)

//usar spread com arrray

const grupoA = ["joao","pedro","gloria"]
//foi espalhado o primeiro array dentro do segundo 
const grupoFinal = ['maria',...grupoA, 'Rafaela']

console.log(grupoFinal)

