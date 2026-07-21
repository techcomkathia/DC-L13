const bcrypt = require('bcrypt');

//3 métodos
// hash/ hashSync - cria um hash de uma senha
// compare/ compareSync - compara uma senha com um hash
// genSalt/ genSaltSync - gera um sal para o hash

const texto = 'minha senha'
const salts = bcrypt.genSaltSync(10); //gera um sal para o hash com base em um numero.

const textoCriptografado = bcrypt.hashSync(texto,salts)
console.log(`Senha: ${texto}`)
console.log(`Senha criptografada: ${textoCriptografado}`) //senha criptografada (textoCriptografado)

const ehSenhaCorreta = bcrypt.compareSync('não é o texto',textoCriptografado)
console.log(ehSenhaCorreta) //false

const ehSenhaCorreta2 = bcrypt.compareSync(texto,textoCriptografado)
console.log(ehSenhaCorreta2) //true