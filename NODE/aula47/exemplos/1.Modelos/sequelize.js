const {Sequelize} = require("sequelize")

const sequelize = new Sequelize('livrariaLive13', 'root', 'km2026',
    {
        host: 'localhost',
        dialect: 'mysql', 
        port: 3306,
        logging:false //desabilitar os logs dos comandos sql executados no banco que são mostrados no terminal
    }
);

// verificar a conexão com o banco de dados
sequelize.authenticate()
.then(() => {
    sequelize.sync({alter: true}) //permite que o sequelize sincronize as tabelas com o banco de dados de acordo com o modelo definido, criando ou atualizando as tabelas no banco de dados
    console.log('Conectado ao banco de dados com sucesso! Tabelas sincronizadas!');
})
.catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error.message);
});


module.exports = sequelize