//Crie um array com as seguintes informações: nome, idade, cidade, profissão, estado civil. Depois imprima cada uma dessas informações usando o índice do array no seguinte formato:
//Nome: variavel[indice]
//Idade: variavel[indice]
//Cidade: variavel[indice]
//Profissão: variavel[indice]
//Estado Civil: variavel[indice]

let pessoa = [ 'João', 30, 'São Paulo', 'Engenheiro', 'Solteiro']
console.log(`Nome: ${pessoa[0]}`)
console.log(`Idade: ${pessoa[1]}`)
console.log(`Cidade: ${pessoa[2]}`)
console.log(`Profissão: ${pessoa[3]}`)
console.log(`Estado Civil: ${pessoa[4]}`)

//acessando o tamanho do array
console.log(`O array de informações tem ${pessoa.length} elementos`)
console.log(pessoa)

//atualizar o valor da profissão
pessoa[3] = 'DEV'
console.log(pessoa)