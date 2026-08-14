//Criação do Sistema Bancário do Banco do Cleitinho

//Super Classe : Conta Bancária
/* Atributos:
- #titular
- #numero
- #saldo



Métodos:
- depositar
- sacar

- mostrarDetalhes

- getTitular
- setTitular
- getSaldo
- setSaldo
- getTitular
- getNumero
*/

class ContaBancaria{
    #titular
    #saldo
    #numero
    constructor(titular, numero, saldo = 0){
        this.#titular = titular
        this.#saldo = saldo
        this.#numero = numero        
    }

    //metodos de acesso e atribuição
    getTitular(){
        return this.#titular
    }
    setTitular(titular){
        this.#titular = titular
    }
    getSaldo(){
        return this.#saldo
    }
    setSaldo(saldo){
        this.#saldo = saldo
    }
    getNumero(){
        return this.#numero
    }

    //metodos de modificação do saldo
    depositar(valor){
        if(valor <= 0){
            throw new Error('Valor precisa ser maior que 0')
        }
        this.#saldo += valor
        return('deposito realizado com sucesso')
    }
    sacar(valor){
        if(valor <= 0){
            throw new Error('Valor precisa ser maior que 0')
        }
        if(this.#saldo < valor){
            throw new Error('Saldo insuficiente')
        }
        this.#saldo -= valor
        return('saque realizado com sucesso')
    }

    //mostrar detalhes
    mostrarDetalhes(){
        return(`Titular: ${this.#titular}, Saldo: ${this.#saldo}, Numero: ${this.#numero}`)
    }
}


//Classes filhas que herdam de ContaBancária
//Conta Corrente
/* Atributos:
- #limiteChequeEspecial
- #dividaChequeEspecial

Métodos:
- getLimiteChequeEspecial
- setLimiteChequeEspecial
- transferir

- saque (polimorfismo) -> caso o saldo seja maior que o valor do saque, ele realiza o saque, caso contrário, ele realiza o saque com o cheque especial
-caso o saldo + cheque especial seja menor que o valor do saque, ele levanta um erro

- mostrarDetalhes(polimorfismo) incluindo o cheque especial e a divida nesse detalhe
*/

class ContaCorrente extends ContaBancaria{
    #limiteChequeEspecial
    #dividaChequeEspecial
    constructor(titular, numero, saldo = 0, limiteChequeEspecial = 0, dividaChequeEspecial = 0){
        super(titular, numero, saldo) //construtor da super classe
        this.#limiteChequeEspecial = limiteChequeEspecial
        this.#dividaChequeEspecial = dividaChequeEspecial
    }

    //metodos de acesso e atribuição
    getLimiteChequeEspecial(){
        return this.#limiteChequeEspecial
    }
    setLimiteChequeEspecial(limiteChequeEspecial){
        this.#limiteChequeEspecial = limiteChequeEspecial
    }

    //metodos de modificação do saldo
    transferir(contaDestinoNumero, valor){
        if(this.getSaldo() < valor){
            throw new Error('Saldo insuficiente')
        }
        this.setSaldo(this.getSaldo()- valor)
        return(`transferencia realizada com sucesso para ${contaDestinoNumero}`)
    }

    //polimorfismo
    saque(valor){
        if(this.getSaldo() < valor){
            if(this.getSaldo() + this.getLimiteChequeEspecial() < valor){
                throw new Error('Saldo insuficiente')
            }
            //calculo do quanto será debitado do cheque especial
            this.#dividaChequeEspecial = valor - this.getSaldo()
            this.setSaldo(0)
            this.#limiteChequeEspecial -= this.#dividaChequeEspecial
        }
        
        this.setSaldo(this.getSaldo() - valor)
        return('saque realizado com sucesso')
    }
    //é permitido o resgate do cheque especial caso o valor disponível seja menor que o valor do saque

    //polimorfismo
    mostrarDetalhes(){
        return(`Titular: ${this.getTitular()}, Saldo: ${this.getSaldo()}, Numero: ${this.getNumero()}, Limite Cheque Especial: ${this.#limiteChequeEspecial}, Divida Cheque Especial: ${this.#dividaChequeEspecial}`)
    }
    
}

