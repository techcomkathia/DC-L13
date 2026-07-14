const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');

const NfModel = require('./NfModel');
const ItensModel = require('./ItensModel');
const ProdutoresModel = require('./ProdutoresModel');

/*Table: venda
Columns:
idVenda int AI PK 
fkNf int 
fkItem int 
fkProd int 
quantidade int 
desconto int*/

const VendasModel = sequelize.define('venda', {
    idVenda: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fkNf: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: NfModel,
            key: 'idNf'
        }
    },
    fkItem: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ItensModel,
            key: 'idItem'
        }
    },
    fkProd: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProdutoresModel,
            key: 'codProd'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    desconto: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    tableName: 'venda',
    timestamps: false
})

module.exports = VendasModel