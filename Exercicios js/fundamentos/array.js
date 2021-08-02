const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
valores[4] = 10 // ele está adicionando um valor no indice 4 no array
console.log(valores)
console.log(valores.length) //Length expressa quantos elementos temos no array
valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)
console.log(valores.pop()) //pop ele retira o ultimo indice do array e retorna  
delete valores[0] //Deletando valor do array {indice}
console.log(valores)
console.log(typeof valores)