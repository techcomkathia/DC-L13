//Implemente um campo de input numerico que permita que o usuário passe o id do produto que ele deseja excluir. Assim que o usuário digitar o id e submeter o formulário, a função deve ser chamada e o produto deve ser excluido do banco de dados.
//o usuário deve ser informado se o produto foi excluido ou se o produto nao foi encontrado em um campo de texto na tela, abaixo do formulário.

//DICAS: método getElementById() ou querySelector() para selecionar o formulário e o input
// evento submit do formulário, no addEventListener(). A função de callback deve ser assíncrona, usando await pois a exclusão do produto pode demorar e a resposta para o usuário depende do sucesso ou falha da exclusão.

//para fazer um função do tipo seta assíncrona, use a seguinte estrutura: async (parametros) => {...}

const form = document.getElementById("delecao");
const inputId = document.getElementById("idProduto");
const mensagem = document.getElementById("mensagem");

form.addEventListener('submit',
    async(evento)=>{
        //remoção do comportamento padrão do formulário
        try{
            evento.preventDefault();

            const idProduto = inputId.value; //utilizar como parâmetro no fetch na API

            const resposta = await fetch(`https://fakestoreapi.com/products/${idProduto}`, {
                method: "DELETE"
            });

            //2 possibilidades de status code: 200 e 404
            if(resposta.status == 200){
                mensagem.innerText = "Produto excluido com sucesso"
            }
            else{
                console.log(resposta.status)
                mensagem.innerText = "Produto nao encontrado"
            }

            inputId.value = ""; //limpeza dos campos do formulário
        }
        catch(erro){
            console.log(erro)
            mensagem.innerText = "Erro ao excluir o produto"
        }

    }
)