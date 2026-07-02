// requerir o express
const express = require('express');
const db = {
    frutas:[
        {id: 1, nome: 'Banana', preco: 2.5},
        {id: 2, nome: 'Maçã', preco: 3.0},
        {id: 3, nome: 'Laranja', preco: 4.0},
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
    resposta.status(200);
    resposta.json({
        qtdFrutas: db.frutas.length,
        frutas: db.frutas,
        data: new Date()
    });
    resposta.end();
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})