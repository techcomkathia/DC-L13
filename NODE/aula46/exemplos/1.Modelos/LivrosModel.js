const sequelize = require('./sequelize');//importar a instancia do sequelize
const { DataTypes } = require('sequelize'); //importar o DataTypes da biblioteca sequelize

// importação dos modelos que armazenam as referencias para as chaves estrangeiras
const CategoriasModel = require('./CategoriasModel');
const AutoresModel = require('./AutoresModel');


const LivrosModel =  sequelize.define('livros', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
//definição das chaves estrangeiras
    categoria_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CategoriasModel,
            key: 'id_categoria'
        }
    },
    autor_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: AutoresModel,
            key: 'id_autor'
        }
    }
},
{
    tableName: 'livros',
    timestamps: false
});

module.exports = LivrosModel