//Conta Poupança

//Atributos:
//Taxa de Juros

//Métodos:
//getTaxaJuros
//setTaxaJuros
//mostrarDetalhes(polimorfismo)-> incluindo a taxa de juros

class ContaPoupanca extends ContaBancaria{
    #taxaJuros
    constructor(titular, numero, saldo = 0, taxaJuros = 0){
        super(titular, numero, saldo)
        this.#taxaJuros = taxaJuros
    }

    //metodos de acesso e atribuição
    getTaxaJuros(){
        return this.#taxaJuros
    }
    setTaxaJuros(taxaJuros){
        if(taxaJuros < 0){
            throw new Error('Taxa de juros nao pode ser negativa')
        }
        this.#taxaJuros = taxaJuros
    }

    //polimorfismo
    mostrarDetalhes(){
        return(`Titular: ${this.getTitular()}, Saldo: ${this.getSaldo()}, Numero: ${this.getNumero()}, Taxa de Juros: ${this.#taxaJuros}`)
    }

}

//Conta Salario
//atribuitos: empresa

//metodos:
//mostrarDetalhes(polimorfismo)-> incluindo a empresa
//getEmpresa e setEmpresa

class ContaSalario extends ContaBancaria{
    #empresa
    constructor(titular, numero, saldo = 0, empresa = null){
        super(titular, numero, saldo)
        this.#empresa = empresa
    }

    //metodos de acesso e atribuição
    getEmpresa(){
        return this.#empresa
    }
    setEmpresa(empresa){
        this.#empresa = empresa
    }

    //polimorfismo
    mostrarDetalhes(){
        return(`Titular: ${this.getTitular()}, Saldo: ${this.getSaldo()}, Numero: ${this.getNumero()}, Empresa: ${this.#empresa}`)
    }
}


//Super Classe : Agência Bancária

//Atributos:
//numeroAgencia
//contas
//gerente
//telefone

//Metodos:
//setGerente
//setTelefone
//getTelefone
//getGerente
//adicionarConta(conta)
//removerConta(conta)
//buscarContaPorNumero(numero)
//buscarContaPorTitular(titular)
//mostrarInformacoes (deve incluir a quantidade de contas ativas)
//getContas

class AgenciaBancaria{
    #contas = []
    #gerente
    #telefone
    #numeroAgencia
    constructor(endereco, gerente, telefone, numeroAgencia){
        this.endereco = endereco
        this.#gerente = gerente
        this.#telefone = telefone
        this.#numeroAgencia = numeroAgencia
        this.#contas = []
    }

    //metodos de acesso e atribuição
    setGerente(gerente){
        this.#gerente = gerente
    }
    getGerente(){
        return this.#gerente
    }
    setTelefone(telefone){
        this.#telefone = telefone
    }
    getTelefone(){
        return this.#telefone
    }

    getContas(){
        return this.#contas
    }

    getNumeroAgencia(){
        return this.#numeroAgencia
    }

    setNumeroAgencia(numeroAgencia){
        this.#numeroAgencia = numeroAgencia
    }

    adicionarConta(conta){
        if(conta instanceof ContaBancaria || conta instanceof ContaPoupanca || conta instanceof ContaSalario || conta instanceof ContaCorrente){
            this.#contas.push(conta)
        }else{
            throw new Error('A conta precisa ser da classe ContaBancaria')
        }
    }

    removerConta(numero){
        const conta = this.buscarContaPorNumero(numero)
        if(!conta){
            throw new Error('Conta nao encontrada')
        }
        this.#contas.splice(this.#contas.indexOf(conta), 1) //remove a conta pelo indice
    }

    buscarContaPorNumero(numero){
        const conta = this.#contas.find(conta => conta.getNumero() == numero)
        if(!conta){
            throw new Error('Conta nao encontrada')
        }
        return conta
    }    

    buscarContaPorTitular(titular){
        const conta = this.#contas.find(conta => conta.getTitular() == titular)
        if(!conta){
            throw new Error('Conta nao encontrada')
        }
        return conta
    }

