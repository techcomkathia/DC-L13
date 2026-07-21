const conexaoBanco = require('./conexaoBanco')
const { DataTypes } = require('sequelize')

const UsuarioModel = conexaoBanco.define('usuarios', {
    id:{ 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING, //para suportar a criação de senhas criptografadas
        allowNull: false
    }
})

//para a criação dessa tabela que ainda não existe no banco de dados
module.exports = UsuarioModel
