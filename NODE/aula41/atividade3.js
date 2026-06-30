// criar conta: função que recebe um nome, uma agência, um número e opcionalmente um saldo. Caso o saldo não seja informado, o objeto retornado pela função terá o atributo saldo zerado.

// * Sacar: função que recebe 2 parâmetros, conta(objeto) e valor saque

// * Depositar: função função que recebe 2 parâmetros, conta(objeto) e valor depósito

// * Ver extrato: função que recebe 1 parâmetros, conta(objeto) e retorna os dados dessa conta formatos de forma textual. 

const fs = require('fs')

function  lerDadosJson(){
    const dadosJson = fs.readFileSync('contasBanco.json', 'utf-8')
    const dadosObjeto = JSON.parse(dadosJson)
    return dadosObjeto
}

function localizarConta(numero){
   
    const dadosObjeto = lerDadosJson()
    const conta = dadosObjeto.contas.find(conta => conta.numero == numero)
    return conta
}


function criarConta (nome, agencia, numero, saldo = 0){
    //ler o conteúdo do arquivo json
    const dadosObjeto = lerDadosJson()

    dadosObjeto.contas.push({
        nome: nome,
        agencia: agencia,
        numero: numero,
        saldo: saldo
    })

    //reescrever o arquivo json, com os dados atualizados
    fs.writeFileSync('contasBanco.json', JSON.stringify(dadosObjeto))

}


function sacar(numero, valor){

    //localizar conta no banco
    const contaLocalizada = localizarConta(numero)
   
    if(!contaLocalizada){
        console.log("Conta nao encontrada")
        return
    }

    if(contaLocalizada.saldo >= valor){
        contaLocalizada.saldo -= valor
        console.log("Saque realizado com sucesso")
    } else {
        console.log("Saldo insuficiente")
    }

    //reescrever o arquivo json, com os dados atualizados
    const dadosObjeto = lerDadosJson()
    //substituir os dados da conta anterior pelo nova
    dadosObjeto.contas = dadosObjeto.contas.map(conta => {
        if(conta.numero == contaLocalizada.numero){
            return contaLocalizada
        }
        return conta        
    })
    //escrever no arquivo
    fs.writeFileSync('contasBanco.json', JSON.stringify(dadosObjeto))
}

function depositar(conta, valor){
    conta.saldo += valor
    console.log("Deposito realizado com sucesso")
}


function verExtrato(conta){
    console.log('----------------------')
    console.log("Nome: " + conta.nome)
    console.log("Agencia: " + conta.agencia)
    console.log("Numero: " + conta.numero)
    console.log("Saldo: " + conta.saldo)
    console.log('----------------------')
}

module.exports = {criarConta, sacar, depositar, verExtrato} 