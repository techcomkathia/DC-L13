// criar conta: função que recebe um nome, uma agência, um número e opcionalmente um saldo. Caso o saldo não seja informado, o objeto retornado pela função terá o atributo saldo zerado.

// * Sacar: função que recebe 2 parâmetros, conta(objeto) e valor saque

// * Depositar: função função que recebe 2 parâmetros, conta(objeto) e valor depósito

// * Ver extrato: função que recebe 1 parâmetros, conta(objeto) e retorna os dados dessa conta formatos de forma textual. 

function criarConta (nome, agencia, numero, saldo = 0){

    return {
        nome: nome,
        agencia: agencia,
        numero: numero,
        saldo: saldo
    }

}

function sacar(conta, valor){
    if(conta.saldo >= valor){
        conta.saldo -= valor
        console.log("Saque realizado com sucesso")
    } else {
        console.log("Saldo insuficiente")
    }
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