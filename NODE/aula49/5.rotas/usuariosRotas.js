const express = require('express');
const  usuariosController = require('../3.Controladores/usuariosControllers');
const validacaoUsuario = require('../4.middlewares/validacaoMiddlewares');

const router = express.Router();

//router.metodo('rota',middleware,(req, res)=> controlador.metodo());
///usuarios - post
router.get('/', (req, res)=> usuariosController.getUsuarios(req, res));
router.post('/', validacaoUsuario,(req, res)=> usuariosController.postUsuario(req, res));


module.exports = router