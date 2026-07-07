//importação dos módulos
const express = require('express')
const fs = require('fs')

//leitura e conversao dos dados do json
const dadosBanco = JSON.parse(fs.readFileSync('dbEscola.json', 'utf-8'))

//criação das rotas
//1º passo: instancia do express
const app = express() 

//2ª passo: criação das rotas
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
                descricao: `Retorna a lista das nossas ${dadosBanco.unidades.length} unidades` //utilizar o comprimento do array de unidades para informar a quantidade de unidades
            }
        ]
    })
    res.end()
})
//rota para alunos
/*app.get('/alunos', (req, res) => {
    res.status(200)
    res.json({
        qtdAlunos: dadosBanco.alunos.length,
        alunos: dadosBanco.alunos
    })
    res.end()
})*/

//rota principal para alunos será modificada para permitir o uso de parâmetros de consulta
app.get('/alunos', (req, res) => {

    //incluindo parâmetros de consulta
    const {curso, nome} = req.query; //desestruturando os parâmetros de consulta da requisição

    let dadosBancoAlunos = dadosBanco.alunos

    if(curso){
        //banco de dados filtrado e atualizado com base no parâmetro de consulta
        dadosBancoAlunos = dadosBancoAlunos.filter(a => a.curso == curso);
    }

    if(nome){
        //banco de dados filtrado e atualizado com base no parâmetro de consulta
        dadosBancoAlunos = dadosBancoAlunos.filter(a => a.nome == nome);
    }

    if(dadosBancoAlunos.length == 0){
        res.status(404)
        res.json({
            mensagem: "Nenhum aluno encontrado",
            status: 404
        })
        res.end()
    }

    res.status(200)
    res.json({
        qtdAlunos: dadosBancoAlunos.length,
        alunos: dadosBancoAlunos
    })
    res.end()

})
//rota para filtrar curso e nome
//alunos?curso=informatica&nome=cleitinho


//alunos/:id
app.get('/alunos/:id', (req, res) => {
    //usar o objeto req para ter acesso as parâmetros da URL
    const id = parseInt(req.params.id) //obtendo o ID da URL e convertendo para número inteiro

    const aluno = dadosBanco.alunos.find(a => a.id == id) //procurando o aluno com o ID fornecido

    if(!aluno){
        res.status(404)
        res.json({
            mensagem: `Aluno com ID ${id} nao encontrado!`,
            status: 404,
            erro: "Aluno nao encontrado"
        })
        res.end()
    }

    res.status(200)
    res.json({
        aluno: aluno,
        mensagem: `Aluno com ID ${id} encontrado com sucesso!`,
        status: 200
    })
    res.end()
})

//3º criação do servidor
app.listen(8000, () => {
    console.log('Servidor iniciado na porta 8000')
    console.log('Acesse no navegador http://localhost:8000 para requisições do tipo GET')
})
