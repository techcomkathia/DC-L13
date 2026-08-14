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


//Classes filhas: 
//AgenciaFisica
//Atributo:
//endereco
//getEndereco
//setEndereco
//mostrarInformacoes(polimorfismo)


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


//Instacie uma agenciaVirtual com 5 contas bancarias
//Instacie uma agenciaFisica com 3 contas bancarias
//execute o método mostrarInformacoes para ambas as agencias
//execute o método mostrarDetalhes para todas as contas de ambas as agencias