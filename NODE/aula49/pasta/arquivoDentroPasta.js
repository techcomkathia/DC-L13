//requisição do dotenv com o método config
//porém o arquivo .env está em outra pasta

const dotenv = require('dotenv').config({path: '../.env'});//indicamos onde está o arquivo .env
console.log(process.env.MINHA_VARIAVEL);
console.log(Number(process.env.OUTRA_COISA)+100);