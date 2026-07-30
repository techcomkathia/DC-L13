const {Sequelize}= require('sequelize');
require('dotenv').config({path: '../.env'});//indicamos onde está o arquivo .env


/*const conexaoBanco = new Sequelize(process.env.NOME_BANCO, process.env.NOME_USUARIO_BANCO, process.env.SENHA_BANCO, {host: process.env.HOST_BANCO, dialect: 'mysql', port: process.env.PORTA_BANCO, logging: false});

*/
const conexaoBanco = new Sequelize('aula48_l13', 'root', 'km2026', {host:'localhost', dialect: 'mysql', port: 3306, logging: false});

module.exports = conexaoBanco

/*conexaoBanco.authenticate() //método assincrônico que cria as tabelas no banco de dados
.then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
})
.catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});*/

