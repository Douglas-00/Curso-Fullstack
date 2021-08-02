const escola = "Cod3r"
console.log(escola.charAt(4)) //Mostra o indice da palavra 
console.log(escola.charCodeAt(2)) //Mostra o indice em Unicode
console.log(escola.indexOf('3')) //Verifica se o indice existe na palavra
console.log(escola.substring(1)) // Determina que mostre a partir do Indice 1
console.log(escola.substring(0, 3)) //Determina o inicio e o fim do indice

console.log('Escola '.concat(escola).concat("!")) //Concatenando os itens 
console.log(escola.replace(3, 'e')) //Substitui o valor que deseja por outro

console.log('ana,douglas,camila'.split(',')) //split separa as linhas da frase e pode usar REGEX