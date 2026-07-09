//importar o sequelize (conexão com o banco de dados)
const sequelize = require('./ExemploSequelize');
//importar o DataTypes
const {DataTypes} = require('sequelize');
/*id_autor int AI PK 
nome char(100) 
nacionalidade varchar(50) 
data_nascimento date*/
const Autores = sequelize.define('Autores',{
    id_autor:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nacionalidade:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    data_nascimento:{
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    tableName: 'Autores',
    timestamps: false
});

module.exports = Autores