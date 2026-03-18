let opcao = 'verde'

switch (opcao) {
    case 'verde':
        console.log('o sinal está verde, pode passar')
        //break
    case 'amarelo':
        console.log('o sinal está amarelo, atenção')
        break
    case 'vermelho':
        console.log('o sinal está vermelho, pare')    
        //break   
    default:
        console.log('opção de cor inválida, o sinal está quebrado')   

}

/*
switch (expressão) {
    case valor1:
        // código a ser executado 
        break;
    case valor2:
        // código a ser executado 
        break;
    // mais casos...
    default:
        // código a ser executado se a expressão não corresponder a nenhum dos casos anteriores
}
*/