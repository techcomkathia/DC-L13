const jwt = require('jsonwebtoken');
//requisição e configuração do env
require('dotenv').config({path: '../.env'});

async function atenticacaoMiddleware(req, res, next) {

    try{
        const token = req.headers.authorization.split(' ')[1];
        const tokenDecodificado = jwt.verify(token, process.env.PALAVRA_SECRETA_JWT);
        if(!tokenDecodificado) {
            return res.status(401).json({erro: 'Token inválido'});
        }
        //adicionar um novo atributo no objeto de requisição chamado usuario
        req.infousuario = tokenDecodificado
        next()
    }
    catch(error){
        return res.status(401).json({erro: 'Token inválido'});
    }
    
}

module.exports = atenticacaoMiddleware