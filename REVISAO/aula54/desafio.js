/*Crie uma classe ContaBancaria.

--Atributos--
titular
numero
saldo → privado, iniciado em 0

--Métodos--
depositar(valor)
sacar(valor)
consultarSaldo()


*/


class ContaBancaria{
    #saldo
    constructor(titular, numero, saldo = 0){
        this.titular = titular;
        this.#saldo = saldo;
        this.numero = numero;        
    }

    consultarSaldo(){
        return this.#saldo
    }

    sacar(valor){

        if(this.#saldo < valor){
            throw new Error('Saldo insuficiente')            
        }

        if(valor <= 0){
            throw new Error('Valor precisa ser maior que 0')
        }

        this.#saldo -= valor
    }

    depositar(valor){
        if(valor<= 0){
            throw new Error('Valor precisa ser maior que 0')
        }

        this.#saldo += valor
    }

}

/*
Regras
Depósitos devem ser maiores que 0. (Caso contrário, levantar erro)
Saques devem ser maiores que 0. (Caso contrário, levantar erro)
Não permitir saques acima do saldo disponível.
O saldo não pode ser acessado ou alterado diretamente.*/

//Faça a instancia de 4 contas para testar a classe ContaBancaria

const conta1 = new ContaBancaria('João Silva', 123); //saldo iniciado em 0
const conta2 = new ContaBancaria('Maria Santos', 456, 500);
const conta3 = new ContaBancaria('Pedro Oliveira', 789, 200);
const conta4 = new ContaBancaria('Ana Costa', 321, 300);

//conta1.sacar(100) //erro de saldo insuficiente
conta1.depositar(100)
console.log(conta1.consultarSaldo())
conta1.sacar(50)
console.log(conta1.consultarSaldo())


//Crie a classe AgenciaBancaria que gerencie as contas bancárias. 
//A classe deve ter um atributo para armazenar a lista de contas bancárias e ele será privado
//deverá ter um atributo endereco, gerente, telefone e numeroAgencia
//deverá conter também um atributo com a quantidade de contas ativas

//para os métodos a classe deverá ter os seguintes métodos:
//adicionarConta(conta) - deverá aceitar apenas objetos da classe ContaBancaria
//removerConta(conta) - deverá verficar se a conta existe, se tem saldo e caso tenha saldo deverá indicar que deve ser feito o saque antes de remover a conta
//buscarContaPorNumero(numero) -> deverá retornar o objeto da conta (sem o saldo)
//buscarContaPorTitular(titular) -> deverá retornar o objeto da conta (sem o saldo)
//mostrarInformacoes()-> mostra informações da agência bancária e quantidade de contas ativas

class AgenciaBancaria{
    #contas
    constructor(endereco, gerente, telefone, numeroAgencia){
        this.#contas = [];
        this.endereco = endereco;
        this.gerente = gerente;
        this.telefone = telefone;
        this.numeroAgencia = numeroAgencia;
    }

    adicionarConta(conta){
        if(conta instanceof ContaBancaria){
            this.#contas.push(conta)
        }else{
            throw new Error('A conta precisa ser da classe ContaBancaria')
        }
    }

    //alternativamente poderá ser feita por numero da conta
    removerConta(conta){
        if(conta instanceof ContaBancaria){
            if(conta.consultarSaldo() > 0){
                throw new Error('A conta precisa estar sem saldo para ser removida')
            }else{
                this.#contas.splice(this.#contas.indexOf(conta), 1)
            }
        }else{
            throw new Error('A conta precisa ser da classe ContaBancaria')
        }
    }

    buscarContaPorNumero(numero){
        const conta = this.#contas.find(conta => conta.numero == numero)
        if(!conta){
            throw new Error('Conta nao encontrada')
        }
        return conta
    }

    buscarContaPorTitular(titular){
        const conta = this.#contas.find(conta => conta.titular == titular)
        if(!conta){
            throw new Error('Conta nao encontrada')
        }
        return conta
    }

    mostrarInformacoes(){
        return {
            endereco: this.endereco,
            gerente: this.gerente,
            telefone: this.telefone,
            numeroAgencia: this.numeroAgencia,
            quantidadeContas: this.#contas.length
        }
    }
}