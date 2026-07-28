require('dotenv').config({path: '../.env'});//indicamos onde está o arquivo .env
const jwt = require('jsonwebtoken')

const token = jwt.sign({
        chave: 'esse objeto será armazenado no token na parte de payload',
        objetivo: 'as informações aqui do payload serão armazenadas no token e podem ser utilizadas para autenticação e em outras partes do sistema'
    },
    process.env.PALAVRA_SECRETA_JWT,
    {expiresIn: '1h'}
    //valores possiveis para o expiresIn : '1d', '1h', '1m', '1s'
)
console.log(token);

//decodando o token
const tokenDecodificado = jwt.verify('token', process.env.PALAVRA_SECRETA_JWT);
console.log(tokenDecodificado);