//iniciar com a instalação do express sequelize, mysql2 e nodemon

// a ordem da camada mais próxima do banco de dados para a camada mais próxima das rotas do express
// model -> services-> controller -> rotas -> (consumo do usuario/ camada de visualizacao) -> view

const express = require('express')
const CategoriasController = require('./3.Controladores/CategoriasController')
const {validacaoCategoria} = require('./4.middleware/validacao')

const app = express()
//utilizar o middleware para habilitar o uso do JSON no corpo da requisição
app.use(express.json())

app.get('/', (req, res) => res.json({mensagem: 'Olá, seja bem-vindo a nossa API!'}))
app.get('/categorias', (req, res) => CategoriasController.getCategorias(req, res))
//rota sem middleware
app.post('/livros', (req, res) => CategoriasController.criarCategoria(req, res))
//rota com middleware
app.post('/categorias',validacaoCategoria, (req, res) => CategoriasController.postCategoria(req, res))


app.listen(3000, ()=>{
    console.log('servidor disponível em http://localhost:3000/categorias')
})