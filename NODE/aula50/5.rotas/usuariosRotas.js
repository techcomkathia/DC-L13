const express = require('express');
const  usuariosController = require('../3.Controladores/usuariosControllers');
const validacaoUsuario = require('../4.middlewares/validacaoMiddlewares');

const router = express.Router();

//router.metodo('rota',middleware,(req, res)=> controlador.metodo());
///usuarios - post
router.get('/', (req, res)=> usuariosController.getUsuarios(req, res));
router.post('/', validacaoUsuario,(req, res)=> usuariosController.postUsuario(req, res));
router.delete('/:id', autenticacao, execuçãoControler)
//ATIVIDADE: crie uma rota para deletar um usuario por id, que exija autenticação. Crie o controlador e o serviço para que tudo funcione corretamente

//ao tentar deletar um usuario sem autenticação não será executado o controlador
// ao tentar deletar um usuario que não existe o controlador retornará um status 404 e uma mensagem de erro
// ao tentar deletar um usuario com sucesso o controlador retornara um status 200 e uma mensagem de sucesso

module.exports = router