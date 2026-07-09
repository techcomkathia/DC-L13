// importar a instancia do sequelize
const sequelize = require('./sequelize');
// importar o DataTypes
const { DataTypes } = require('sequelize');

/*Table: item
Columns:
idItem int AI PK 
nomeItem varchar(50) 
valorUnit decimal(10,2)*/

//fazer a definição do modelo Itens
const ItensModel = sequelize.define('Item', {
    idItem: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeItem: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    valorUnit: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},
//é o objeto de configurações da tabela, que desabilita os timestamps ( colunas criadas para inserir datas de criação e atualização )
{
    tableName: 'Item',
    timestamps: false
});

//exportar o modelo Itens
module.exports = ItensModel;