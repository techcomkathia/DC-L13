//utilizando a api VIA CEP para buscar informações de um cep e mostrar no console

let cep = '01001000' //apenas numeros
const endpointAPI = `https://viacep.com.br/ws/${cep}/json/`

//fetch(url) e ele retorna uma promisse
// promisse é uma promessa que um objeto vai ser retornado: podendo ser um objeto de sucesso ou um objeto de erro
// possibilidades de erro : url incorreta, erro de servidor, erro de acesso (sem credencial ou sem permissão) etc

fetch(endpointAPI) //depende do protocolo http ou https
    //usamos o método para promisses then para tratar a promisse e passar para o proximo then
    .then((resposta) => resposta.json()) //convertendo a resposta em json
    .then((dados) => {
        if(dados.erro) {
          throw new Error('o cep não existe')  
        } 
        console.log(dados)}) //exibindo os dados no console
    .catch((erro) => console.log(erro.message || 'ocorreu um erro')) // tratar o erro levantado em qualquer parte do codigo anterior (fetch ou thens)