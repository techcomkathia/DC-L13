const {Sequelize} = require('sequelize');

//Sequelize('nomeBancoDaos', 'username', 'password', {host: 'localhost', dialect: 'mysql', port: 3306});

const sequelize = new Sequelize('vendasLive13', 'root', 'km2026', {host: 'localhost', dialect: 'mysql', port: 3306});

//utilizar o méo sync para criar/ atualizar  as tabelasno banco de dados
sequelize.authenticate()
.then(() => {
    sequelize.sync({alter: true});
    console.log('Conectado ao banco de dados com sucesso e sincronizado!');
})
.catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
})

module.exports = sequelize