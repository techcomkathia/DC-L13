const {Sequelize} = require('sequelize');
const sequelizeTeste = new Sequelize('testeSequelize', 'root', 'km2026', {host: 'localhost', dialect: 'mysql', port: 3306});

const {DataTypes} = require('sequelize');

const TabelaExemploModel = sequelizeTeste.define('TabelaExemplo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   coluna1: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    coluna2: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},
{
    tableName: 'TabelaExemplo',
    timestamps: true
})




sequelizeTeste.authenticate()
.then(() => {
    sequelizeTeste.sync({alter: true});
    console.log('Conectado ao banco de dados com sucesso!');
})
.catch((error) => {
    console.error('Erro ao conectar ao banco de dados:', error);
});