const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');

const AutoresModel = sequelize.define('autores', {
    id_autor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    nacionalidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    tableName: 'autores',
    timestamps: false
});

module.exports = AutoresModel