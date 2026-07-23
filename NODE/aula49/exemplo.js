//requisição do dotenv com o método config
const dotenv = require('dotenv').config();
console.log(process.env.MINHA_VARIAVEL);
console.log(Number(process.env.OUTRA_COISA)+100);