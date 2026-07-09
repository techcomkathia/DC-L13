/*Table: produtor
Columns:
codProd int AI PK 
nomeProdutor varchar(100) 
endereco varchar(100) 
cidade varchar(50) 
uf char(2)*/

const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');


const ProdutoresModel = sequelize.define('produtor', {
    codProd: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeProdutor: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    uf: {
        type: DataTypes.STRING(2),
        allowNull: false
    }
},
{
    tableName: 'produtor',
    timestamps: true
}
);

module.exports = ProdutoresModel;
