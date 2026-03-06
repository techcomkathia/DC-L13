// ATIVIDADE 1
//Leia informações do usuário usando a função prompt(), armazene cada uma em uma variável e depois mostre todas essas informações no console, com console.log()
/* nome, idade, cidade, email e telefone*/
let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")
let cidade = prompt("Qual é a sua cidade?")
let email = prompt("Qual é o seu email?")
let telefone = prompt('Qual é o seu telefone?')
/* mostre as informações da seguinte forma : 
Nome: [nomeUsuario]
Idade: [idadeUsuario]
Cidade: [cidadeUsuario]
Email: [emailUsuario]
Telefone: [telefoneUsuario]
*/

console.log(nome)
console.log("Nome: " + nome)
console.log(idade)
console.log("Idade: " + idade)
console.log(cidade)
console.log("Cidade: " + cidade)
console.log(email)
console.log("Email: " + email)
console.log(telefone)
console.log("Telefone: " + telefone)
//utilizando as virgulas entre as variáveis é equivalente a concatenar as variaveis. Isso funciona apenas para variaveis do mesmo tipo
console.log(idade, cidade, email, telefone)