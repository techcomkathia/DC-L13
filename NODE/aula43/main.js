// requerir o express
const express = require('express');
const db = {
    frutas:[
        {id: 1, nome: 'Banana', preco: 2.5, tipo: 'não citrica', estado: 'madura'},
        {id: 2, nome: 'Maçã', preco: 3.0, tipo: 'não citrica', estado: 'verde'},
        {id: 3, nome: 'Laranja', preco: 4.0 , tipo: 'citrica', estado: 'madura'},
    ],
    legumes:[
        {id: 1, nome: 'Cenoura', preco: 2.5},
        {id: 2, nome: 'Batata', preco: 3.0},
    ]
}

// criar uma instancia do express
const app = express();

//uso do middleware para tratar o corpo da requisição
app.use(express.json()); //receber dados no corpo da requisição (post/put/patch) no formato JSON

//os métodos os express são: get, post, put, delete, patch
// eles recebem dois parâmetros: a rota e uma função de callback
app.get('/', (requisicao, resposta) => {
    //configurar status code da resposta
    resposta.status(201);
    resposta.json({
        mensagem: 'Olá, mundo!',
        data: new Date(),
        versao: '1.0.0',
        objetivo: 'Aprender Node.js e Express, demonstrando o uso de middlewares e rotas.'
    }); // envia uma resposta para o cliente
    resposta.end(); // encerra a resposta
})

app.get('/frutas', (requisicao, resposta) => {
    //incluindo parâmetros de consulta
    const {tipo,estado} = requisicao.query; //desestruturando os parâmetros de consulta da requisição

    let respostaDados = db.frutas

    //caso o usuário queira filtrar por tipo
    if(tipo){
        respostaDados = respostaDados.filter(f => f.tipo == tipo);
    }
    //caso o usuário queira filtrar por estado
    if(estado){
        respostaDados = respostaDados.filter(f => f.estado == estado);
    }
    resposta.status(200);
    resposta.json({
        qtdFrutas: respostaDados.length,
        frutas: respostaDados,
        data: new Date()
    });
    resposta.end();
})
//para fazer uma requisição com parâmetros de consulta, o usuário deve enviar a requisição no seguinte formato:
// http://localhost:3000/frutas?tipo=citrica&estado=madura

app.get('/frutas/:id', (requisicao, resposta) => {
    const id = parseInt(requisicao.params.id);
    const fruta = db.frutas.find(f => f.id == id);
    //tratar a resposta
    if(fruta){
        //sucesso
        resposta.status(200);
        resposta.json({
            fruta: fruta,
            mensagem: 'Fruta encontrada com sucesso!',
            status: 200
        });
        resposta.end();
    }
    else{
        //erro
        resposta.status(404);
        resposta.json({
            mensagem: 'Fruta não encontrada!',
            status: 404
        });
        resposta.end();
    }
    
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})