    mostrarInformacoes(){
        return(`Agencia: ${this.#numeroAgencia}, Gerente: ${this.#gerente}, Telefone: ${this.#telefone}, Quantidade de contas ativas: ${this.#contas.length}`)
    }

}

//Classes filhas: 
//AgenciaFisica

//Atributo:
//endereco
//getEndereco
//setEndereco
//mostrarInformacoes(polimorfismo)
class AgenciaFisica extends AgenciaBancaria{
    #endereco
    constructor(endereco, gerente, telefone, numeroAgencia){
        super(gerente, telefone, numeroAgencia)
        this.#endereco = endereco
    }

    getEndereco(){
        return this.#endereco
    }

    setEndereco(endereco){
        this.#endereco = endereco
    }

    //polimorfismo
    mostrarInformacoes(){
        return(`Agencia: ${this.getNumeroAgencia()}, Gerente: ${this.getGerente()}, Telefone: ${this.getTelefone()}, Quantidade de contas ativas: ${this.getContas().length}, Endereco: ${this.#endereco}`)
    }
}

//AgenciaVirtual
//Atributo:
//site
//linkAplicativo
//getSite
//getLinkAplicativo
//setSite
//setLinkAplicativo
//metodos:
//mostrarInformacoes(polimorfismo)

class AgenciaVirtual extends AgenciaBancaria{
    #site
    #linkAplicativo
    constructor(site, linkAplicativo, gerente, telefone, numeroAgencia){
        super(gerente, telefone, numeroAgencia)
        this.#site = site
        this.#linkAplicativo = linkAplicativo
    }

    getSite(){
        return this.#site
    }

    getLinkAplicativo(){
        return this.#linkAplicativo
    }

    setSite(site){
        this.#site = site
    }

    setLinkAplicativo(linkAplicativo){
        this.#linkAplicativo = linkAplicativo
    }

    mostrarInformacoes(){
        return(`Agencia: ${this.getNumeroAgencia()}, Gerente: ${this.getGerente()}, Telefone: ${this.getTelefone()}, Quantidade de contas ativas: ${this.getContas().length}, Site: ${this.#site}, Link do aplicativo: ${this.#linkAplicativo}`)
    }
}

//Instacie uma agenciaVirtual com 5 contas bancarias
const conta1 = new ContaPoupanca('João Silva', 123, 1000)
const conta2 = new ContaCorrente('Maria Santos', 456, 5000, 5000, 0)
const conta3 = new ContaSalario('Pedro Oliveira', 789, 2000, 1000)
const conta4 = new ContaBancaria('Ana Costa', 321, 3000)
const conta5 = new ContaBancaria('Luiz Santos', 654, 4000)
const agenciaVirtual = new AgenciaVirtual('www.agenciavirtual.com.br', 'www.agenciavirtual.com.br', 'Cleitinho Lima', '1234-5678', '0001')
//Instacie uma agenciaFisica com 3 contas bancarias
const conta6 = new ContaPoupanca('João Silva', 123, 1000)
const conta7 = new ContaCorrente('Maria Santos', 456, 5000, 5000, 0)
const conta8 = new ContaSalario('Pedro Oliveira', 789, 2000, 1000)
const agenciaFisica = new AgenciaFisica('Rua 123, 456', 'Cleitinho Lima', '1234-5678', '0001')

//adicionarContas
agenciaVirtual.adicionarConta(conta1)
agenciaVirtual.adicionarConta(conta2)
agenciaVirtual.adicionarConta(conta3)
agenciaVirtual.adicionarConta(conta4)
agenciaVirtual.adicionarConta(conta5)

agenciaFisica.adicionarConta(conta6)
agenciaFisica.adicionarConta(conta7)
agenciaFisica.adicionarConta(conta8)


//execute o método mostrarInformacoes para ambas as agencias
console.log(agenciaVirtual.mostrarInformacoes())
console.log(agenciaFisica.mostrarInformacoes())

agenciaVirtual.getContas().forEach(conta => console.log(conta.mostrarDetalhes()))

agenciaFisica.getContas().forEach(conta => console.log(conta.mostrarDetalhes()))


//execute o método mostrarInformacoes para ambas as agencias
//execute o método mostrarDetalhes para todas as contas de ambas as agencias