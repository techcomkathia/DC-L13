//CRUD
//create - Método POST 
//read - metodo GET (padrão do fecth e do navegador)
//update - metodo PUT (ou PATCH, verificar documentação da API)
//delete - metodo DELETE

//fetch com método post
//criação de um usuario
//fetch( urlAPI, objetoConfiguração)
fetch('https://fakestoreapi.com/user',
    {
        method: 'POST', //sempre em maiusculo
        headers: {
            'Content-type': 'application/json' //informa o tipo de dados que estamos enviando
        },
        body: JSON.stringify(
            {
                id: 500,
                username: "Cleitinho Lima",
                email: "cleitinho@gatoLaranja.com.br",
                password: "sache123"

            }
        )

    }
)
.then((respostaAPI) => {
    console.log(respostaAPI)  //mostra a resposta no console
    //verificar o status da resposta
    if(respostaAPI.status == 201){
        console.log('Usuário criado com sucesso');
        return respostaAPI.json() //converte o corpo da resposta para json e retorna esse objeto para o próximo then
    }
    else{
        //podemos levar o erro para o catch
        throw new Error('Erro ao criar usuário')
    }
     //retorna o objeto json
})
.then((objetoResposta)=>{
    //verificar o status da resposta
    console.log(objetoResposta);
}) //verificar o status da resposta (201 ou 400)
.catch((erro)=>{
    console.log(erro);
}) //tratamento de erros
