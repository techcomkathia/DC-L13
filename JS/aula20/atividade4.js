//faça um objeto chamado contaBancaria, contabancaria deve conter os seguintes atributos: titular, saldo e tipoConta
//contaBancaria deve conter um método chamado depositar e sacar. Depositar e sacar devem receber um valor como parâmetro e atualizar o saldo da conta bancária, além de mostrar o novo saldo no console. O método sacar deve validar se o valor a ser sacado é menor ou igual ao saldo disponível, caso contrário, deve mostrar uma mensagem de erro no console.

//dica: para atualizar o saldo, utilize a palavra-chave this para acessar o atributo saldo do objeto contaBancaria e atualizar seu valor. 

let contaBancaria = {
    titular: "João Silva",
    saldo: 1000,
    tipoConta: "Corrente",
    depositar: function (valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
    },
    sacar: function (valor) {
        if(valor <= this.saldo){
            this.saldo -= valor; // Atualiza o saldo subtraindo o valor sacado
            console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
        }else{
            console.log(`Saldo insuficiente para realizar o saque de R$ ${valor}. Saldo disponível: R$ ${this.saldo}`);
        }
    }
}