const exemploFuncao = require('./calculadora.js') // todo o objeto calculadora.js foi 
const {somar} = require('./calculadora.js')
const fs = require('fs')
const atividade3 = require('./atividade3.js')

// console.log(somar(10, 20))
// console.log(exemploFuncao.subtrair(10, 20))
// console.log(exemploFuncao.multiplicar(10, 20))
// console.log(exemploFuncao.dividir(10, 20))

const operacoesBancarias = require('./operacoesBancarias.js') // ficará no formato de objeto com todas as funcoes sendo método do objeto operacoesBancarias

/*const conta1 = operacoesBancarias.criarConta("João", "001", "1234", 1000) 
const conta2 = operacoesBancarias.criarConta("Maria", "002", "5678", 0)

operacoesBancarias.depositar(conta1, 200)
operacoesBancarias.verExtrato(conta1)
operacoesBancarias.depositar(conta2, 500)
operacoesBancarias.verExtrato(conta2)
*/

//ler o conteúdo do arquivo de texto e exibir no console
// fs.readFile('meuTexto.txt', 'utf-8', (err, textoArquivo) => {console.log(textoArquivo)})

// fs.writeFile('meuTexto.txt', 'Texto de substituição do conteúdo anterior', (err) => {
//     if (err) {
//         console.log('Opa! Deu erro!')
//     }
// })

// fs.writeFile('meuNovoArquivoDeTexto.txt', 'Caso o arquivo exista,o conteúdo será substituido, caso contrario o arquivo será criado com o conteúdo passado como parâmetro', 'utf-8', (err) => {
//     if (err) {
//         console.log('Opa! Deu erro!')
//     }
// })

atividade3.criarConta("João", "001", "1010", 1000)
atividade3.sacar(1010,200)
