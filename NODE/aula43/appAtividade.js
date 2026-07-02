const express = require('express');
const app = express();
app.use(express.json()); //middleware para habilitar o uso do JSON no corpo da requisição

/*----- Requisição dos dado  -----*/
const fs = require('fs');
const banco = JSON.parse(fs.readFileSync('./bancoDados.json')); //lendo o arquivo bancoDados.json e convertendo para objeto JavaScript
/*-------------------------------- */


//definição das rotas
app.get('/', (req, res) => {
    res.status(200)
    res.json({
    "mensagem": "Olá, seja bem-vindo a nossa API!",
    "recursos": [
        {
            rota: "/funcionarios",
            metodo: "GET",
            descricao: "Retorna uma lista de funcionários"
        },
        {
            rota: "/produtos",
            metodo: "GET",
            descricao: "Retorna uma lista de produtos"
        },
        {
            rota: "/unidades",
            metodo: "GET",
            descricao: `Retorna a lista das nossas ${banco.unidades.length} unidades` //utilizar o comprimento do array de unidades para informar a quantidade de unidades
        }
    ],
    data: "2023-03-15T10:30:00Z"}) //enviado para o usuario uma resposta em formato JSON
    res.end() //finalizando a resposta
})

app.get('/funcionarios', (req, res) => {})

app.get('/produtos', (req, res) => {})

app.get('/unidades', (req, res) => {})


//definição do servidor
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
})