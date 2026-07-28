/*Atividade 3 - Crie a instancia principal do express no arquivo app.js
//crie faça a requisição do módulo express no arquivo loginRotas.js e instancie uma router.
crie uma rota post para o recurso de login, essa rota deve receber um email e uma senha e retornar um token de acesso, se o email e senha forem corretos.*/
const express = require('express');
const router = express.Router();
const {  postLogin } = require('../3.Controladores/loginControllers');

router.post('/', postLogin);

module.exports = router