//iniciar com a instalação do express sequelize, mysql2 e nodemon

// a ordem da camada mais próxima do banco de dados para a camada mais próxima das rotas do express
// model -> services-> controller -> rotas -> (consumo do usuario/ camada de visualizacao) -> view

const express = require('express')
const CategoriasController = require('./3.Controladores/CategoriasController')
const {validacaoCategoria, validacaoLivro, validacaoAutor} = require('./4.middleware/validacao')
const AutoresController = require('./3.Controladores/AutoresController')
const LivrosController = require('./3.Controladores/LivrosController')

const app = express()
//utilizar o middleware para habilitar o uso do JSON no corpo da requisição
app.use(express.json())

app.get('/', (req, res) => res.json({mensagem: 'Olá, seja bem-vindo a nossa API!'}))
app.get('/categorias', (req, res) => CategoriasController.getCategorias(req, res))
//rota sem middleware
app.post('/livros', (req, res) => CategoriasController.criarCategoria(req, res))
//rota com middleware
app.post('/categorias',validacaoCategoria, (req, res) => CategoriasController.postCategoria(req, res))

app.get('/autores', (req, res) => AutoresController.getAutores(req, res))
app.post('/autores', validacaoAutor, (req, res) => AutoresController.postAutores(req, res))


app.get('/livros', (req, res) => LivrosController.getLivros(req, res))
app.get('/livros/:id', (req, res) => LivrosController.getLivro(req, res))

app.listen(3000, ()=>{
    console.log('servidor disponível em http://localhost:3000/categorias')
})


//CRIE A ROTA GET /LIVROS/:id
//A resposta deve ser um json com as informacoes do livro correspondente ao id passado na rota, incluindo nome da categoria e nome do autor do livro
//criar service e controller
//no service, criar uma funcao que recebe o id e retorna o livro correspondente ao id passado. Use o metodo findbyPk do sequelize para usando no objeto sequelize o include para incluir as informacoes da categoria e autor do livro