const sequelize = require('./sequelize');
const { DataTypes } = require('sequelize');

/*Table: nf
Columns:
idNf int AI PK 
numeroNf int 
dataNf date*/


const NfModel = sequelize.define('nf', {
    idNf: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataNf: {
        type: DataTypes.DATE,
        allowNull: false
    },
    numeroNf: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},
{
    tableName: 'nf',
    timestamps: false
})

module.exports = NfModel