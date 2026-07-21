//ese arquivo contém as configurações do sequelize e inicializa a conexão com o banco de dados e a sincronização (criação) das tabelas com o banco de dados

const conexaoBanco = require('./conexaoBanco')
const UsuarioModel = require('./usuariosModel')

conexaoBanco.authenticate() //método assincrônico que cria as tabelas no banco de dados
.then(() => {
    //sincronizar as tabelas com o banco de dados
    UsuarioModel.sync({force: true})
    console.log('Tabelas criadas com sucesso!');
})
.catch((error) => {
    console.error('Erro ao criar tabelas:', error);
});