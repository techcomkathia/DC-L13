//a ideia é separar as rotas por "categoria" para esse processo vamos criar uma instância do express e criar um arquivo separado para cada categoria de rota
const express = require('express');
const rotasLogin = require('./5.rotas/loginRotas');
const rotasUsuarios = require('./5.rotas/usuariosRotas');
const banco = require('./1.modelos/conexaoBanco');
require('dotenv').config();
const autenticacao = require('./4.middlewares/autenticacaoMiddleware');

const app = express();

app.use(express.json());

app.use('/login', rotasLogin);
//definição da raiz de uma rota de categoria
//pp.use('/categoriaDeRota', routerArquivoRotaCategoria)
app.use('/usuarios', rotasUsuarios);



//exemplo rota autenticada
app.get('/exemplo', autenticacao, (req, res) => {
    res.json({
        mensagem: 'sucesso na requisição de uma rota autenticada'
    })
})

app.listen(3000, () => {
    banco.authenticate();
    console.log('Servidor rodando na porta 3000');
})