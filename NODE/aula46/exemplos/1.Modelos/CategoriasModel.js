//importar a instancia do sequelize
const sequelize = require('./sequelize');
//importar o DataTypes da biblioteca sequelize
const { DataTypes } = require('sequelize');

const CategoriasModel = sequelize.define('categorias', {
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
},
{
    tableName: 'categorias',
    timestamps: false //desabilita as colunas criadas para inserir datas de criação e atualização. Isso será feito pois as tabelas já contém dados
});


module.exports = CategoriasModel