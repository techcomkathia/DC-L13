//1) um sistema bancario tem uma senha que precisa ser informada para acessar a conta
//essa senha é composta por 4 dígitos. 
//faça um programa que solicite a senha até que o usuário acerte a senha para que seja liberado o acesso ao sistema. 
//quando o usuário acertar mostre um alert com "Acesso liberado"
/*let senha = 'cleitinhoGatoLaranja'
let senhaUsuario = prompt('Digite a senha:') //digite a senha '1234'
let quantidadeTentativas = 1 //contador para contabilizar as tentativas do usuário
//limite de 3 tentativas

//condição para q o while seja executado:
//senha diferente da senha do sistema, ou seja, senhaUsuario !== senha
//quantidadeTentativas menor que 3
while(senhaUsuario !== senha && quantidadeTentativas <= 3){ 
    //enquanto a senha do usuário for diferente da senha do sistema, continue pedindo a senha para o usuário
    alert('Senha incorreta, tente novamente')
    senhaUsuario = prompt('Digite a senha:') //'cleitinhoGatoLaranja'
    quantidadeTentativas++ //a cada tentativa, o contador é incrementado em 1
}

// alert('Acesso liberado')
if(senhaUsuario === senha){
    alert('Acesso liberado')
}
else{
    alert('Tentativas esgotadas, acesso negado')
}
*/


//2) Faça um programa que será uma calculadora para o total da nota fiscal peça ao usuário quantos itens diferentes (produtos) tem na compra. 
//Calcule o valor total, pedindo o preço de item por item e a quantidade. 
//Quando o item for lido, mostre no console : Produto - Preço - Quantidade - ValorTotalItem 
//Ao final, depois de ler todos todos os produtos/quantidades, mostre o somatório da compra.
//Exemplo: 
/* PRODUTO 1 - 10.50 - 2 - 21.00
   PRODUTO 2 - 50.00 - 1 - 50.00
   TOTAL -  71.00
*/

/*let calculadora = Number(prompt('Quantos itens diferentes tem na compra?')) //limite do laço
let totalNotaFiscal = 0 //acumulador

for(let i = 1; i <= calculadora; i++) {
    let produto = Number(prompt(`Digite o preço do produto ${i}`))
    let quantidade = Number(prompt(`Digite a quantidade do produto ${i}`))
    let valorTotal = produto * quantidade
    console.log(`Produto ${i} - ${produto} - ${quantidade} - ${valorTotal}`)
    totalNotaFiscal += valorTotal
}
console.log(`Total da nota fiscal: ${totalNotaFiscal}`)*/


// Verifique se o usuario pode alugar um carro. Para isso peça a idade, verifique se tem carteira de motorista e se o valor do cartão de crédito é maior que 500 ( valor da aluguel do carro)

//idade >= 18
//carteira de motorista = sim ou true
//cartão de crédito >= 500

//se atender a todas as condições, mostre um alert "Aluguel aprovado". 
// Caso contrário, mostre um alert "Aluguel negado e informe o motivo da recusa (idade, carteira ou cartão de crédito)"

//excessão final precisa mostrar o motivo da recusa, ou seja, qual das condições não foi atendida.

let idade = Number(prompt("Digite sua idade:")); 
let possuiCarteira = prompt("Você possui carteira de motorista? (Sim/Não)").toLowerCase() === "sim"; //faz a comparação para verificar se o usuário respondeu "Sim" (ignorando maiúsculas/minúsculas) e retorna true ou false
//solitar através do confirm, que retorna true ou false
let valorCartaoCredito = Number(prompt("Digite o valor do seu cartão de crédito:")); 

if (idade >= 18 && possuiCarteira && valorCartaoCredito >= 500) { 
    alert("Aluguel aprovado!"); 
} else {
    let motivoRecusa = ""; 
    if (idade < 18) {
        motivoRecusa += "Idade insuficiente. "; 
    }
    if (!possuiCarteira) {
        motivoRecusa += "Carteira de motorista não encontrada. "; 
    }
    if (valorCartaoCredito < 500) {
        motivoRecusa += "Valor do cartão de crédito insuficiente."; 
    }
    alert(`Aluguel negado! ${motivoRecusa}`); 
}