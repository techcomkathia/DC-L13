// arquivo que contém as configurações do sequelize e inicializa a conexão com o banco de dados
const {Sequelize} = require('sequelize');

//gerar uma nova instancia do sequelize
const sequelize = new Sequelize('livrarialive13', 'root', 'km2026', {host: 'localhost', dialect: 'mysql', port: 3306});

sequelize.authenticate() //método assincrônico que verifica se a conexão com o banco de dados foi bem sucedida
.then(() => {
    console.log('Conectado ao banco de dados com sucesso!');
})
.catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});

module.exports = sequelize