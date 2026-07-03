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

app.get('/funcionarios', (req, res) => {
    const {setor, cargo, cnh} = req.query; //desestruturando os parâmetros de consulta da requisição

    let respostaDados = banco.funcionarios

    //caso o usuário queira filtrar por setor
    if(setor){
        respostaDados = respostaDados.filter(f => f.setor == setor);
    }
    //caso o usuário queira filtrar por cargo
    if(cargo){
        respostaDados = respostaDados.filter(f => f.cargo == cargo);
    }
    //caso o usuário queira filtrar por cnh
    if(cnh){
        respostaDados = respostaDados.filter(f => f.cnh == cnh);
    }

    res.status(200)
    res.json({
        qtdFuncionarios: respostaDados.length,
        funcionarios: respostaDados
      }) //enviado para o usuario uma resposta em formato JSON
    res.end() //finalizando a resposta
})
//Crie as rotas /funcionarios/:id , /produtos/:id e /unidades/:id para retornar os dados de um funcionário, produto ou unidade específica, com base no ID fornecido na URL. Se o ID não for encontrado, retorne uma mensagem de erro apropriada.

app.get('/funcionarios/:id', (req, res) => {
    const id = parseInt(req.params.id); //obtendo o ID da URL e convertendo para número inteiro
    const funcionario = banco.funcionarios.find(f => f.id == id); //procurando o funcionário com o ID fornecido

    if (funcionario) {
        res.status(200)
        res.json({
            funcionario: funcionario,
            mensagem: `Funcionário com ID ${id} encontrado com sucesso!`,
            status: 200
        }) //enviado para o usuario uma resposta em formato JSON
        res.end() //finalizando a resposta
    }
    else{
        res.status(404)
        res.json({
            mensagem: `Funcionário com ID ${id} nao encontrado!`,
            status: 404
        }) //enviado para o usuario uma resposta em formato JSON
        res.end()
        
    }
})

app.get('/produtos', (req, res) => {
    //incluindo parâmetros de consulta
    const {departamento} = req.query; //desestruturando os parâmetros de consulta da requisição

    let respostaDados = banco.produtos

    //caso o usuário queira filtrar por departamento
    if(departamento){
        respostaDados = respostaDados.filter(f => f.departamento == departamento);
    }

    res.status(200)
    res.json({
        qtdProdutos: respostaDados.length,
        funcionarios: respostaDados
      }) //enviado para o usuario uma resposta em formato JSON
    res.end()
})

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id); //obtendo o ID da URL e convertendo para número inteiro
    const produto = banco.produtos.find(f => f.id == id); //procurando o produto com o ID fornecido

    if (produto) {
        res.status(200)
        res.json({
            produto: produto,
            mensagem: `Produto com ID ${id} encontrado com sucesso!`,
            status: 200
        }) //enviado para o usuario uma resposta em formato JSON
        res.end() //finalizando a resposta
    }
    else{
        res.status(404)
        res.json({
            mensagem: `Produto com ID ${id} nao encontrado!`,
            status: 404
        }) //enviado para o usuario uma resposta em formato JSON
        res.end()
        
    }
})

app.get('/unidades', (req, res) => {
    const {cidade, estado} = req.query; //desestruturando os parâmetros de consulta da requisição

    let respostaDados = banco.unidades

    //caso o usuário queira filtrar por cidade
    if(cidade){
        respostaDados = respostaDados.filter(f => f.cidade == cidade);
    }
    //caso o usuário queira filtrar por estado
    if(estado){
        respostaDados = respostaDados.filter(f => f.estado == estado);
    }
    res.status(200)
    res.json({
        qtdUnidades: respostaDados.length,
        unidades: respostaDados.unidades 
      }) //enviado para o usuario uma resposta em formato JSON
    res.end()
})


//definição do servidor
app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
})