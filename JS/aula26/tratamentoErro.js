//erro de tentar captar um elemento que não existe no DOM


try{
   let elemento = document.querySelector('#elementoQueNaoExiste')

    elemento.innerHTML = 'adicionei texto ao elemento que nao existe'
 // qualquer processo que possa ocasionar um erro sistemático
}
catch(erro){
    //captação do erro e tratamento desse erro
    //TRATAMENTO DO ERRO
    console.log(erro.message)
    console.log('erro identificado no bloco try e tratado no bloco catch')
}

console.log('Passei da linha de captação do elemento que nao existe')



// personalização de erros no JavaScript ( criando o evento erro e adcionando uma mensagem ao erro)
//caso entrada inválida de dados

try{
    let cor = prompt('Digite a cor desejada: vermelho, amarelo ou azul')

    //digitando qualquer cor fora das opções o sistema levantará um erro personalizado

    if(cor != 'vermelho' && cor != 'amarelo' && cor != 'azul'){
        //configuramos um erro personalizado. O parâmetro passado para o construtor Error() é a mensagem do erro e pode ser acessível pelo atributo message
        throw new Error('Cor inválida')
    }
}
catch(erro){
    //tratamento do objeto erro
    console.log(erro.message)
}