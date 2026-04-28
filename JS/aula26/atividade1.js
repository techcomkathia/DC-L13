// usando a API via CEP, faça a solicitação de um cep e mostre as informações formatadas de endereço na tela. 
//Dica: crie preliminarmente os elementos do index.html ou utilize o createElement. e appendChild para inserir os elementos na tela
// utilize o fetch para fazer a solicitação e os metodos thens para tratar os dados retornados.
// IMPORTANTE: use o método .json para converter a resposta em json ( esse metodo retorna uma promisse )
// para um cep que não exista, crie uma exceção e mostre uma mensagem de erro na tela. Utilize o throw new Error() para criar e o catch para capturar o erro


// url api :  https://viacep.com.br/ws/CEP8digitos/json/

//definição de como será pedida a informação ao usuario
//criaçao de uma função para busca do cep pela API
//representação dos dados na tela

function buscarCepAPI(cep){
const url = `https://viacep.com.br/ws/${cep}/json/`
fetch(url)
    .then((respostaAPI)=>respostaAPI.json())// conversão da respotas
    .then((objetoCEP)=> console.log(objetoCEP))// montagem da tela ( passando os dados para a função especifica)
    .catch((erro) => console.log(erro.message))//tratamento dos erros
}

function mostrarDados(objetoCEP){
    //captar as informacoes do cep e mostrar na tela no campo especifico
    const divCEP = document.querySelector('#cep')
    //cep
    //logradouro
    //bairro
    //localidade
    //uf

    divCEP.innerHTML = '' //limpa os dados anteriores

    const cep = document.createElement('p')
    cep.innerText = objetoCEP.cep
    divCEP.appendChild(cep)

    const logradouro = document.createElement('p')
    logradouro.innerText = objetoCEP.logradouro
    divCEP.appendChild(logradouro)

    const bairro = document.createElement('p')
    bairro.innerText = objetoCEP.bairro
    divCEP.appendChild(bairro)

    const localidade = document.createElement('p')
    localidade.innerText = objetoCEP.localidade
    divCEP.appendChild(localidade)

    const uf = document.createElement('p')
    uf.innerText = objetoCEP.uf
    divCEP.appendChild(uf)

}

function mostrarCEP(){
    let cep = prompt('Digite o cep que deseja buscar, com apenas números e com 8 digitos')
    buscarCepAPI(cep)
}