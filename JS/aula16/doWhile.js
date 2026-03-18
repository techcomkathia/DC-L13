let condicao = false

do{
    console.log('Executado pelo menos uma vez')
    condicao = confirm('Deseja executar novamente?')
}while(condicao)